import Fav from 'components/Fav'
import React from 'react'
import {Link} from 'wouter'
import './Gif.css'

function Gif({title, id, url}) {
    return (
        <div className='Gif'>
            <div className="Giff-buttons">
                <Fav id={id}></Fav>
            </div>
            <Link to={`/gif/${id}`} className='Gif-link' > 
                <h4>{title}</h4>
                <img alt={title} src={url} />   
            </Link>
        </div>
    )
}
export default React.memo(Gif)