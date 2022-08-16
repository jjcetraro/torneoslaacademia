// external libs
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore'

// entities
import Match from '../entities/Match'

// firebase
import { db } from '../firebase/Firebase'

// daos
import playerDaoCreator from './PlayerDao'

export default function matchDao(){

    async function addMatch(match: Match){
        const dbMatch = {
            player1: match.getPlayer1()?.getId(),
            player2: match.getPlayer2()?.getId()
        }
        const dbResult = await addDoc(collection(db, 'match'), dbMatch)
        match.setId(dbResult.id)
    }

    async function getMatches() {
        const datos = await getDocs(collection(db, 'match'))
        const playerDao = playerDaoCreator()
        const players = await playerDao.getPlayers()
        const result: Match[] = []
        datos.forEach(doc => {
            const data = doc.data()
            result.push(
                new Match(
                    doc.id,
                    players.filter(pl => pl.getId() === data.player1)[0],
                    players.filter(pl => pl.getId() === data.player2)[0],
                    data.date,
                    data.result,
                    false,
                    false
                )
            )
        })
        return result
    }

    async function getMatchById(id: string){
        return (await getMatches()).filter(match => match.getId() === id)[0]
    }

    async function updateMatch(match: Match){
        const matchDoc = {
            player1: match.getPlayer1()?.getId(),
            player2: match.getPlayer2()?.getId(),
            result: match.getResult() ? match.getResult() : null,
            wo: match.isWO(),
            player1Wins: match.isPlayer1Wins(),
            date: ''
        }
        if(match.getDate()){
            matchDoc.date = match.getDate() ? '' : ''
        }
        await updateDoc(doc(db, 'match', match.getId()), matchDoc)
    }
    
    return Object.freeze({ 
        addMatch, getMatches, updateMatch
    });
}