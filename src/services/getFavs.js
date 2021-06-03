const ENDPOINT = 'http://localhost:8000'

export default function getFavs ({jwt}){

    return fetch(`${ENDPOINT}/getFav`, {
        method: 'GET',
        headers: {
            "Authorization": jwt,
            "Content-Type": "application/json"
        }
    }).then(res => {
        // if(!res.ok) throw new Error ('Response is NOT ok')
        return res.json()
    }).then(res => {
        const { favs , success } = res
        if(success === false) {
            throw new Error ('Response is NOT Ok')
        }
        else{
           return favs
        }
    })
    
}