// hooks
import PlayersPageHooks from "../hooks/PlayersPageHooks";
import Spinner from "../components/Spinner";
import PlayerCard from "../components/PlayerCard";

export default function PlayersPage() {
  const { players } = PlayersPageHooks();

  return (
    <>
      <h1 className="text-center font-bold text-4xl">Jugadores</h1>
      <div>
        {!players ? (
          <div className="pt-20 flex justify-center">
            <Spinner />
          </div>
        ) : (
          players.map((player) => {
            return (
              <div className="my-5">
                <PlayerCard player={player} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
