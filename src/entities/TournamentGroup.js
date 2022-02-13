export default class TournamentGroup {
    constructor(id, name, tournaments){
        this._id = id
        this._name = name
        this._tournaments = tournaments
    }

    getId() { return this._id }
    getName() { return this._name }
    getTournaments() { return this._tournaments }
}