import Phase from "./Phase";
import Player from "./Player";

export default class Tournament {
  private id: string;
  private tournamentGroupId: string;
  private tournamentGroupName: string;
  private name: string;
  private players: Player[];
  private phases: Phase[];
  private started: boolean;
  private winner?: Player;
  private finalist?: Player;

  constructor(
    id: string,
    tournamentGroupId: string,
    tournamentGroupName: string,
    name: string,
    players: Player[],
    phases: Phase[],
    started: boolean,
    winner?: Player,
    finalist?: Player
  ) {
    this.id = id;
    this.tournamentGroupId = tournamentGroupId;
    this.tournamentGroupName = tournamentGroupName;
    this.name = name;
    this.players = players;
    this.phases = phases;
    this.started = started;
    this.winner = winner;
    this.finalist = finalist;
  }

  getId() {
    return this.id;
  }
  getTournamentsGroupId() {
    return this.tournamentGroupId;
  }
  getTournamentGroupName() {
    return this.tournamentGroupName;
  }
  getName() {
    return this.name;
  }
  getPlayers() {
    return this.players;
  }
  getPhases() {
    return this.phases;
  }
  setPhases(phases: Phase[]) {
    this.phases = phases;
  }
  isStarted() {
    return this.started;
  }
  getWinner() {
    return this.winner;
  }
  setWinner(winner?: Player) {
    this.winner = winner;
  }
  getFinalist() {
    return this.finalist;
  }
  setFinalist(finalist?: Player) {
    this.finalist = finalist;
  }

  getPhasesCount() {
    return this.phases.length;
  }
}
