export default class Tournament {
    constructor(id, name, players, phases){
        this._id = id
        this._name = name
        this._players = players
        this._phases = phases
    }

    getId() { return this._id }
    getName() { return this._name }
    getPlayers() { return this._players }
    getPhases() { return this._phases }

    //getPhasesCount() { return this._phases.length }
    getPhasesCount() { return 5 }
}