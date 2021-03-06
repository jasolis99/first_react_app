import {API_URL, API_KEY} from './settings'

export default function getGifs({limit = 5, keyword = 'motogp', page = 0, rating = 'g', lang = 'es' } = {}) {
    let url = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=${lang}`
    return fetch(url)
        .then(res => res.json())
        .then(response => {
            const { data } = response
            const gifs = data.map(image => {
                const { images, title, id } = image
                const { url } = images.downsized_medium
                return { title, id, url }
            })
            return gifs
        })
}