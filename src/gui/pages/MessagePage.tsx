type Props = {
  message: string
}

export default function MessagePage({message}: Props) {
  return (
    <div style={{width: '100%', position:'fixed', top:'50%', marginTop: '-50px', textAlign:'center'}}>
        <h3 style={{textAlign: 'center'}}>{message}</h3>
    </div>
  )
}
