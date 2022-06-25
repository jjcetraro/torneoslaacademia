import axios, { AxiosResponse } from "axios"
import Player from "../entities/Player"
import { PlayerJsonResponse } from "./Types"
import { convertToPlayer } from "./UtilsAPI"



export const getPlayers = async () : Promise<Player[]> => {
    let response : AxiosResponse<PlayerJsonResponse[]>
    try{
        response = await axios.get(`${process.env.REACT_APP_TENNIS_API_URL}/players`)
    } catch(error){
        throw error
    }
    return response.data.map(playerJsonResponse => convertToPlayer(playerJsonResponse))
}