import { collection, doc, getDocs, addDoc, deleteDoc } from 'firebase/firestore'

import TournamentGroup from '../entities/TournamentGroup'
import Tournament from '../entities/Tournament'

import { db } from '../firebase/Firebase'

// daos
import matchDaoCreator from './MatchDao'
import playerDaoCreator from './PlayerDao'

// entities
import Phase from '../entities/Phase'

export default function tournamentDao () {

    async function addTournamentGroup(tournamentGroup){
        /*const tournaments = []
        for(let i = 0; i < tournamentGroup.getTournaments().length; i++){
            const tournament = tournamentGroup.getTournaments()[i]
            tournaments.push({
                name: tournament.getName(),
                players: [],
                phases: []
            })
        }
        await addDoc(collection(db, 'tournamentGroup'), {
            name: tournamentGroup.getName(),
            tournaments
        })*/
    }

    /*async function getTournamentGroups() {
        return [
            new TournamentGroup(
                '1',
                'Torneos Febrero / Marzo 2022',
                [
                    await getTournamentById('1'),
                    await getTournamentById('2'),
                    await getTournamentById('3'),
                    await getTournamentById('4'),
                    await getTournamentById('5')
                ]
            )
        ]
    }*/

    async function getTournamentGroups() {
        const datos = await getDocs(collection(db, 'tournamentGroup'))
        const playerDao = playerDaoCreator()
        const players = await playerDao.getPlayers()
        const matchDao = matchDaoCreator()
        const allMatches = await matchDao.getMatches()
        const result = []
        datos.forEach(doc => {
            const data = doc.data()
            result.push(
                new TournamentGroup(
                    doc.id,
                    data.name,
                    data.tournaments.map(tournament => {
                        return new Tournament(
                            null,
                            tournament.name,
                            tournament.players.map(playerId => {
                                return players.filter(pl => pl.getId() === playerId)[0]
                            }),
                            tournament.phases.map(phase => {
                                const matches = []
                                for(let i = 0; i < phase.matches.length; i++){
                                    matches.push(
                                        allMatches.filter(m => m.getId() === phase.matches[i])[0]
                                    )
                                }
                                return new Phase(
                                    phase.number,
                                    matches
                                )
                            })
                        )
                    })
                )
            )
        })
        return result
    }

    async function getTournaments() {
        return [
            new Tournament('1', 'Categoría A', [], []),
            new Tournament('2', 'Categoría B', [], []),
            new Tournament('3', 'Categoría C', [], []),
            new Tournament('4', 'Categoría D', [], []),
            new Tournament('5', 'Categoría E', [], [])
        ]
    }

    async function getTournamentById(id) {
        return (await getTournaments()).filter(tournament => tournament.getId() === id)[0]
    }

    
    return Object.freeze({ 
        addTournamentGroup, getTournamentGroups, getTournaments, getTournamentById
    });

}