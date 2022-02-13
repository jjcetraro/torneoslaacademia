export default class Ranking {
    constructor(category, players){
        this._category = category
        this._players = players
    }

    getCategory() { return this._category }
    getPlayers() { return this._players }
}