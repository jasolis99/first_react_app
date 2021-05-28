import React, { useState } from 'react'
import css from './styles.module.css'

function SearchForm({ onSubmit }) {

    const [keyword, setKeyword] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit({keyword})
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
      }

    return (
        <form onSubmit={handleSubmit} className={css["c-search"]}>
            <button className={css["c-search-btn"]}>Buscar</button>
            <input
                className={css["c-search-input"]}
                onChange={handleChange}
                type="text"
                value={keyword}
            />
        </form>

    )
}

export default React.memo(SearchForm)