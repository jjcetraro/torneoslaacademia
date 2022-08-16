export default class MatchResult {

    private player1: number[]
    private player2: number[]

    constructor(player1: number[], player2: number[]){
        this.player1 = player1
        this.player2 = player2
    }

    getPlayer1() { return this.player1 }
    getPlayer2() { return this.player2 }

    isEmpty() {
        for(let i = 0; i < this.getPlayer1().length; i++){
            if(this.getPlayer1()[i] !== 0) return false
        }
        for(let i = 0; i < this.getPlayer2().length; i++){
            if(this.getPlayer2()[i] !== 0) return false
        }
        return true
    }
}