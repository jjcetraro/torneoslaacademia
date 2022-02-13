import { Table } from "react-bootstrap";

import RankingPageHooks from '../hooks/RankingPageHooks'

export default function RankingPage() {

    const {rankings} = RankingPageHooks()

    return <>
        <h1>Ranking</h1>
        {
            rankings.map(ranking => {
                return <div key={ranking.getCategory()}>
                    <h3>{`Categoría ${ranking.getCategory()}`}</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th style={{maxWidth: '20px'}}>#</th>
                                <th>Jugador</th>
                                <th style={{maxWidth: '20px'}}>Pts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ranking.getPlayers().map((player, index) => {
                                    return <tr key={player.getId()}>
                                        <td style={{maxWidth: '20px'}}>{index+1}</td>
                                        <td>{player.getName()}</td>
                                        <td style={{maxWidth: '20px'}}>0</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            })
        }
    </>;
}
