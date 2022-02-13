// external libraries
import { useEffect, useState } from 'react'

// daos
import tournamentDaoCreator from '../../daos/TournamentDao'

const TournamentsPageHooks = () => {

    const [tournamentGroups, setTournamentGroups] = useState([])

    useEffect(() => {
        const initPage = async () => {
            const tournamentDao = tournamentDaoCreator()
            setTournamentGroups(await tournamentDao.getTournamentGroups())
        }
        initPage()
    }, [])

    return {tournamentGroups}
}

export default TournamentsPageHooks