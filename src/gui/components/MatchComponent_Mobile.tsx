import { daysBetween } from "../../api/utils/DateUtils";
import Match from "../../entities/Match";

type Props = {
  match: Match;
};

export default function MatchComponent_Mobile({ match }: Props) {
  const formatDate = (date: Date | null): string => {
    if (!date) return "";
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const daysOfWeek = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const daysFromToday = daysBetween(date, new Date());
    if (daysFromToday === 1) return "Ayer";
    else if (daysFromToday === 0) return "Hoy";
    else if (daysFromToday === -1) return "Mañana";
    return `${daysOfWeek[date!.getDay()]}, ${date!.getDate()} de ${
      months[date!.getMonth()]
    } de ${date!.getFullYear()}`;
  };

  return (
    <div className="bg-white p-3 shadow-md">
      <div style={{ fontSize: "0.8em", color: "gray" }}>
        {formatDate(match.getDate())}
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            flexGrow: "1",
            color:
              match.isFinished() && !match.isPlayer1Wins() ? "gray" : "black",
          }}
          className="px-3 min-h-[2rem] min-h-[2rem] flex flex-col justify-center"
        >
          <span>{match.getPlayer1()?.getName()}</span>
        </div>
        <div
          style={{
            width: "40px",
            textAlign: "center",
            color:
              match.getResult().getPlayer1()[0] <
              match.getResult().getPlayer2()[0]
                ? "gray"
                : "black",
          }}
        >
          {match.getResult().getPlayer1()[0] === 0 &&
          match.getResult().getPlayer2()[0] === 0
            ? ""
            : match.getResult().getPlayer1()[0]}
        </div>
        <div
          style={{
            width: "40px",
            textAlign: "center",
            color:
              match.getResult().getPlayer1()[1] <
              match.getResult().getPlayer2()[1]
                ? "gray"
                : "black",
          }}
        >
          {match.getResult().getPlayer1()[1] === 0 &&
          match.getResult().getPlayer2()[1] === 0
            ? ""
            : match.getResult().getPlayer1()[1]}
        </div>
        <div
          style={{
            width: "40px",
            textAlign: "center",
            color:
              match.getResult().getPlayer1()[2] <
              match.getResult().getPlayer2()[2]
                ? "gray"
                : "black",
          }}
        >
          {match.getResult().getPlayer1()[2] === 0 &&
          match.getResult().getPlayer2()[2] === 0
            ? ""
            : match.getResult().getPlayer1()[2]}
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            flexGrow: "1",
            color:
              match.isFinished() && match.isPlayer1Wins() ? "gray" : "black",
          }}
          className="px-3 min-h-[2rem] flex flex-col justify-center"
        >
          <span>{match.getPlayer2()?.getName()}</span>
        </div>
        <div
          style={{
            width: "40px",
            textAlign: "center",
            color:
              match.getResult().getPlayer2()[0] <
              match.getResult().getPlayer1()[0]
                ? "gray"
                : "black",
          }}
        >
          {match.getResult().getPlayer2()[0] === 0 &&
          match.getResult().getPlayer1()[0] === 0
            ? ""
            : match.getResult().getPlayer2()[0]}
        </div>
        <div
          style={{
            width: "40px",
            textAlign: "center",
            color:
              match.getResult().getPlayer2()[1] <
              match.getResult().getPlayer1()[1]
                ? "gray"
                : "black",
          }}
        >
          {match.getResult().getPlayer2()[1] === 0 &&
          match.getResult().getPlayer1()[1] === 0
            ? ""
            : match.getResult().getPlayer2()[1]}
        </div>
        <div
          style={{
            width: "40px",
            textAlign: "center",
            color:
              match.getResult().getPlayer2()[2] <
              match.getResult().getPlayer1()[2]
                ? "gray"
                : "black",
          }}
        >
          {match.getResult().getPlayer2()[2] === 0 &&
          match.getResult().getPlayer1()[2] === 0
            ? ""
            : match.getResult().getPlayer2()[2]}
        </div>
      </div>
    </div>
  );
}
