
import { collection, getDocs, addDoc } from 'firebase/firestore'

import Match from '../entities/Match'

import { db } from '../firebase/Firebase'

// daos
import playerDaoCreator from './PlayerDao'

export default function matchDao(){

    async function getMatches() {
        const datos = await getDocs(collection(db, 'match'))
        const playerDao = playerDaoCreator()
        const players = await playerDao.getPlayers()
        const result = []
        datos.forEach(doc => {
            const data = doc.data()
            result.push(
                new Match(
                    doc.id,
                    players.filter(pl => pl.getId() === data.player1)[0],
                    players.filter(pl => pl.getId() === data.player2)[0],
                    null,
                    [],
                    false,
                    false
                )
            )
        })
        return result
    }
    
    return Object.freeze({ 
        getMatches
    });
}