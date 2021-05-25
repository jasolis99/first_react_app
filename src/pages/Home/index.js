import React, {useState} from 'react'
import {  useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path,pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault();
        pushLocation(`/search/${keyword}`)
    }
  
    const handleChange = evt => {
      setKeyword(evt.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange} 
                    type="text" 
                    value={keyword} 
                />
            </form>
            <h3>Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
            {/* <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>
                            Gifs de {popularGif}
                        </Link>
                    </li>
                ))}
            </ul> */}
        </>
    )
}