import React, {useState} from 'react'
import {Link,  useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import { useGifs } from 'hooks/useGifs'

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
            <h3>Gifs populares</h3>
            <div>
                <TrendingSearches/>
            </div>
        </>
    )
}