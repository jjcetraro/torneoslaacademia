// assets
import userImg from '../images/user.png'

// external libraries
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

// hooks
import PlayersPageHooks from '../hooks/PlayersPageHooks'


export default function PlayersPage() {

  const {players} = PlayersPageHooks()

  return <>
    <h1 className='text-center font-bold text-4xl'>Jugadores</h1>
    <Row>
      {
        players.map(player => {
          return (
            <div className='bg-blue-100 m-3 p-5 text-center text-xl cursor-pointer' onClick={() => window.location.href = `/jugadores/${player.getId()}`}>{player.getName()}</div>
          )
        })
      }
    </Row>
  </>;
}
