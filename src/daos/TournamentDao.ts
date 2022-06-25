import { collection, doc, getDocs, getDoc, updateDoc } from 'firebase/firestore'

import TournamentsGroup from '../entities/TournamentsGroup'
import Tournament from '../entities/Tournament'

import { db } from '../firebase/Firebase'

// daos
import matchDaoCreator from './MatchDao'
import playerDaoCreator from './PlayerDao'

// entities
import Phase from '../entities/Phase'

import axios from 'axios'

export default function tournamentDao () {

    async function updateTournamentGroup(tournamentGroup: TournamentsGroup){
        const tournamentGroupDoc = {
            name: tournamentGroup.getName(),
            tournaments: tournamentGroup.getTournaments().map(tournament => {
                return {
                    name: tournament.getName(),
                    phases: tournament.getPhases().map((phase, index) => {
                        return {
                            number: index + 1,
                            matches: phase.getMatches().map(match => match.getId())
                        }
                    }),
                    players: tournament.getPlayers().map(player => player.getId())
                }
            })
        }
        await updateDoc(doc(db, 'tournamentGroup', tournamentGroup.getId()), tournamentGroupDoc)
    }

    async function addTournamentGroup(tournamentGroup: TournamentsGroup){
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

    async function getTournamentGroups_Lazy(): Promise<TournamentsGroup[]>{
        try{
            const response = await axios.get(`${process.env.REACT_APP_TENNIS_API_URL}/tournamentsGroups`)
            console.log(response.data)
            const result = []
            for(let i = 0; i < response.data.length; i++){
                const tournamentsGroup = response.data[i]
                const tournaments = []
                for(let j = 0; j < tournamentsGroup.tournaments; j++){
                    const tournament = tournamentsGroup.tournaments[j]
                    tournaments.push(
                        new Tournament(
                            '',
                            tournamentsGroup.id,
                            tournamentsGroup.name,
                            tournament.name,
                            [],
                            [],
                            false
                        )
                    )
                }
                result.push(new TournamentsGroup(
                    tournamentsGroup.id,
                    tournamentsGroup.name,
                    tournaments
                ))
            }
            return result
        }catch(err){
            throw err
        }
        /*const datos = await getDocs(collection(db, 'tournamentGroup'))
        const result = []
        datos.forEach(doc => {
            const data = doc.data()
            result.push(
                new TournamentGroup(
                    doc.id,
                    data.name,
                    data.tournaments.map(tournament => {
                        return new Tournament(
                            doc.id,
                            data.name,
                            tournament.name,
                            null,
                            null,
                            tournament.phases !== undefined
                        )
                    })
                )
            )
        })
        return result*/
    }

    async function getTournamentGroups() {
        const datos = await getDocs(collection(db, 'tournamentGroup'))
        const playerDao = playerDaoCreator()
        const players = await playerDao.getPlayers()
        const matchDao = matchDaoCreator()
        const allMatches = await matchDao.getMatches()
        const result: TournamentsGroup[] = []
        datos.forEach(doc => {
            const data = doc.data()
            result.push(
                new TournamentsGroup(
                    doc.id,
                    data.name,
                    data.tournaments.map((tournament: { name: string; players: any[]; phases: any[] }) => {
                        return new Tournament(
                            '',
                            doc.id,
                            data.name,
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
                            }),
                            tournament.phases !== undefined
                        )
                    })
                )
            )
        })
        return result
    }

    async function getTournamentByTournamentGroupIdAndName(tournamentGroupId: string, name: string) {
        const playerDao = playerDaoCreator()
        const players = await playerDao.getPlayers()
        const matchDao = matchDaoCreator()
        const allMatches = await matchDao.getMatches()
        const docTournamentGroup = await getDoc(doc(db, 'tournamentGroup', tournamentGroupId))
        const dataTournamentGroup = docTournamentGroup.data()
        if(!dataTournamentGroup){
            return null
        }
        for(let i = 0; i < dataTournamentGroup.tournaments.length; i++){
            const tournamentFetched = dataTournamentGroup.tournaments[i]
            if(name === tournamentFetched.name){
                const started = tournamentFetched.phases !== undefined
                const result = new Tournament(
                    '',
                    tournamentGroupId, 
                    dataTournamentGroup.name,
                    name, 
                    tournamentFetched.players.map((playerId: string) => {
                        return players.filter(pl => pl.getId() === playerId)[0]
                    }),
                    tournamentFetched.phases.map((phase: { matches: string | any[]; number: number }) => {
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
                    }), 
                    started
                )
                return result
            }
        }
        return null
        
        /*const playerDao = playerDaoCreator()
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
                            '',
                            doc.id,
                            data.name,
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
                            }),
                            tournament.phases !== undefined
                        )
                    })
                )
            )
        })
        return result*/
    }

    
    return Object.freeze({ 
        addTournamentGroup, getTournamentGroups, getTournamentGroups_Lazy, updateTournamentGroup, getTournamentByTournamentGroupIdAndName
    });

}