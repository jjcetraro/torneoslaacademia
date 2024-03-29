import { useState } from "react";

import TournamentsPageHooks from "../hooks/TournamentsPageHooks";

import TournamentBracketsComponent from "../components/TournamentBracketsComponent";

export default function SetMatchResultPage() {
  const { tournamentGroups } = TournamentsPageHooks();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h1>Torneos</h1>
      {tournamentGroups.map((tournamentGroup) => {
        return (
          <div key={tournamentGroup.getId()}>
            <h3>{tournamentGroup.getName()}</h3>
            {tournamentGroup.getTournaments().map((tournament, index) => {
              return (
                <TournamentBracketsComponent
                  key={index}
                  tournament={tournament}
                  permitEdition={true}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
}
