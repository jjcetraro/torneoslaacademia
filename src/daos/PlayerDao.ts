
import { collection, getDocs, addDoc } from 'firebase/firestore'

import Player from '../entities/Player'

import { db } from '../firebase/Firebase'

export default function playerDao(){

    async function addPlayer(player: Player){
        const dbResult = await addDoc(collection(db, 'player'), {
            name: player.getName(),
            email: player.getEmail()
        })
        player.setId(dbResult.id)
    }

    async function getPlayers() {
        const datos = await getDocs(collection(db, 'player'))
        const result: Player[] = []
        datos.forEach(doc => {
            const data = doc.data()
            result.push(
                new Player(
                    doc.id,
                    data.name ? data.name : '',
                    data.nickname ? data.nickname : '',
                    data.cellphoneNumber ? data.cellphoneNumber : '',
                    data.email ? data.email : '',
                    data.birthdate ? new Date(data.birthdate) : new Date(),
                    data.hand ? data.hand : '',
                    data.mutualist ? data.mutualist : '',
                    data.urgency ? data.urgency : '',
                    data.busySchedules ? data.busySchedules : ''
                )
            )
        })

        /*for(let i = 0; i < result.length; i++){
            const player = result[i];
            console.log(`INSERT INTO player (id, name, email, mobile, firestoreId) VALUES ('${uuid()}', '${player.getName()}', '${player.getEmail()?player.getEmail():''}', '${player.getCellphoneNumber()?player.getCellphoneNumber():''}', '${player.getId()}');`)
        }*/



        result.sort((a, b) => {
            if (a.getName() > b.getName()) {
              return 1;
            }
            if (a.getName() < b.getName()) {
              return -1;
            }
            // a must be equal to b
            return 0;
        });
        return result
    }

    async function getPlayerByEmail(email: string): Promise<Player>{
        const playersByEmail = (await getPlayers()).filter(player => player.getEmail() === email)
        if(playersByEmail.length === 0){
            throw new Error(`There is no player with the received email [email=${email}]`)
        }else if(playersByEmail.length === 1){
            return playersByEmail[0]
        }else {
            throw new Error(`There are ${playersByEmail.length} players with the email "${email}"`)
        }
    }

    async function getPlayerById(id: string){
        return (await getPlayers()).filter(player => player.getId() === id)[0]
    }


    
    return Object.freeze({ 
        addPlayer, getPlayers, getPlayerByEmail, getPlayerById
    });
}