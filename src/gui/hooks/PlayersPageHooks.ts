// external libraries
import { useEffect, useState } from 'react'

// apis
import { getPlayers } from '../../api/PlayerAPI'

// entities
import Player from '../../entities/Player'

const PlayersPageHooks = () => {

    const [players, setPlayers] = useState<Player[]>([])

    useEffect(() => {
        const initPage = async () => {
            setPlayers(await getPlayers())
        }
        initPage()
    }, [])

    return {players}
}

export default PlayersPageHooks