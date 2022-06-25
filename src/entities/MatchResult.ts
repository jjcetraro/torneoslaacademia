export default class MatchResult {

    private player1: number[]
    private player2: number[]

    constructor(player1: number[], player2: number[]){
        this.player1 = player1
        this.player2 = player2
    }

    getPlayer1() { return this.player1 }
    getPlayer2() { return this.player2 }
}