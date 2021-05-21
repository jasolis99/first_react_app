import { React, useEffect, useState } from 'react'
import Gif from './Gifs'
import getGifs from '../services/getGifs.js'

export default function ListOfGifs({ params }) {
    const {keyword} = params
    const [gifs, setGifs] = useState(
        {loading:false, results: []}
    )

    useEffect(() => {
        setGifs (
            actualGifs => ({loading: true, results: actualGifs.results})
        )
        getGifs({ keyword })
            .then(gifs => {
                setGifs({loading: false, results: gifs})
            })
    }, [keyword])

    if(gifs.loading)
        return <div>Cargando ...</div>

    return <div>
        {
            gifs.results.map(({ id, title, url }) =>
                <Gif
                    id={id}
                    key={id}
                    title={title}
                    url={url}
                />
            )
        }
    </div>
}