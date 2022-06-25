import Match from "../entities/Match";
import MatchResult from "../entities/MatchResult";
import Phase from "../entities/Phase";
import Player from "../entities/Player";
import { MatchJsonResponse, PhaseJsonResponse, PlayerJsonResponse } from "./Types";
import { formatDate } from "./utils/DateUtils";

export const convertToMatch = (matchJsonResponse: MatchJsonResponse): Match => {
    return new Match(
        matchJsonResponse.id, 
        matchJsonResponse.player1 ? convertToPlayer(matchJsonResponse.player1) : null,
        matchJsonResponse.player2 ? convertToPlayer(matchJsonResponse.player2) : null,
        new Date(), 
        parseMatchResult(matchJsonResponse.result),
        false, 
        matchJsonResponse.player1Wins
    )
}

export const convertToMatchJsonResponse = (match: Match): MatchJsonResponse => {
    return {
        id: match.getId(),
        date: formatDate(match.getDate()),
        player1: match.getPlayer1() ? convertToPlayerJsonResponse(match.getPlayer1()) : convertToPlayerJsonResponse(null),
        player2: match.getPlayer2() ? convertToPlayerJsonResponse(match.getPlayer2()) : convertToPlayerJsonResponse(null),
        player1Wins: match.isPlayer1Wins(),
        result: match.getResult() ? JSON.stringify([match.getResult().getPlayer1(), match.getResult().getPlayer2()]) : '',
        firestoreId: '',
        player1FirestoreId: '',
        player2FirestoreId: ''
    }
}

export const convertToPlayer = (playerJsonResponse: PlayerJsonResponse): Player => {
    return new Player(
        playerJsonResponse.id, 
        playerJsonResponse.name, 
        '', 
        playerJsonResponse.mobile, 
        playerJsonResponse.name, 
        new Date(), 
        'right', 
        '', 
        '', 
        {}
    )
}

export const convertToPlayerJsonResponse = (player: Player | null): PlayerJsonResponse => {
    return {
        id: player ? player.getId() : '',
        name: player ? player.getName() : '',
        email: player ? player.getEmail() : '',
        mobile: player ? player.getCellphoneNumber() : '',
        firestoreId: ''
    }
}

export const convertToPhase = (phaseJsonResponse: PhaseJsonResponse): Phase => {
    return new Phase(
        phaseJsonResponse.number, 
        phaseJsonResponse.matches.map(matchJsonResponse => convertToMatch(matchJsonResponse))
    )
}

const parseMatchResult = (strResult: string): MatchResult => {
    if(!strResult) return new MatchResult([0,0,0], [0,0,0])
    const jsonResult = JSON.parse(strResult)
    return new MatchResult(
        jsonResult[0],
        jsonResult[1]
    )
}