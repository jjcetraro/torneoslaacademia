// assets
import userImg from '../images/user.png'

// external libraries
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

// hooks
import PlayersPageHooks from '../hooks/PlayersPageHooks'


export default function PlayersPage() {

  const {players} = PlayersPageHooks()

  return <>
    <h1>Jugadores</h1>
    <Row>
      {
        players.map(player => {
          return <Col key={player.getId()} sm={12} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={userImg} style={{height: '150px', objectFit: 'contain', padding: '10px'}}/>
              <Card.Body>
                <Card.Title>{player.getName()}</Card.Title>
                <Card.Text>
                  Edad: - años
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        })
      }
    </Row>
  </>;
}
