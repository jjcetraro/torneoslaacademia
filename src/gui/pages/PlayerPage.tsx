// assets
import userImg from '../images/user.png'

// external libraries
import { useParams } from 'react-router-dom'
import { Col, Image, Row, Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react'

import Player from '../../entities/Player'
import { getMatchesByPlayerId } from '../../api/MatchAPI'
import Match from '../../entities/Match'
import MatchComponent_Mobile from '../components/MatchComponent_Mobile'


export default function PlayerPage() {

    const { id } = useParams();

    const [player, setPlayer] = useState<Player>()
    const [matches, setMatches] = useState<Match[]>()

    useEffect(() => {
        const initPage = async () => {
            if(id){
                const matchesByPlayerId = await getMatchesByPlayerId(id)
                setMatches(matchesByPlayerId.filter(match => match.isFinished()))
            }
        }
        initPage()
    }, [])

    
    return (
        matches
        ?
        <>
        {
            matches.map(match => {
                return (
                    <div style={{padding: '20px'}}>
                        <MatchComponent_Mobile match={match}/>
                    </div>
                )
            })
        }
        </>
        :
        <Row>
            <Col xs={12} className="text-center mt-5">
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Col>
        </Row>
    )
}
