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
                                <th style={{maxWidth: '20px'}}>E1</th>
                                <th style={{maxWidth: '20px'}}>E2</th>
                                <th style={{maxWidth: '20px'}}>E3</th>
                                <th style={{maxWidth: '20px'}}>E4</th>
                                <th style={{maxWidth: '20px'}}>E5</th>
                                <th style={{maxWidth: '20px'}}>Pts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ranking.getRankingRows().map((rankingRow, index) => {
                                    return <tr key={index}>
                                        <td style={{maxWidth: '20px'}}>{index + 1}</td>
                                        <td>{rankingRow.getPlayerName()}</td>
                                        <td style={{maxWidth: '20px'}}>{rankingRow.getE1()}</td>
                                        <td style={{maxWidth: '20px'}}>{rankingRow.getE2()}</td>
                                        <td style={{maxWidth: '20px'}}>{rankingRow.getE3()}</td>
                                        <td style={{maxWidth: '20px'}}>{rankingRow.getE4()}</td>
                                        <td style={{maxWidth: '20px'}}>{rankingRow.getE5()}</td>
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
