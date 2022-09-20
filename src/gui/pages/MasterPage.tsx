import NavBar from "../components/NavBar"

export interface IMasterPageProps {
    children: JSX.Element
}

const MasterPage: React.FunctionComponent<IMasterPageProps> = ({children}) => {
    return (
        <>
            <NavBar/>
            <div className="px-5 pt-24">
                {children}
            </div>
        </>
    )
}

export default MasterPage