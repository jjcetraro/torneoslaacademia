import { Key, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

import MessagePage from './MessagePage'

import { collection, getDocs, updateDoc, doc, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/Firebase'

import playerDaoCreator from '../../daos/PlayerDao'
import Player from '../../entities/Player'

export default function SorteoPage() {
    
    const [tournamentGroupId, setTournamentGroupId] = useState<string>()
    const [tournaments, setTournaments] = useState<any>()

    useEffect(() => {
        const init = async () => {
            const datos = await getDocs(collection(db, 'tournamentGroup'))
            let _tournamentGroupId
            let tournamentGroupData: any
            datos.forEach(doc => {
                _tournamentGroupId = doc.id
                tournamentGroupData = doc.data()
            })
            if(!tournamentGroupData) return
            const playerDao = playerDaoCreator()
            const players = await playerDao.getPlayers()
            const _tournaments = []
            for(let i = 0; i < tournamentGroupData.tournaments.length; i++){
                const tournament = tournamentGroupData.tournaments[i]
                tournament.players = tournament.players.map((playerId: string) => {
                    return players.filter(player => player.getId() === playerId)[0]
                })
                _tournaments.push(tournament)
            }
            setTournamentGroupId(_tournamentGroupId)
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
                name: tournaments[i].name,
                players: tournaments[i].players,
                phases: []
            })
        }
        for(let i = 0; i < categorias.length; i++){
            const categoria = categorias[i]
            const phases = []
            const phase: {number: number, matches: string[]} = {number: 1, matches: []}
            phases.push(phase)
            for(let j = 0; j < matchPositions.length; j++){
                const matchP = matchPositions[j]
                const player1 = getPlayerByPosition(categoria.players, `${matchP[0]}`)
                const player2 = getPlayerByPosition(categoria.players, `${matchP[1]}`)
                const match = {
                    id: '',
                    player1: player1 ? player1.id : null, 
                    player2: player2 ? player2.id : null
                }

                const dbResult = await addDoc(collection(db, 'match'), match)
                match.id = dbResult.id
                console.log(`match added!`)

                phase.matches.push(match.id)
            }
            for(let j = 2; j <= 6; j++){
                const phase2: {number: number, matches: string[]} = {number: j, matches: []}
                for(let k = 0; k <= Math.pow(2, 6 - j) ; k++){
                    const match = {
                        id: '',
                        player1: null, 
                        player2: null
                    }
    
                    const dbResult = await addDoc(collection(db, 'match'), match)
                    match.id = dbResult.id
                    console.log(`match added!`)
    
                    phase2.matches.push(match.id)
                }
                phases.push(phase2)
            }
            const catIndex = getCategoryIndex(categoria.name)
            if(catIndex === undefined) return
            tournamentsCopy[catIndex].phases = phases
            tournamentsCopy[catIndex].players = tournamentsCopy[catIndex].players.map((player: Player) => player.getId())
        }

        if(!tournamentGroupId) return
        await updateDoc(doc(db, 'tournamentGroup', tournamentGroupId), {
            tournaments: tournamentsCopy
        })
        
        window.location.href = '/tournaments'
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
    if(categoryName === 'Categoría A'){
        return 0
    }else if(categoryName === 'Categoría B'){
        return 1
    }else if(categoryName === 'Categoría C'){
        return 2
    }else if(categoryName === 'Categoría D'){
        return 3
    }else if(categoryName === 'Categoría E'){
        return 4
    }
}