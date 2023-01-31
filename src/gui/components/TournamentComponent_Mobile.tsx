import Tournament from "../../entities/Tournament";
import MatchComponent_Mobile from "./MatchComponent_Mobile";

type Props = {
  tournament: Tournament | undefined;
};

const getPhaseName = (tournament: Tournament, phaseNumber: number): string => {
  if (phaseNumber === tournament.getPhasesCount()) return "Final";
  else if (phaseNumber === tournament.getPhasesCount() - 1) return "Semifinal";
  else if (phaseNumber === tournament.getPhasesCount() - 2)
    return "Cuartos de Final";
  else if (phaseNumber === tournament.getPhasesCount() - 3)
    return "Octavos de Final";
  else return `Ronda ${phaseNumber}`;
};

export default function TournamentComponent_Mobile({ tournament }: Props) {
  return tournament ? (
    <>
      {tournament.getPhases().map((phase) => {
        return (
          <div className="pb-10">
            <div className="font-bold">
              {getPhaseName(tournament, phase.getNumber())}
            </div>
            {phase.getMatches().map((match) => {
              return phase.getNumber() > 1 ||
                match.getPlayer1() ||
                match.getPlayer2() ? (
                <div style={{ padding: "10px 0 10px 0" }}>
                  <MatchComponent_Mobile match={match} />
                </div>
              ) : (
                <></>
              );
            })}
          </div>
        );
      })}
    </>
  ) : (
    <h1>No tournament</h1>
  );
}
