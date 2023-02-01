import axios, { AxiosResponse } from "axios";
import Player from "../entities/Player";
import { PlayerJsonResponse } from "./Types";
import { convertToPlayer } from "./UtilsAPI";

export const getPlayers = async (): Promise<Player[]> => {
  let response: AxiosResponse<PlayerJsonResponse[]>;
  try {
    response = await axios.get(
      `${process.env.REACT_APP_TENNIS_API_URL}/organizations/${process.env.REACT_APP_TENNIS_API_ORGANIZATION_ID}/players`
    );
  } catch (error) {
    throw error;
  }
  const result: Player[] = response.data.map((playerJsonResponse) =>
    convertToPlayer(playerJsonResponse)
  );
  result.sort((player1: Player, player2: Player) =>
    player1.getName().localeCompare(player2.getName())
  );
  return result;
};
