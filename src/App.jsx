
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import TournamentBracketsComponent from "./gui/components/TournamentBracketsComponent"
import Match from './entities/Match'
import Tournament from "./entities/Tournament"
import Phase from './entities/Phase'
import Player from './entities/Player'
import PlayersPage from "./gui/pages/PlayersPage"
import MyNavbar from "./gui/components/Navbar"
import { Button, Container } from 'react-bootstrap'
import RankingPage from './gui/pages/RankingPage'
import TournamentsPage from './gui/pages/TournamentsPage'
import MessagePage from './gui/pages/MessagePage'

import { signInWithGoogle } from './firebase/Firebase'
import TournamentSignUp from './gui/pages/TournamentSignUp'
import LoginPage from './gui/pages/LoginPage'
import AnotadosPage from './gui/pages/AnotadosPage'
import UserProfilePage from './gui/pages/UserProfilePage'
import SorteoPage from './gui/pages/SorteoPage'
import TournamentPage from './gui/pages/TournamentPage'


export default function App() {

  const phase1 = new Phase(1, [
    new Match(
      '17258349527', 
      new Player('1', 'Juan Cetraro1'),
      new Player('2', 'Yasin Rajab')
    ),
    new Match(
      '17258349527', 
      new Player('1', 'Juan Cetraro2'),
      new Player('2', 'Yasin Rajab')
    ),
    new Match(
      '17258349527', 
      new Player('1', 'Juan Cetraro3'),
      new Player('2', 'Yasin Rajab')
    ),
    new Match(
      '17258349527', 
      new Player('1', 'Juan Cetraro4'),
      new Player('2', 'Yasin Rajab')
    ),
    new Match(
      '17258349527', 
      new Player('1', 'Juan Cetraro5'),
      new Player('2', 'Yasin Rajab')
    ),
    new Match(
      '17258349527', 
      new Player('1', 'Juan Cetraro6'),
      new Player('2', 'Yasin Rajab')
    ),
    new Match(
      '17258349527', 
      new Player('1', 'Juan Cetraro7'),
      new Player('2', 'Yasin Rajab')
    ),
    new Match(
      '17258349527', 
      new Player('1', 'Juan Cetraro8'),
      new Player('2', 'Yasin Rajab')
    )
  ])
  const phase2 = new Phase(2, [
    new Match(
      '17258349527', 
      new Player('1', 'Juan Cetraro'),
      new Player('2', 'Yasin Rajab')
    ),
    new Match(
      '17258349527', 
      new Player('1', 'Juan Cetraro'),
      new Player('2', 'Yasin Rajab')
    ),
    new Match(
      '17258349527', 
      new Player('1', 'Juan Cetraro'),
      new Player('2', 'Yasin Rajab')
    ),
    new Match(
      '17258349527', 
      new Player('1', 'Juan Cetraro'),
      new Player('2', 'Yasin Rajab')
    )
  ])
  const phase3 = new Phase(3, [
    new Match(
      '17258349527', 
      new Player('1', 'Juan Cetraro'),
      new Player('2', 'Yasin Rajab')
    ),
    new Match(
      '17258349527', 
      new Player('1', 'Juan Cetraro'),
      new Player('2', 'Yasin Rajab')
    )
  ])
  const phase4 = new Phase(4, [
    new Match(
      '17258349527', 
      new Player('1', 'Juan Cetraro'),
      new Player('2', 'Yasin Rajab')
    )
  ])

  const tournament = new Tournament(
    '1', 
    'Categoria D', 
    [], 
    [phase1, phase2, phase3, phase4]
  )

  const handleClickGoogleSignIn = async () => {
    const result = await signInWithGoogle()
    console.log('result')
    console.log(result)
  }
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/tournamentSignUp' element={<TournamentSignUp/>}/>
          <Route path='/ranking' element={<RankingPage/>}/>
          <Route path='/tournaments' element={<TournamentsPage/>}/>
          <Route path='/thanks' element={<MessagePage message="Gracias por registrarse en el torneo!"/>}/>
          <Route path='/anotados' element={<AnotadosPage/>}/>
          <Route path='/jugadores' element={<PlayersPage/>}/>
          <Route path='/perfil' element={<UserProfilePage/>}/>
          <Route path='/sorteo' element={<SorteoPage/>}/>
          <Route path='/tournament' element={<TournamentPage/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}