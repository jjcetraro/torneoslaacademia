import React, { useEffect, useState } from 'react'

import { auth } from '../../firebase/Firebase'

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)

    return (
        <AuthContext.Provider
            value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}