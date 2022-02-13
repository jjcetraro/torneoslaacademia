// external libraries
import { useEffect, useState } from 'react'

// daos
import playerDaoCreator from '../../daos/PlayerDao'
import Player from '../../entities/Player'

// firebase
import { auth } from '../../firebase/Firebase'

const UserProfilePageHooks = () => {

    const [ loggedPlayer, setLoggedPlayer ] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged(async user => {
            if(!user){
                window.location = '/'
            }else{
                const playerDao = playerDaoCreator()
                const player = await playerDao.getPlayerByEmail(user.email)
                setLoggedPlayer(player)
            }
        })
    }, [])

    const handleChange = event => {
        if(event.target.id === 'formControlName'){
            const player = loggedPlayer.clone()
            player.setName(event.target.value)
            setLoggedPlayer(player)
        } else if(event.target.id === 'formControlNickname'){
            const player = loggedPlayer.clone()
            player.setNickname(event.target.value)
            setLoggedPlayer(player)
        } else if(event.target.id === 'formControlCellphoneNumber'){
            const player = loggedPlayer.clone()
            player.setCellphoneNumber(event.target.value)
            setLoggedPlayer(player)
        } else if(event.target.id === 'formControlEmail'){
            const player = loggedPlayer.clone()
            player.setEmail(event.target.value)
            setLoggedPlayer(player)
        } else if(event.target.id === 'formControlBirthdate'){
            const player = loggedPlayer.clone()
            player.setBirthdate(event.target.value)
            setLoggedPlayer(player)
        } else if(event.target.id === 'formControlHand'){
            const player = loggedPlayer.clone()
            player.setHand(event.target.value)
            setLoggedPlayer(player)
        } else if(event.target.id === 'formControlMutualist'){
            const player = loggedPlayer.clone()
            player.setMutualist(event.target.value)
            setLoggedPlayer(player)
        } else if(event.target.id === 'formControlUrgency'){
            const player = loggedPlayer.clone()
            player.setUrgency(event.target.value)
            setLoggedPlayer(player)
        }
    }

    return { loggedPlayer, handleChange }
}

export default UserProfilePageHooks