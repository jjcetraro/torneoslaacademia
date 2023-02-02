import Tournament from "./Tournament";

export default class TournamentsGroup {
  private id: string;
  private name: string;
  private createdDate: Date;
  private tournaments: Tournament[];

  constructor(
    id: string,
    name: string,
    createdDate: Date,
    tournaments: Tournament[]
  ) {
    this.id = id;
    this.name = name;
    this.createdDate = createdDate;
    this.tournaments = tournaments;
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getCreatedDate() {
    return this.createdDate;
  }
  getTournaments() {
    return this.tournaments;
  }
}
