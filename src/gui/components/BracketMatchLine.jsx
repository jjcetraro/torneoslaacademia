import '../styles/GeneralStyles.css'

export default function BracketMatchLine({playerName, set1, set2, set3, handleClick}) {
  
  return (
    <div className='monospaceFont' style={{display: 'flex'}} onClick={handleClick}>
        <span style={{border:'1px solid black', flexGrow:'1'}}>{playerName.length <= 14 ? playerName : `${playerName.substring(0, 11)}...`}</span>
        <span style={{border:'1px solid black', width:'25px', textAlign: 'center'}}>{set1}</span>
        <span style={{border:'1px solid black', width:'25px', textAlign: 'center'}}>{set2}</span>
        <span style={{border:'1px solid black', width:'25px', textAlign: 'center'}}>{set3}</span>
    </div>
  )
}
