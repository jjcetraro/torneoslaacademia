import Match from "./Match"

export default class Phase {

    private number: number
    private matches: Match[]

    constructor(number: number, matches: Match[]){
        this.number = number
        this.matches = matches
    }

    getNumber() { return this.number }
    setNumber(number: number) { this.number = number }
    getMatches() { return this.matches }
    setMatches(matches: Match[]) { this.matches = matches }
}