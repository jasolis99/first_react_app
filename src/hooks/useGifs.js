import { useContext, useEffect, useState } from 'react'
import GifsContext from 'context/GifsContext'
import getGifs from 'services/getGifs'

const INITIAL_PAGE = 0

export function useGifs({keyword} = {keyword: null}) {

    const {gifs, setGifs} = useContext(GifsContext)
    const [page, setPage] = useState(INITIAL_PAGE)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [loading, setLoading] = useState([])

    const keywordToUse = keyword || localStorage.getItem('lastKeyword')
    
    useEffect(() => {
        setLoading(true)
        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, keywordToUse, setGifs])

    useEffect(() => {
        if(page === INITIAL_PAGE) return
        setLoadingNextPage(true)
        getGifs({keyword: keywordToUse, page})
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    },[keywordToUse, page, setGifs])
    
    return {loading, loadingNextPage, gifs, setPage}
}