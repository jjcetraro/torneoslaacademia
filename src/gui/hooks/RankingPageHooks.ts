// external libraries
import { useEffect, useState } from 'react'

// daos
import rankingDaoCreator from '../../daos/RankingDao'
import Ranking from '../../entities/Ranking'

const RankingPageHooks = () => {

    const [rankings, setRankings] = useState<Ranking[]>([])

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