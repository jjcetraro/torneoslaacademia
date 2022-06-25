// external libs
import { useEffect } from 'react'

// daos
import tournamentDaoCreator from '../../daos/TournamentDao'
import matchDaoCreator from '../../daos/MatchDao'

// entities
import Match from '../../entities/Match'
import Player from '../../entities/Player'
import Phase from '../../entities/Phase'

export default function PartidosPage() {

    const getWinner = (match: Match) => {
        if(match.getPlayer1() && match.getPlayer2()){
            return undefined
        } else if(match.getPlayer2() && !match.getPlayer1()){
            return match.getPlayer2()
        }else{
            return match.getPlayer1()
        }
    }
    
    /*useEffect(async () => {
        const tournamentDao = tournamentDaoCreator()
        const matchDao = matchDaoCreator()
        const tournamentGroup = (await tournamentDao.getTournamentGroups())[0]
        
        for(let i = 0; i < tournamentGroup.getTournaments().length; i++){
            const tournament = tournamentGroup.getTournaments()[i]
            //if(i === 0 || i === 3) continue
            console.log(`tournament ${tournament.getName()}`)
            const newPhases = [null, null, null, null, null, null]
            const phase0Matches = tournament.getPhases()[0].getMatches()
            const phase1Matches = []
            newPhases[0] = phase0Matches
            for(let j = 0; j < phase0Matches.length; j = j+2){
                const match1 = phase0Matches[j]
                const match2 = phase0Matches[j+1]
                const player1 = getWinner(match1)
                const player2 = getWinner(match2)
                const newMatch = new Match(
                    null, 
                    player1, 
                    player2, 
                    null, 
                    null, 
                    null, 
                    null
                )
                await matchDao.addMatch(newMatch)
                console.log(`new match added ${newMatch.getId()}`)
                phase1Matches.push(newMatch)
            }
            newPhases[1] = phase1Matches
            for(let j = 2; j < newPhases.length; j++){
                const matches = []
                for(let k = 0; k < newPhases[j-1].length; k = k+2){
                    const newMatch = new Match(null, null, null, null, null, null, null)
                    await matchDao.addMatch(newMatch)
                    console.log(`new match added ${newMatch.getId()}`)
                    matches.push(newMatch)
                }
                newPhases[j] = matches
            }

            const phases = newPhases.map((matches, index) => {
                return new Phase(
                    (index+1),
                    matches
                )
            })
            tournamentGroup.getTournaments()[i].setPhases(phases)
        }
        await tournamentDao.updateTournamentGroup(tournamentGroup)
        console.log(`tournamentgroup updated!`)
    }, [])*/

    return (
        <div>PartidosPage</div>
    ) 
}
