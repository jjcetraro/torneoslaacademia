import React from 'react';
import { signInWithGoogle } from '../../firebase/Firebase';

import './LoginWithGoogleButtonStyle.css'

export default function LoginWithGoogleButton() {
  
    const handleClickGoogleSignIn = async () => {
        try{
            const userCredential = await signInWithGoogle()
            if(userCredential){
                window.location = '/tournamentSignUp'
            }
        }catch(error){
            console.log(`error: ${error.message}`)
        }
    }
  
    return (
        <div className="google-btn" onClick={handleClickGoogleSignIn}>
            <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
            </div>
            <p className="btn-text"><b>Entrar con google</b></p>
        </div>
    )
}
