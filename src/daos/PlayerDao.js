
import { collection, getDocs, addDoc } from 'firebase/firestore'

import Player from '../entities/Player'

import { db } from '../firebase/Firebase'

export default function playerDao(){

    async function addPlayer(player){
        const dbResult = await addDoc(collection(db, 'player'), {
            name: player.getName(),
            email: player.getEmail()
        })
        player.setId(dbResult.id)
    }

    async function getPlayers() {
        const datos = await getDocs(collection(db, 'player'))
        const result = []
        datos.forEach(doc => {
            const data = doc.data()
            result.push(
                new Player(
                    doc.id,
                    data.name ? data.name : '',
                    data.nickname ? data.nickname : '',
                    data.cellphoneNumber ? data.cellphoneNumber : '',
                    data.email ? data.email : '',
                    data.birthdate ? data.birthdate : '',
                    data.hand ? data.hand : '',
                    data.mutualist ? data.mutualist : '',
                    data.urgency ? data.urgency : '',
                    data.busySchedules ? data.busySchedules : ''
                )
            )
        })
        return result
    }

    async function getPlayerByEmail(email){
        const playersByEmail = (await getPlayers()).filter(player => player.getEmail() === email)
        if(playersByEmail.length === 0){
            return null
        }else if(playersByEmail.length === 1){
            return playersByEmail[0]
        }else {
            throw new Error(`There are ${playersByEmail.length} players with the email "${email}"`)
        }
    }

    async function getPlayerById(id){
        return (await getPlayers()).filter(player => player.getId() === id)[0]
    }


    
    return Object.freeze({ 
        addPlayer, getPlayers, getPlayerByEmail, getPlayerById
    });
}