import TournamentsPageHooks from "../hooks/TournamentsPageHooks";
import Tournament from "../../entities/Tournament";
import Button from "../components/Button";
import Spinner from "../components/Spinner";
import TournamentCard from "../components/TournamentCard";

export default function TournamentsPage() {
  const { loading, tournamentGroups } = TournamentsPageHooks();

  const handleInscribirme = () => {
    alert("inscribirme");
  };

  return (
    <>
      <h1 className="font-bold text-4xl text-center">Torneos</h1>
      {
        loading ? (
          <div className="pt-20 flex justify-center">
            <Spinner />
          </div>
        ) : (
          tournamentGroups.map((tournamentGroup, tournamentGroupIndex) => {
            return (
              <div key={tournamentGroupIndex}>
                <div className="font-bold text-center text-2xl mt-10">
                  {tournamentGroup.getName()}
                </div>
                {
                  <div>
                    {tournamentGroup
                      .getTournaments()
                      .map((tournament, tournamentIndex) => {
                        return (
                          <div key={tournamentIndex} className="my-5">
                            <TournamentCard tournament={tournament} />
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
