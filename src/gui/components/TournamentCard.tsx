import Tournament from "../../entities/Tournament";
import { AiFillTrophy } from "react-icons/ai";

export interface ITournamentProps {
  tournament: Tournament;
}

const TournamentCard: React.FunctionComponent<ITournamentProps> = ({
  tournament,
}) => {
  return (
    <div
      className="bg-white shadow-md cursor-pointer p-5"
      onClick={() => (window.location.href = `/torneos/${tournament.getId()}`)}
    >
      <div className="text-center font-bold mb-3">{tournament.getName()}</div>
      <div className="flex justify-center items-center">
        <div>
          {tournament.getWinner() ? tournament.getWinner()!.getName() : ""}
        </div>
        <div className="pl-3 text-amber-400">
          <AiFillTrophy />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div>
          {tournament.getFinalist() ? tournament.getFinalist()!.getName() : ""}
        </div>
        <div className="pl-3 text-slate-400">
          <AiFillTrophy />
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
