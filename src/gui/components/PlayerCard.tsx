import Player from "../../entities/Player";

export interface IPlayerProps {
  player: Player;
}

const PlayerCard: React.FunctionComponent<IPlayerProps> = ({ player }) => {
  return (
    <div
      className="bg-white shadow-md cursor-pointer p-5"
      onClick={() => (window.location.href = `/jugadores/${player.getId()}`)}
    >
      <div className="text-center">{player.getName()}</div>
    </div>
  );
};

export default PlayerCard;
