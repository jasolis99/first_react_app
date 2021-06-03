import useUser from 'hooks/useUser'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import './styles.css'
export default function Login({onLogin}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [, pushLocation] = useLocation()
    const { isLoginLoading, hasLoginError, login, isLogged } = useUser()

    useEffect(() => {

        if (isLogged){
            pushLocation('/')
            onLogin && onLogin()  
        } 

    }, [isLogged, pushLocation, onLogin])

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password })
    }


    return (
        <>
            {
                isLoginLoading && <strong>Checking credentials...</strong>
            }
            {
                !isLoginLoading &&
                <form className="form" onSubmit={handleSubmit}>
                    <label>
                        Username
                        <input placeholder="username" onChange={e => setUsername(e.target.value)} value={username} />
                    </label>
                    <label>
                        Password
                        <input type="password" onChange={e => setPassword(e.target.value)} placeholder="password" value={password} />
                    </label>
                    <button className="btn">Login</button>
                </form>
            }
            {
                hasLoginError && <strong>Credentials are invalid</strong>
            }
        </>
    )
}

