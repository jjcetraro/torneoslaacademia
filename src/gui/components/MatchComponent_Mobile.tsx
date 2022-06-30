import Match from "../../entities/Match"

type Props = {
    match: Match
}

export default function MatchComponent_Mobile({match}: Props) {
  return (
    <div>
        <div style={{display: 'flex'}}>
            <div style={{border: '1px solid black', flexGrow: '1'}}>{match.getPlayer1()?.getName()}</div>
            <div style={{border: '1px solid black', width: '40px', textAlign: 'center'}}>{match.getResult().getPlayer1()[0]}</div>
            <div style={{border: '1px solid black', width: '40px', textAlign: 'center'}}>{match.getResult().getPlayer1()[1]}</div>
            <div style={{border: '1px solid black', width: '40px', textAlign: 'center'}}>{match.getResult().getPlayer1()[2]}</div>
        </div>
        <div style={{display: 'flex'}}>
            <div style={{border: '1px solid black', flexGrow: '1'}}>{match.getPlayer2()?.getName()}</div>
            <div style={{border: '1px solid black', width: '40px', textAlign: 'center'}}>{match.getResult().getPlayer2()[0]}</div>
            <div style={{border: '1px solid black', width: '40px', textAlign: 'center'}}>{match.getResult().getPlayer2()[1]}</div>
            <div style={{border: '1px solid black', width: '40px', textAlign: 'center'}}>{match.getResult().getPlayer2()[2]}</div>
        </div>
    </div>
  )
}
