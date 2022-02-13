import { Button } from 'react-bootstrap'

import TournamentsPageHooks from "../hooks/TournamentsPageHooks"

import TournamentBracketsComponent from '../components/TournamentBracketsComponent'

export default function TournamentsPage() {

    const {tournamentGroups} = TournamentsPageHooks()

    return <>
        <h1>Torneos</h1>
        {
            tournamentGroups.map(tournamentGroup => {
                return <div key={tournamentGroup.getId()}>
                    <h3>{tournamentGroup.getName()}</h3>
                    {tournamentGroup.getTournaments().map((tournament, index) => {
                        console.log(tournament)
                        return (
                            <TournamentBracketsComponent
                                key={index}
                                tournament={tournament}
                            />
                        )
                    })}
                </div>
            })
        }
    </>
}
