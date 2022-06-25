import axios, { AxiosResponse } from "axios"
import Match from "../entities/Match"
import { convertToMatchJsonResponse } from "./UtilsAPI"

export const updateMatch = async (match: Match) : Promise<void> => {
    try{
        await axios.put(`${process.env.REACT_APP_TENNIS_API_URL}/matches/${match.getId()}`, convertToMatchJsonResponse(match))
    } catch(error){
        throw error
    }
}