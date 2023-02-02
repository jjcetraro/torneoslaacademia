import axios, { AxiosResponse } from "axios";
import Player from "../entities/Player";
import Tournament from "../entities/Tournament";
import TournamentsGroup from "../entities/TournamentsGroup";

type TournamentsGroupJsonResponse = {
  id: string;
  firestoreId: string;
  name: string;
  createdDate: string;
  tournaments: [
    {
      id: string;
      name: string;
      winner?: {
        id: string;
        name: string;
      };
      finalist?: {
        id: string;
        name: string;
      };
    }
  ];
};

export const getTournamentsGroups = async (): Promise<TournamentsGroup[]> => {
  let response: AxiosResponse<TournamentsGroupJsonResponse[]>;
  try {
    response = await axios.get(
      `${process.env.REACT_APP_TENNIS_API_URL}/organizations/${process.env.REACT_APP_TENNIS_API_ORGANIZATION_ID}/tournamentsGroups`
    );
  } catch (error) {
    throw error;
  }
  const result: TournamentsGroup[] = response.data.map(
    (tournamentsGroupJsonResponse) => {
      return new TournamentsGroup(
        tournamentsGroupJsonResponse.id,
        tournamentsGroupJsonResponse.name,
        new Date(tournamentsGroupJsonResponse.createdDate),
        tournamentsGroupJsonResponse.tournaments.map(
          (tournamentJsonResponse) => {
            const result = new Tournament(
              tournamentJsonResponse.id,
              tournamentsGroupJsonResponse.id,
              tournamentsGroupJsonResponse.name,
              tournamentJsonResponse.name,
              [],
              [],
              true
            );
            if (tournamentJsonResponse.winner) {
              const winner = tournamentJsonResponse.winner;
              result.setWinner(
                new Player(
                  winner.id,
                  winner.name,
                  "",
                  "",
                  "",
                  new Date(),
                  "",
                  "",
                  "",
                  {}
                )
              );
            }
            if (tournamentJsonResponse.finalist) {
              const finalist = tournamentJsonResponse.finalist;
              result.setFinalist(
                new Player(
                  finalist.id,
                  finalist.name,
                  "",
                  "",
                  "",
                  new Date(),
                  "",
                  "",
                  "",
                  {}
                )
              );
            }
            return result;
          }
        )
      );
    }
  );
  result.sort((tournamentGroup1, tournamentGroup2) => {
    return tournamentGroup1.getCreatedDate() < tournamentGroup2.getCreatedDate()
      ? 1
      : -1;
  });
  return result;
};
