import React, { useEffect, useState } from 'react'
import getTrending from 'services/getTrending'
import Category from 'components/Category'

export default function TrendingSearches() {

    const [trends, setTrends] = useState([])
    
    useEffect(() => {
        getTrending().then(setTrends)
    }, [])
    
    return <Category name='Tendencias' options={trends} />
}