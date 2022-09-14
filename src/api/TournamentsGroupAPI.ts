import axios, { AxiosResponse } from "axios"
import Tournament from "../entities/Tournament"
import TournamentsGroup from "../entities/TournamentsGroup"

type TournamentsGroupJsonResponse = {
    id: string,
    firestoreId: string,
    name: string,
    tournaments: [
        {
            id: string,
            name: string
        }
    ]
}

export const getTournamentsGroups = async () : Promise<TournamentsGroup[]> => {
    let response : AxiosResponse<TournamentsGroupJsonResponse[]>
    try{
        response = await axios.get(`${process.env.REACT_APP_TENNIS_API_URL}/organizations/${process.env.REACT_APP_TENNIS_API_ORGANIZATION_ID}/tournamentsGroups`)
    } catch(error){
        throw error
    }
    return response.data.map(tournamentsGroupJsonResponse => {
        return new TournamentsGroup(
            tournamentsGroupJsonResponse.id, 
            tournamentsGroupJsonResponse.name,
            tournamentsGroupJsonResponse.tournaments.map (tournamentJsonResponse => {
                return new Tournament(
                    tournamentJsonResponse.id,
                    tournamentsGroupJsonResponse.id,
                    tournamentsGroupJsonResponse.name,
                    tournamentJsonResponse.name,
                    [],
                    [],
                    true
                )
            }))
    })
}