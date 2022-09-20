import { useContext } from "react"
import { createContext } from "react"

export interface IAuthProviderProps {
    children: JSX.Element | JSX.Element[]
}

export interface IUser {
    email: string
}

export const authContext = createContext<IUser | null>(null)

export const useAuth = () => {
    const result = useContext(authContext)
    console.log('result: ' + result)
    return result
}

const AuthProvider: React.FunctionComponent<IAuthProviderProps> = ({children}) => {
    return (
        <authContext.Provider value={{email:'aaaa'}}>{children}</authContext.Provider>
    )
}

export default AuthProvider