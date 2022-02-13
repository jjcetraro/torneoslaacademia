import { useEffect } from 'react';

import { auth } from '../../firebase/Firebase';
import LoginWithGoogleButton from '../components/LoginWithGoogleButton';

export default function LoginPage() {
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        window.location = '/tournamentSignUp'
      }
    })
  }, [])
  
  return(
    <div style={{position:'fixed', top:'50%', left:'50%', marginTop: '-50px', marginLeft: '-100px'}}>
        <LoginWithGoogleButton/>
    </div>
  )
}
