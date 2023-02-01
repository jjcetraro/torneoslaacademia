// external libraries
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import Media from "react-media";

import TournamentPageHooks from "../hooks/TournamentPageHooks";

import TournamentBracketsComponent from "../components/TournamentBracketsComponent";
import TournamentComponent_Mobile from "../components/TournamentComponent_Mobile";
import Spinner from "../components/Spinner";

export default function TournamentPage() {
  const { id } = useParams();

  const { loading, tournament } = TournamentPageHooks(id);

  return (
    <>
      {loading ? (
        <div className="pt-20 flex justify-center">
          <Spinner />
        </div>
      ) : tournament?.getPhases() && tournament?.getPhases().length > 0 ? (
        <Media query="(max-width: 600px)">
          {(matches) => {
            return matches ? (
              <TournamentComponent_Mobile tournament={tournament} />
            ) : (
              <>
                <h1>{tournament?.getTournamentGroupName()}</h1>
                <TournamentBracketsComponent
                  tournament={tournament}
                  permitEdition={true}
                />
              </>
            );
          }}
        </Media>
      ) : (
        tournament?.getPlayers()?.map((player, index) => {
          return <h3 key={index}>{player.getName()}</h3>;
        })
      )}
    </>
  );
}
