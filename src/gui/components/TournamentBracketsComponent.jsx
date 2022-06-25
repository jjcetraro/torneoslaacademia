// external libs
import { useState } from "react"
import { Button, Modal } from "react-bootstrap"

// entities
import Match from "../../entities/Match"
import Player from "../../entities/Player"

// gui
import '../styles/GeneralStyles.css'
import BracketMatchLine from './BracketMatchLine'
import { updateMatch } from "../../api/MatchAPI"
import MatchResult from "../../entities/MatchResult"

export default function TournamentBracketsComponent({tournament, permitEdition}) {

    const handleInputChange = event => {
        let value = event.target.value
        let targetName = event.target.name
        if(targetName.startsWith('player1')){
            if(targetName.endsWith('set1')){
                setModalData({
                    ...modalData,
                    result: [
                        [value, modalData.result[0][1], modalData.result[0][2]],
                        [modalData.result[1][0], modalData.result[1][1], modalData.result[1][2]]
                    ]
                })
            } else if(targetName.endsWith('set2')){
                setModalData({
                    ...modalData,
                    result: [
                        [modalData.result[0][0], value, modalData.result[0][2]],
                        [modalData.result[1][0], modalData.result[1][1], modalData.result[1][2]]
                    ]
                })
            } else if(targetName.endsWith('set3')){
                setModalData({
                    ...modalData,
                    result: [
                        [modalData.result[0][0], modalData.result[0][1], value],
                        [modalData.result[1][0], modalData.result[1][1], modalData.result[1][2]]
                    ]
                })
            }
        }else{
            if(targetName.endsWith('set1')){
                setModalData({
                    ...modalData,
                    result: [
                        [modalData.result[0][0], modalData.result[0][1], modalData.result[0][2]],
                        [value, modalData.result[1][1], modalData.result[1][2]]
                    ]
                })
            } else if(targetName.endsWith('set2')){
                setModalData({
                    ...modalData,
                    result: [
                        [modalData.result[0][0], modalData.result[0][1], modalData.result[0][2]],
                        [modalData.result[1][0], value, modalData.result[1][2]]
                    ]
                })
            } else if(targetName.endsWith('set3')){
                setModalData({
                    ...modalData,
                    result: [
                        [modalData.result[0][0], modalData.result[0][1], modalData.result[0][2]],
                        [modalData.result[1][0], modalData.result[1][1], value]
                    ]
                })
            }
        }
    }

    const handleClick = (match) => {
        setLastMatchClicked(match)
    }

    const getResult = () => {
        const player1Result = [
            Number(modalData.result[0][0]),
            Number(modalData.result[0][1]),
            Number(modalData.result[0][2])
        ]
        const player2Result = [
            Number(modalData.result[1][0]),
            Number(modalData.result[1][1]),
            Number(modalData.result[1][2])
        ]
        for(let i = 0; i < player1Result.length; i++){
            if(player1Result[i] < 0 || Number.isNaN(player1Result[i])){
                return null
            }
        }
        for(let i = 0; i < player2Result.length; i++){
            if(player2Result[i] < 0 || Number.isNaN(player2Result[i])){
                return null
            }
        }
        return new MatchResult(player1Result, player2Result)
    }

    const handleClickLoadResult = async event => {
        const result = getResult()
        if(!result){
            alert('Resultado Inválido')
            return
        }
        event.target.setAttribute('disabled', '')
        const matchToUpdate = new Match(
            lastMatchClicked.getId(),
            new Player(document.getElementById('selectPlayer1').value !== '0' ? document.getElementById('selectPlayer1').value : null, null, null, null, null, null, null, null, null, null),
            new Player(document.getElementById('selectPlayer2').value !== '0' ? document.getElementById('selectPlayer2').value : null, null, null, null, null, null, null, null, null, null),
            new Date(),
            result,
            false,
            true
        )
        await updateMatch(matchToUpdate)
        window.location.reload()
    }

    const [lastMatchClicked, setLastMatchClicked] = useState(null)
    
    const [modalData, setModalData] = useState({
        result: [['', '', ''], ['', '', '']],
        player1: null,
        player2: null
    })

    const handleClose = () => setLastMatchClicked(null)

    const tableRows = []
    const lastMatchAddedPerPhase = tournament.getPhases().map(phase => 0)
    for(let i = 0; i < Math.pow(2, tournament.getPhasesCount()); i++){
        const tableCells = []
        for(let j = 0; j < tournament.getPhasesCount(); j++){
            const className = getClassName(i, j, tournament.getPhasesCount())
            let player = ''
            const phase = tournament.getPhases()[j]
            let isPlayer2 = false
            if(phase){
                const lastMatch = phase.getMatches()[lastMatchAddedPerPhase[j]]
                if(lastMatch){
                    if(className.includes('bb')){
                        const playerObj = lastMatch.getPlayer1()
                        player = <div style={{paddingTop: '10px'}}>
                            <BracketMatchLine 
                                playerName={playerObj ? playerObj.getName() : ''} 
                                set1={lastMatch.getResult() ? lastMatch.getResult().player1[0]: '-'}
                                set2={lastMatch.getResult() ? lastMatch.getResult().player1[1]: '-'}
                                set3={lastMatch.getResult() ? lastMatch.getResult().player1[2]: '-'}
                                handleClick={permitEdition ? () => handleClick(lastMatch) : () => {}}/>
                        </div>
                    } else if(i > 0 && tableRows[i-1].props.children[j].props.className.includes('bb')){
                        const playerObj = lastMatch.getPlayer2()
                        player = <div>
                            <BracketMatchLine 
                                playerName={playerObj ? playerObj.getName() : ''} 
                                set1={lastMatch.getResult() ? lastMatch.getResult().player2[0]: '-'}
                                set2={lastMatch.getResult() ? lastMatch.getResult().player2[1]: '-'}
                                set3={lastMatch.getResult() ? lastMatch.getResult().player2[2]: '-'}
                                handleClick={permitEdition ? () => handleClick(lastMatch) : () => {}}/>
                        </div>
                        isPlayer2 = true
                        lastMatchAddedPerPhase[j]++
                    }
                }
            }
            const td = <td key={j} className={className} style={{padding: '0px 10px 0px 0px', verticalAlign: (isPlayer2 ? 'top' : 'middle')}}>{player}</td>
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

        <Modal show={lastMatchClicked} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cargar Resultado</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{display:'flex'}}>
                    <span>Fue W.O.:</span>
                    <select 
                        id='selectWO'
                        style={{flexGrow: '1'}}>
                        <option key="0" value="no">No</option>
                        <option key="1" value="yes">Si</option>
                    </select>
                </div>
                <div style={{display:'flex'}}>
                    <select 
                        id='selectPlayer1'
                        style={{flexGrow: '1'}} 
                        defaultValue={
                            lastMatchClicked && lastMatchClicked.getPlayer1()
                            ?
                            lastMatchClicked.getPlayer1().getId()
                            :
                            '0'
                            }>
                        <option key="0" value="0">-</option>
                        {
                            tournament.getPlayers().map(player => {
                                return (
                                    <option key={player.getId()} value={player.getId()}>{player.getName()}</option>
                                )
                            })
                        }
                    </select>
                    <input name='player1set1' type="text" style={{width:'50px'}} onChange={handleInputChange}></input>
                    <input name='player1set2' type="text" style={{width:'50px'}} onChange={handleInputChange}></input>
                    <input name='player1set3' type="text" style={{width:'50px'}} onChange={handleInputChange}></input>
                </div>
                <div style={{display:'flex'}}>
                    <select 
                        id='selectPlayer2'
                        style={{flexGrow: '1'}} 
                        defaultValue={
                            lastMatchClicked && lastMatchClicked.getPlayer2()
                            ?
                            lastMatchClicked.getPlayer2().getId()
                            :
                            '0'
                            }>
                        <option key="0" value="0">-</option>
                        {
                            tournament.getPlayers().map(player => {
                                return (
                                    <option key={player.getId()} value={player.getId()}>{player.getName()}</option>
                                )
                            })
                        }
                    </select>
                    <input name='player2set1' type="text" style={{width:'50px'}} onChange={handleInputChange}></input>
                    <input name='player2set2' type="text" style={{width:'50px'}} onChange={handleInputChange}></input>
                    <input name='player2set3' type="text" style={{width:'50px'}} onChange={handleInputChange}></input>
                </div>
            </Modal.Body>
            <Modal.Footer style={{display: 'block', textAlign: 'center'}}>
                <Button variant="primary" onClick={handleClickLoadResult}>
                    Cargar
                </Button>
            </Modal.Footer>
        </Modal>
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