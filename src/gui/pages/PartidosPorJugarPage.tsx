import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { getTournament } from "../../api/TournamentAPI";
import Match from "../../entities/Match";
import Phase from "../../entities/Phase";
import Tournament from "../../entities/Tournament";

export default function PartidosPorJugarPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [matches, setMatches] = useState<Match[]>();

  useEffect(() => {
    const initPage = async () => {
      const matchesArray = [];
      const tournaments = [];
      tournaments.push(
        await getTournament("2a29f79e-16c3-4910-839f-5aea8831c2e0")
      );
      tournaments.push(
        await getTournament("a718bea7-09b9-4377-9715-a53503b2c08a")
      );
      tournaments.push(
        await getTournament("8aac9674-2b2f-4a72-93cd-329b5cbc25cd")
      );
      tournaments.push(
        await getTournament("d989fca5-69f3-4d5e-9799-f1c701603e58")
      );
      tournaments.push(
        await getTournament("4fcb5ed0-35c1-4e90-aa46-a55201e237fd")
      );
      for (let i = 0; i < tournaments.length; i++) {
        const tournament: Tournament = tournaments[i];
        for (let j = 0; j < tournament.getPhases().length; j++) {
          const phase: Phase = tournament.getPhases()[j];
          for (let k = 0; k < phase.getMatches().length; k++) {
            const match: Match = phase.getMatches()[k];
            if (
              match.getPlayer1() &&
              match.getPlayer2() &&
              !partidoYaSeJugo(match)
            ) {
              matchesArray.push(match);
            }
          }
        }
      }
      setLoading(false);
      setMatches(matchesArray);
    };
    initPage();
  }, []);

  const partidoYaSeJugo = (match: Match): boolean => {
    if (match.isPlayer1Wins()) return true;
    if (match.isWO()) return true;
    if (match.getResult()) {
      if (match.getResult().getPlayer1() && match.getResult().getPlayer2()) {
        if (
          match.getResult().getPlayer1()[0] !== 0 ||
          match.getResult().getPlayer2()[0] !== 0
        ) {
          return true;
        }
      }
    }
    return false;
  };

  return (
    <>
      {loading ? (
        <div className="pt-20 flex justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          {matches?.map((match, index) => {
            return (
              <div key={index}>{`${index + 1}) ${match
                .getPlayer1()
                ?.getName()} vs ${match.getPlayer2()?.getName()}`}</div>
            );
          })}
        </>
      )}
    </>
  );
}
