// external libraries
import { useEffect, useState } from 'react'

// daos
import playerDaoCreator from '../../daos/PlayerDao'

const PlayersPageHooks = () => {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        const initPage = async () => {
            const playerDao = playerDaoCreator()
            setPlayers(await playerDao.getPlayers())
        }
        initPage()
    }, [])

    return {players}
}

export default PlayersPageHooks