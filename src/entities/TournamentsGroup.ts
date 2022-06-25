import Tournament from "./Tournament"

export default class TournamentsGroup {
    private id: string
    private name: string
    private tournaments: Tournament[]


    constructor(id: string, name: string, tournaments: Tournament[]){
        this.id = id
        this.name = name
        this.tournaments = tournaments
    }

    getId() { return this.id }
    getName() { return this.name }
    getTournaments() { return this.tournaments }
}