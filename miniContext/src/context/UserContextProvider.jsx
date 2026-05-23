import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children})=> {
    const [user, setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{user,setUser}}  >
        {/* The 'app.jsx' will render here (i.e children)*/}
        {children} 
        </UserContext.Provider>
    )
}

export default UserContextProvider
