import TournamentsPageHooks from "../hooks/TournamentsPageHooks";
import Tournament from "../../entities/Tournament";
import Button from "../components/Button";

export default function TournamentsPage() {
  const { loading, tournamentGroups } = TournamentsPageHooks();

  const handleInscribirme = () => {
    alert("inscribirme");
  };

  const handleVerCuadro = (tournament: Tournament) => {
    window.location.href = `torneo/${tournament.getId()}`;
  };

  return (
    <>
      <h1 className="font-bold text-4xl text-center">Torneos</h1>
      {
        loading ? (
          <h1>Loading...</h1>
        ) : (
          tournamentGroups.map((tournamentGroup) => {
            return (
              <div key={tournamentGroup.getId()}>
                <div className="font-bold text-center text-2xl mt-10">
                  {tournamentGroup.getName()}
                </div>
                {
                  <div>
                    {tournamentGroup.getTournaments().map((tournament) => {
                      return (
                        <div
                          key={tournament.getName()}
                          className="bg-white shadow-md min-w-full my-5 p-5"
                        >
                          <div className="font-bold text-xl text-center">
                            {tournament.getName()}
                          </div>
                          {tournament.isStarted() ? (
                            <div className="text-center mt-5">
                              <Button
                                onClick={() => handleVerCuadro(tournament)}
                                text="Ver Cuadro"
                              />
                            </div>
                          ) : (
                            <div className="text-center mt-5">
                              <Button
                                onClick={handleInscribirme}
                                text="Inscribirme"
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                }
              </div>
            );
          })
        )
        /*tournamentGroups.map(tournamentGroup => {
                return <div key={tournamentGroup.getId()}>
                    <h3>{tournamentGroup.getName()}</h3>
                    {tournamentGroup.getTournaments().map((tournament, index) => {
                        console.log(tournament)
                        return (
                            <TournamentBracketsComponent
                                key={index}
                                tournament={tournament}
                                permitEdition={false}
                            />
                        )
                    })}
                </div>
            })*/
      }
    </>
  );
}
