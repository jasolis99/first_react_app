import React from 'react'
import { Helmet} from 'react-helmet'
import './styles.css'
export default function Error404() {

    const title = "Error 404"
    

    return (
        <>
            <Helmet>
                <title>{title} | Giffy</title>
            </Helmet>
            <div className="logo"><b><span>4</span><span>0</span><span>4</span></b></div>
            <a href="" id="btn-twtr" target="_b">Volver</a>
        </>
    )
}