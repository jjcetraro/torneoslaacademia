// external libraries
import { useEffect, useState } from 'react'

// daos
import rankingDaoCreator from '../../daos/RankingDao'

const RankingPageHooks = () => {

    const [rankings, setRankings] = useState([])

    useEffect(() => {
        const initPage = async () => {
            const rankingDao = rankingDaoCreator()
            setRankings(await rankingDao.getRankings())
        }
        initPage()
    }, [])

    return {rankings}
}

export default RankingPageHooks