import React, { useEffect, useState } from 'react'
import getFavs from 'services/getFavs'
const UserContext = React.createContext({})

export function UserContextProvider({children}){
    const [favs, setFavs] = useState([])
    const [jwt, setJWT] = useState(
        () => window.sessionStorage.getItem('jwt')
    )

    useEffect(()=> {
        if(!jwt) return setFavs([])
        getFavs({jwt}).then(setFavs)
    },[jwt])

    return <UserContext.Provider value = {{jwt, setJWT, favs, setFavs}}>
        {children}
    </UserContext.Provider>
}
export default UserContext