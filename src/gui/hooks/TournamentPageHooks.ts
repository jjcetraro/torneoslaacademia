// external libraries
import { useEffect, useState } from 'react'
import { getTournament } from '../../api/TournamentAPI'

import Tournament from '../../entities/Tournament'

const TournamentPageHooks = (id: string | undefined) => {

    const [loading, setLoading] = useState<boolean>(true)
    const [tournament, setTournament] = useState<Tournament>()

    useEffect(() => {
        if(!id) return
        const initPage = async () => {
            const tournament = await getTournament(id)
            if(!tournament) return
            setTournament(tournament)
            setLoading(false)
        }
        initPage()
    }, [])

    return {loading, tournament}
}

export default TournamentPageHooks