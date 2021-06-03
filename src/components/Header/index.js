import useUser from 'hooks/useUser'
import React from 'react'
import { Link } from 'wouter'
import './index.css'

export default function Header({ }) {

    const {isLogged,logout} = useUser()


    return (
        <header className='gf-header'>
            {
                isLogged
                    ?
                    <button onClick={logout}>
                        Logout
                    </button>
                    :
                    <>
                        <Link to='/login'>
                            Sign in
                        </Link>
                        <Link to='/register'>
                            Sing up
                        </Link>
                    </>

            }
        </header>
    )
}