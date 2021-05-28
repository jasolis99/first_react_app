import React from 'react'
import Gif from 'components/Gif'
import Masonry from 'react-masonry-css'
import './styles.css'

export default function ListOfGifs({ gifs }) {

    return <Masonry breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    id={id}
                    key={id}
                    title={title}
                    url={url}
                />
            )

        }
    </Masonry>
}