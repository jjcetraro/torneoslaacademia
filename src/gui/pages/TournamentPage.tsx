// external libraries
import { useParams } from 'react-router-dom'
import { Col, Row, Spinner } from 'react-bootstrap'


import TournamentPageHooks from '../hooks/TournamentPageHooks'

import TournamentBracketsComponent from '../components/TournamentBracketsComponent'

export default function TournamentPage() {

  const { id } = useParams()

  const {loading, tournament} = TournamentPageHooks(id)

  return (
    <>
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
        <>
          <h1>{tournament?.getTournamentGroupName()}</h1>
          <h3>{tournament?.getName()}</h3>
          <TournamentBracketsComponent
            tournament={tournament}
            permitEdition={true}
          />
        </>
      }
    </>

  )

}
