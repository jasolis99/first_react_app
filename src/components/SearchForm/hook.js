import { useReducer } from "react"

const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RATING: 'update_rating',
    UPDATE_LANGUAGE: 'update_language',
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
            return {
                ...state,
                keyword: action.payload,
                times: state.times + 1
            }
        case ACTIONS.UPDATE_RATING:
            return {
                ...state,
                rating: action.payload
            }
        case ACTIONS.UPDATE_LANGUAGE:
            return {
                ...state,
                lang: action.payload
            }
        default:
            return state
    }

}

export default function useForm ({initialKeyword, initialRating, initialLang}) {

    const initialState = {
        keyword: decodeURI(initialKeyword),
        rating: initialRating,
        lang: initialLang,
        times: 0
    }


    const [state, dispatch] = useReducer(reducer,initialState)

    const {keyword, rating,lang, times } = state

    return {
        keyword, 
        rating, 
        lang,
        times,
        updateKeyword: keyword => 
            dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword}),
        updateRating: rating => 
            dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating}),
        updateLanguage: language =>
            dispatch({ type: ACTIONS.UPDATE_LANGUAGE, payload: language }),
    }
}
