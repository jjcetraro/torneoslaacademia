import { useEffect, useState } from 'react'

import MessagePage from './MessagePage'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/Firebase'

import playerDaoCreator from '../../daos/PlayerDao'

export default function AnotadosPage() {
    
    const [tournaments, setTournaments] = useState(null)

    useEffect(async () => {
        const datos = await getDocs(collection(db, 'tournamentGroup'))
        let tournamentGroupId
        let tournamentGroupData
        datos.forEach(doc => {
            tournamentGroupId = doc.id
            tournamentGroupData = doc.data()
        })
        const playerDao = playerDaoCreator()
        const players = await playerDao.getPlayers()
        const _tournaments = []
        for(let i = 0; i < tournamentGroupData.tournaments.length; i++){
            const tournament = tournamentGroupData.tournaments[i]
            tournament.players = tournament.players.map(playerId => {
                return players.filter(player => player.getId() === playerId)[0]
            })
            _tournaments.push(tournament)
        }
        setTournaments(_tournaments)
    }, [])
    
    return (
        tournaments
        ?
        tournaments.map((tournament, tournamentIndex) => {
            return (
                <div key={tournamentIndex} style={{margin:'20px'}}>
                    <h3>{`${tournament.name} (${tournament.players.length} anotados)`}</h3>
                    {
                        tournament.players.map((player, playerIndex) => {
                            return (
                                <p key={`${tournamentIndex}_${playerIndex}`}>{player.getName()}</p>
                            )
                        })
                    }
                </div>
            )
        })
        :
        <MessagePage message="Cargando..."/>
    )
}
