import { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { auth } from '../../firebase/Firebase'

import playerDaoCreator from '../../daos/PlayerDao'
import Player from '../../entities/Player'

import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/Firebase'

export default function TournamentSignUp() {

  const [ user, setUser ] = useState(null)
  const [ selectedCategories, setSelectedCategories ] = useState([])

  useEffect(() => {
    auth.onAuthStateChanged(loggedUser => {
      if(!loggedUser){
        window.location = '/'
      }else{
        setUser(loggedUser)
      }
    })
  }, [])

  const handleClickTournamentSignUp = async event => {
    if(!user){
      alert('Tienes que loguearte para poder inscribirte al torneo')
      return
    }
    if(selectedCategories.length === 0){
      alert('Debe seleccionar al menos una categoría para poder jugar el torneo')
      return
    }
    event.target.setAttribute('disabled', '');
    
    // ------------ inscribir jugador al torneo ------------

    // obtengo el objeto player correspondiente al usuario logueado
    const playerDao = playerDaoCreator()
    let player = await playerDao.getPlayerByEmail(user.email)
    if(!player){
      // si no estaba registrado como player, lo agrego
      player = new Player(null, user.displayName, user.email)
      await playerDao.addPlayer(player)
    }

    // agrego al player a las categorias que selecciono
    const datos = await getDocs(collection(db, 'tournamentGroup'))
    let tournamentGroupId
    let tournamentGroupData
    datos.forEach(doc => {
      tournamentGroupId = doc.id
      tournamentGroupData = doc.data()
    })
    if(selectedCategories.includes('A')){
      tournamentGroupData.tournaments[0].players.push(player.getId())
    }
    if(selectedCategories.includes('B')){
      tournamentGroupData.tournaments[1].players.push(player.getId())
    }
    if(selectedCategories.includes('C')){
      tournamentGroupData.tournaments[2].players.push(player.getId())
    }
    if(selectedCategories.includes('D')){
      tournamentGroupData.tournaments[3].players.push(player.getId())
    }
    if(selectedCategories.includes('E')){
      tournamentGroupData.tournaments[4].players.push(player.getId())
    }
    await updateDoc(doc(db, 'tournamentGroup', tournamentGroupId), {
      tournaments: tournamentGroupData.tournaments
    })
    window.location = '/thanks'
  }

  const handleSelectSwitch = event => {
    const checked = event.target.checked
    const switchId = event.target.id
    if(checked && !selectedCategories.includes(switchId)){
      setSelectedCategories([...selectedCategories, switchId])
    }else if(!checked && selectedCategories.includes(switchId)){
      setSelectedCategories(selectedCategories.filter(item => item !== switchId))
    }
  }
  
  return (
    <>
      <Row>
          <Col>
              <h1 className="mb-4 mt-4" style={{textAlign: 'center'}}>Torneo Febrero/Marzo 2022</h1>
              <div><span style={{fontWeight: 'bold'}}>Lugar:</span> La Academia MG</div>
              <div><span style={{fontWeight: 'bold'}}>Comienzo:</span> 14 de febrero</div>
              <div><span style={{fontWeight: 'bold'}}>Duración:</span> 6 semanas</div>
          </Col>
      </Row>
      <Row>
          <Col sm={12} className="mb-2 mt-4">
            <Form>
              <Form.Check 
                type="switch"
                id="A"
                label="Categoría A"
                className="mb-2"
                onChange={handleSelectSwitch}
              />
              <Form.Check 
                type="switch"
                id="B"
                label="Categoría B"
                className="mb-2"
                onChange={handleSelectSwitch}
              />
              <Form.Check 
                type="switch"
                id="C"
                label="Categoría C"
                className="mb-2"
                onChange={handleSelectSwitch}
              />
              <Form.Check 
                type="switch"
                id="D"
                label="Categoría D"
                className="mb-2"
                onChange={handleSelectSwitch}
              />
              <Form.Check 
                type="switch"
                id="E"
                label="Categoría E"
                className="mb-2"
                onChange={handleSelectSwitch}
              />
            </Form>
          </Col>
          <Col sm={12} className="mt-4" style={{textAlign: 'center'}}><Button onClick={handleClickTournamentSignUp}>Inscribirme</Button></Col>
      </Row>
    </>
    
  )
}
