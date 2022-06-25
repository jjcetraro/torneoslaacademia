import { Button, Card, Col, Spinner, Row } from 'react-bootstrap'

import TournamentsPageHooks from "../hooks/TournamentsPageHooks"

import TournamentBracketsComponent from '../components/TournamentBracketsComponent'
import Tournament from '../../entities/Tournament'

export default function TournamentsPage() {

    const {loading, tournamentGroups} = TournamentsPageHooks()

    const handleInscribirme = () => {
        alert('inscribirme')
    }

    const handleVerCuadro = (tournament: Tournament) => {
        window.location.href = `torneo/${tournament.getId()}`
    }

    return <>
        <h1>Torneos</h1>
        {
            loading
            ?
            <Row>
                <Col xs={12} className="text-center mt-5">
                    <Spinner animation="border" role="status" variant="primary">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Col>
            </Row>
            :
            tournamentGroups.map(tournamentGroup => {
                return <div key={tournamentGroup.getId()}>
                    <h2>{tournamentGroup.getName()}</h2>
                    <Row>
                    {
                        tournamentGroup.getTournaments().map(tournament => {
                            return  <Col key={tournament.getName()} sm={12} md={3} lg={2}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{tournament.getName()}</Card.Title>
                                        {
                                            tournament.isStarted()
                                            ?
                                            <>
                                                <Button variant="primary" onClick={() => handleVerCuadro(tournament)}>Ver Cuadro</Button>
                                            </>
                                            :
                                            <>
                                                <Button variant="primary" onClick={handleInscribirme}>Inscribirme</Button>
                                            </>
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>
                        })
                    }
                    </Row>
                </div>
            })
            /*tournamentGroups.map(tournamentGroup => {
                return <div key={tournamentGroup.getId()}>
                    <h3>{tournamentGroup.getName()}</h3>
                    {tournamentGroup.getTournaments().map((tournament, index) => {
                        console.log(tournament)
                        return (
                            <TournamentBracketsComponent
                                key={index}
                                tournament={tournament}
                                permitEdition={false}
                            />
                        )
                    })}
                </div>
            })*/
        }
    </>
}
