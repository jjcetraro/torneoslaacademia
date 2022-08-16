import MatchResult from "./MatchResult"
import Player from "./Player"

export default class Match {

    private id: string
    private player1: Player | null
    private player2: Player | null
    private date: Date | null
    private result: MatchResult
    private wo: boolean
    private player1Wins: boolean

    constructor(id: string, player1: Player | null, player2: Player | null, date: Date | null,
        result: MatchResult, wo: boolean, player1Wins: boolean){
        this.id = id
        this.player1 = player1
        this.player2 = player2
        this.date = date
        this.result = result
        this.wo = wo
        this.player1Wins = player1Wins
    }

    getId() { return this.id }
    setId(id: string) { this.id = id }
    getPlayer1() { return this.player1 }
    getPlayer2() { return this.player2 }
    getDate() { return this.date }
    getResult() { return this.result }
    isWO() { return this.wo }
    isPlayer1Wins() { return this.player1Wins }
    isFinished() {
        console.log(`match: ${this.isWO()} || ${this.getResult()}`)
        console.log(this.getResult())
        return this.isWO() || !this.getResult().isEmpty()
    }
}