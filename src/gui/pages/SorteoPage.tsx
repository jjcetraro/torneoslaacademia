import { Key, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

import MessagePage from './MessagePage'

import { collection, updateDoc, doc, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/Firebase'

import Player from '../../entities/Player'
import { getPlayers } from '../../api/PlayerAPI'
import { getTournament } from '../../api/TournamentAPI'

import { v4 as uuidv4 } from 'uuid';

export default function SorteoPage() {
    
    const [tournamentGroupId, setTournamentGroupId] = useState<string>()
    const [tournaments, setTournaments] = useState<any>()

    useEffect(() => {
        const init = async () => {
            const _tournaments = []
            _tournaments.push(await getTournament('f45a320e-a395-4f61-b260-0d6c97b85d73'))
            _tournaments.push(await getTournament('0258f681-d3a9-47a8-9709-b3ccf5756c5a'))
            _tournaments.push(await getTournament('7ba6d95f-27e7-42ff-8cc1-a5d497d35ac9'))
            _tournaments.push(await getTournament('cac38751-b20b-40fb-b79a-b6ac1a6fddbc'))
            _tournaments.push(await getTournament('9d860b1e-09af-49c0-80f0-a99dfcf1faf7'))
            setTournamentGroupId('099eb0d8-85fd-4b25-a8ea-1fe0b34e7e86')
            setTournaments(_tournaments)
        }
        init()
    }, [])

    const handleClickSortearCruces = async (event: any) => {
        event.target.setAttribute('disabled', '')
        const divTournament = document.getElementById('divTournaments')
        if(!divTournament) return
        const tournamentDivs = divTournament.children
        const categorias = []
        for(let i = 0; i < tournamentDivs.length-1; i++){
            const tournamentDiv = tournamentDivs[i]
            const categoria: any = {name: tournamentDiv.children[0].innerHTML}
            categoria.players = []
            for(let j = 1; j < tournamentDiv.children.length; j++){
                const playerId = (tournamentDiv.children[j].children[0] as HTMLElement).dataset.playerId
                categoria.players.push({
                    id: playerId,
                    position: (tournamentDiv.children[j].children[1] as HTMLSelectElement).value
                })
            }
            categorias.push(categoria)
        }

        try{
            verificarQueFueronSeteadasLasPrimeras4Posiciones(categorias)
        }catch(error){
            event.target.removeAttribute('disabled')
            alert(error)
            return
        }

        // armo las fases para cada categoria
        for(let i = 0; i < categorias.length; i++){
            const categoria = categorias[i]
            for(let j = 5; j <= categoria.players.length; j++){
                let player = getRandomPlayer(categoria.players)
                while(player.position){
                    player = getRandomPlayer(categoria.players)
                }
                player.position = `${j}`
            }
        }

        const matchPositions = getMatchPositions()

        const tournamentsCopy: any = []
        for(let i = 0; i < tournaments.length; i++){
            tournamentsCopy.push({
                tournamentId: tournaments[i].id,
                players: tournaments[i].players,
                phases: []
            })
        }
        let nextPhaseId = 81
        for(let i = 0; i < categorias.length; i++){
            const categoria = categorias[i]
            const phases = []
            const phase: {id: number, number: number, matches: any[]} = {id: (nextPhaseId++), number: 1, matches: []}
            phases.push(phase)
            for(let j = 0; j < matchPositions.length; j++){
                const matchP = matchPositions[j]
                const player1 = getPlayerByPosition(categoria.players, `${matchP[0]}`)
                const player2 = getPlayerByPosition(categoria.players, `${matchP[1]}`)
                const match = {
                    id: uuidv4(),
                    player1: player1 ? player1.id : null, 
                    player2: player2 ? player2.id : null
                }

                //const dbResult = await addDoc(collection(db, 'match'), match)
                //match.id = dbResult.id
                console.log(`match added!`)

                phase.matches.push(match)
            }
            for(let j = 2; j <= 6; j++){
                const phase2: {id: number, number: number, matches: any[]} = {id: (nextPhaseId++), number: j, matches: []}
                for(let k = 0; k <= Math.pow(2, 6 - j) - 1; k++){
                    const match = {
                        id: uuidv4(),
                        player1: null, 
                        player2: null
                    }
    
                    //const dbResult = await addDoc(collection(db, 'match'), match)
                    //match.id = dbResult.id
                    console.log(`match added!`)
    
                    phase2.matches.push(match)
                }
                phases.push(phase2)
            }
            const catIndex = getCategoryIndex(categoria.name)
            if(catIndex === undefined) return
            tournamentsCopy[catIndex].phases = phases
            tournamentsCopy[catIndex].players = tournamentsCopy[catIndex].players.map((player: Player) => player.getId())
        }

        if(!tournamentGroupId) return
        //await updateDoc(doc(db, 'tournamentGroup', tournamentGroupId), {
        //    tournaments: tournamentsCopy
        //})
        console.log(tournamentsCopy)

        for(let i = 0; i < tournamentsCopy.length; i++){
            const tournamentCopy = tournamentsCopy[i]
            for(let j = 0; j < tournamentCopy.phases.length; j++){
                const phase = tournamentCopy.phases[j]
                console.log(`insert into tennis_api.tournament_phase values (${phase.id}, ${phase.number}, '${tournamentCopy.tournamentId}');`)
                for(let k = 0; k < phase.matches.length; k++){
                    const match = phase.matches[k]
                    const player1 = match.player1 ? `'${match.player1}'` : 'null'
                    const player2 = match.player2 ? `'${match.player2}'` : 'null'
                    console.log("INSERT INTO `tennis_api`.`match` (`id`, `player1_id`, `player1_wins`, `player2_id`, `tournament_phase_id`, `index_in_tournament_phase`) VALUES ('"+match.id+"', "+player1+", false, "+player2+", '"+phase.id+"', "+k+");")
                }
            }
        }

        //window.location.href = '/tournaments'
    }
    
    return (
        tournaments
        ?
        <div id="divTournaments">
            {tournaments.map((tournament: { name: any; players: any[] }, tournamentIndex: Key | null | undefined) => {
                return (
                    <div key={tournamentIndex} style={{margin:'20px'}}>
                        <h3>{`${tournament.name}`}</h3>
                        {
                            tournament.players.map((player, playerIndex) => {
                                return (
                                    <Form.Group key={`${tournamentIndex}_${playerIndex}`} className="mb-3">
                                        <Form.Label data-player-id={player.getId()}>{player.getName()}</Form.Label>
                                        <Form.Select name="position">
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </Form.Select>
                                    </Form.Group>
                                )
                            })
                        }
                    </div>
                )
            })}
            <div style={{textAlign: 'center', padding: '30px'}}>
                <Button onClick={handleClickSortearCruces}>Sortear Cruces</Button>
            </div>
        </div>
        :
        <MessagePage message="Cargando..."/>
    )
}

function verificarQueFueronSeteadasLasPrimeras4Posiciones(categorias: any){
    for(let i = 0; i < categorias.length; i++){
        const categoria = categorias[i]
        for(let j = 1; j <= 4; j++){
            let cantJugadoresEnPosicion = 0
            for(let k = 0; k < categoria.players.length; k++){
                if(categoria.players[k].position === `${j}`){
                    cantJugadoresEnPosicion++
                }
            }
            if(j <= categoria.players.length && cantJugadoresEnPosicion !== 1){
                throw Error('Las posiciones seleccionadas no son validas')
            }
        }
    }
}

function getRandomPlayer(players: any){
    const randomIndex = Math.floor(Math.random() * (players.length));
    return players[randomIndex]
}

function getMatchPositions(){
    /*return [
        [1, 32], [16, 17], [9, 24], [8, 25],
        [5, 28], [12, 21], [13, 20], [4, 29],
        [3, 30], [14, 19], [11, 22], [6, 27],
        [7, 26], [10, 23], [15, 18], [2, 31]
    ]*/
    return [
        [1, 64], [32, 33], [17, 48], [16, 49],
        [9, 56], [24, 41], [25, 40], [8, 57],
        [5, 60], [28, 37], [21, 44], [12, 53],
        [13, 52], [20, 45], [29, 36], [4, 61],
        [3, 62], [30, 35], [19, 46], [14, 51],
        [11, 54], [22, 43], [27, 38], [6, 59],
        [7, 58], [26, 39], [23, 42], [10, 55],
        [15, 50], [18, 47], [31, 34], [2, 63]
    ]
}

function getPlayerByPosition(players: any, position: any){
    for(let i = 0; i < players.length; i++){
        const player = players[i]
        if(player.position === position){
            return player
        }
    }
    return null
}

function getCategoryIndex(categoryName: string){
    if(categoryName.startsWith('Categoría A')){
        return 0
    }else if(categoryName.startsWith('Categoría B')){
        return 1
    }else if(categoryName.startsWith('Categoría C')){
        return 2
    }else if(categoryName.startsWith('Categoría D')){
        return 3
    }else if(categoryName.startsWith('Categoría E')){
        return 4
    }
}