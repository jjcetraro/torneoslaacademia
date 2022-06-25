export type MatchJsonResponse = {
    id: string,
    date: string,
    player1: PlayerJsonResponse,
    player2: PlayerJsonResponse,
    player1Wins: boolean,
    result: string,
    firestoreId: string,
    player1FirestoreId: string,
    player2FirestoreId: string
}

export type PlayerJsonResponse = {
    id: string,
    name: string,
    email: string,
    mobile: string,
    firestoreId: string
}

export type PhaseJsonResponse = {
    id: number,
    number: number,
    matches: MatchJsonResponse[]
}