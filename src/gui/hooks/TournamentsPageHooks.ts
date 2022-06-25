// external libraries
import { useEffect, useState } from 'react'
import { getTournamentsGroups } from '../../api/TournamentsGroupAPI'

// daos
import TournamentsGroup from '../../entities/TournamentsGroup'

const TournamentsPageHooks = () => {

    const [loading, setLoading] = useState(true)
    const [tournamentGroups, setTournamentGroups] = useState<TournamentsGroup[]>([])

    useEffect(() => {
        const initPage = async () => {
            setTournamentGroups(await getTournamentsGroups())
            setLoading(false)
        }
        initPage()
    }, [])

    return {loading, tournamentGroups}
}

export default TournamentsPageHooks