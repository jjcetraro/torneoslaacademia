import Tournament from "../../entities/Tournament"
import MatchComponent_Mobile from "./MatchComponent_Mobile"

type Props = {
    tournament: Tournament | undefined
}

const getPhaseName = (tournament: Tournament, phaseNumber: number): string => {
  if(phaseNumber === tournament.getPhasesCount()) return 'Final'
  else if(phaseNumber === tournament.getPhasesCount() - 1) return 'Semifinal'
  else if(phaseNumber === tournament.getPhasesCount() - 2) return 'Cuartos de Final'
  else if(phaseNumber === tournament.getPhasesCount() - 3) return 'Octavos de Final'
  else return `Ronda ${phaseNumber}`
}

export default function TournamentComponent_Mobile({tournament}: Props) {
  
  return (
      tournament
      ?
        <>
          {
            tournament.getPhases().map(phase => {
              return (
                <>
                  <h1>{getPhaseName(tournament, phase.getNumber())}</h1>
                  {
                    phase.getMatches().map(match => {
                      return <div style={{padding: '10px 0 10px 0'}}><MatchComponent_Mobile match={match}/></div>
                    })
                  }
                </>
              )
            })
          }
        </>
      :
        <h1>No tournament</h1>
  )
}
