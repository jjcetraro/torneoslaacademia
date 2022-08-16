import axios, { AxiosResponse } from "axios"
import Match from "../entities/Match"
import { MatchJsonResponse } from "./Types"
import { convertToMatch, convertToMatchJsonResponse } from "./UtilsAPI"

export const updateMatch = async (match: Match) : Promise<void> => {
    try{
        await axios.put(`${process.env.REACT_APP_TENNIS_API_URL}/matches/${match.getId()}`, convertToMatchJsonResponse(match))
    } catch(error){
        throw error
    }
}

export const getMatchesByPlayerId = async (playerId: string) : Promise<Match[]> => {
    let response : AxiosResponse<MatchJsonResponse[]>
    try{
        response = await axios.get(`${process.env.REACT_APP_TENNIS_API_URL}/players/${playerId}/matches`)
    }catch(error){
        throw error
    }
    return response.data.map(matchJsonResponse => convertToMatch(matchJsonResponse))
}