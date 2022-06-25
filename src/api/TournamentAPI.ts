import axios, { AxiosResponse } from "axios"
import Tournament from "../entities/Tournament"
import { PhaseJsonResponse, PlayerJsonResponse } from "./Types"
import { convertToPhase, convertToPlayer } from "./UtilsAPI"

type TournamentJsonResponse = {
    id: string,
    name: string,
    players: PlayerJsonResponse[],
    phases: PhaseJsonResponse[]
}

export const getTournament = async (id: string) : Promise<Tournament> => {
    let response : AxiosResponse<TournamentJsonResponse>
    try{
        response = await axios.get(`${process.env.REACT_APP_TENNIS_API_URL}/tournaments/${id}`)
    } catch(error){
        throw error
    }

    if(!response.data) throw Error('There is no tournament with the received id')
    
    const tournamentJsonResponse : TournamentJsonResponse = response.data

    const playersJsonResponse : PlayerJsonResponse[] = tournamentJsonResponse.players
    playersJsonResponse.sort((p1, p2) => {
        return p1.name.toLowerCase().localeCompare(p2.name.toLowerCase())
    })

    const result = new Tournament(
        tournamentJsonResponse.id, 
        '', 
        '', 
        tournamentJsonResponse.name, 
        playersJsonResponse.map(playerJsonResponse => {
            return convertToPlayer(playerJsonResponse)
        }),  
        tournamentJsonResponse.phases.map(phaseJsonResponse => {
            return convertToPhase(phaseJsonResponse)
        }),
        true
    )

    return Promise.resolve(result)
}