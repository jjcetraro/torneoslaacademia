// assets
import userImg from '../images/user.png'

// external libraries
import { useParams } from 'react-router-dom'
import { Col, Image, Row, Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react'

// daos
import playerDaoCreator from '../../daos/PlayerDao'
import Player from '../../entities/Player'


export default function PlayerPage() {

    const { id } = useParams();

    const [player, setPlayer] = useState<Player>()

    useEffect(() => {
        const initPage = async () => {
            if(id){
                const playerDao = playerDaoCreator()
                setPlayer(await playerDao.getPlayerById(id))
            }
        }
        initPage()
    }, [])

    
    return (
        player
        ?
        <Row>
            <Col>
                <Image src={userImg}/>
            </Col>
        </Row>
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
