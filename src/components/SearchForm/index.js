import React from 'react'
import { useLocation } from 'wouter'
import useForm from './hook'
import css from './styles.module.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']
const LANGS = ['en', 'es', 'it', 'pt']

function SearchForm({ initialKeyword = '', initialRating = 'g', initialLang = 'es' }) {

    const { keyword, rating, lang, times, updateKeyword, updateRating, updateLanguage, resetState } = useForm({ 
        initialKeyword, initialRating, initialLang
    })

    const [path, pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault();
        pushLocation(`/search/${keyword}/${rating}/${lang}`)
    }

    const handleChange = evt => {
        updateKeyword(evt.target.value)
    }

    const handleChangeRating = (evt) => {
        updateRating(evt.target.value)   
    }
    const handleChangeLang = (evt) => {
        updateLanguage(evt.target.value)   
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
            <select value={rating} onChange={handleChangeRating}>
                <option disabled>Rating type</option>
                {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
            </select>
            <select value={lang} onChange={handleChangeLang} >
                <option disabled>Language</option>
                {LANGS.map(language => <option key={language}>{language}</option>)}
            </select>
        </form>

    )
}

export default React.memo(SearchForm)