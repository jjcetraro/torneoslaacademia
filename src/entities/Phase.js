export default class Phase {
    constructor(number, matches){
        this._number = number
        this._matches = matches
    }

    getNumber() { return this._number }
    getMatches() { return this._matches }
}