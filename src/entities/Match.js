export default class Match {
    constructor(id, player1, player2, date, result, wo, player1Wins){
        this._id = id
        this._player1 = player1
        this._player2 = player2
        this._date = date
        this._result = result
        this._wo = wo
        this._player1Wins = player1Wins
    }

    getId() { return this._id }
    getPlayer1() { return this._player1 }
    getPlayer2() { return this._player2 }
    getDate() { return this._date }
    getResult() { return this._result }
    isWO() { return this._wo }
    isPlayer1Wins() { return this._player1Wins }
}