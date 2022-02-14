import '../styles/GeneralStyles.css'

export default function TournamentBracketsComponent({tournament}) {

    const tableRows = []
    const lastMatchAddedPerPhase = [0, 0, 0, 0, 0, 0]
    for(let i = 0; i < Math.pow(2, tournament.getPhasesCount()); i++){
        const tableCells = []
        for(let j = 0; j < tournament.getPhasesCount(); j++){
            const className = getClassName(i, j, tournament.getPhasesCount())
            let player = ''
            const phase = tournament.getPhases()[j]
            if(phase){
                const lastMatch = phase.getMatches()[lastMatchAddedPerPhase[j]]
                if(lastMatch){
                    if(className.includes('bb')){
                        const playerObj = lastMatch.getPlayer1()
                        player = playerObj ? playerObj.getName() : 'BYE'
                    } else if(i > 0 && tableRows[i-1].props.children[j].props.className.includes('bb')){
                        const playerObj = lastMatch.getPlayer2()
                        player = playerObj ? playerObj.getName() : 'BYE'
                        lastMatchAddedPerPhase[j]++
                    }
                }
            }
            const td = <td key={j} className={className}>{`${player}`}</td>
            tableCells.push(td)
        }
        const tr = <tr key={i}>{tableCells}</tr>
        tableRows.push(tr)
    }

    return (
    <>
        <h1>{tournament.getName()}</h1>
        <table>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    </>
    )
}

function getClassName(row, col, phases){
    let result = ''
    if(row%(Math.pow(2, col+1)) === Math.max(Math.pow(2, col)-1,0)){
        result += 'bb'
    }
    if(col < phases - 1 && row%(Math.pow(2,col+2)) >= Math.pow(2,col) && row%(Math.pow(2,col+2)) <= Math.pow(2,col+2) - Math.pow(2,col) - 1){
        result += ' br'
    }

    return result
}
