import {API_KEY,API_URL} from './settings'

const fromApiResponseToGifs = apiResponse => {
    const {data = []} = apiResponse
    console.log(data);
    return data
}

export default function getTrending() {
    return fetch(`${API_URL}/trending/searches?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}