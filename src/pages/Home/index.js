import React, { useCallback, useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import { useGifs } from 'hooks/useGifs'
import SearchForm from 'components/SearchForm'
import {Helmet} from 'react-helmet'

export default function Home() {
    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGifs()

    const title = 'Home'

    const handleSubmit = useCallback(({ keyword }) => {
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])

    return (
        <>
            <Helmet>
                <title>{title} | Giffy </title>
                <link rel="canonical" href="https://giffysearcher.com" />
            </Helmet>
            <header className="o-header">
                <SearchForm onSubmit={handleSubmit} />
            </header>
            <div className="App-wrapper">
                <div className="App-main">
                    <div className="App-results">
                        <h3 className="App-title">Última búsqueda</h3>
                        <ListOfGifs gifs={gifs} />
                    </div>
                    <div className="App-category">
                        <TrendingSearches />
                    </div>
                </div>
            </div>
        </>
    )
}