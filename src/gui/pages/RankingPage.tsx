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
                                ranking.getRankingRows().map((rankingRow, index) => {
                                    return <tr key={rankingRow.getPosition()}>
                                        <td style={{maxWidth: '20px'}}>{rankingRow.getPosition()}</td>
                                        <td>{rankingRow.getPlayerName()}</td>
                                        <td style={{maxWidth: '20px'}}>{rankingRow.getScore()}</td>
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
