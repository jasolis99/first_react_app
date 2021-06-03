const ENDPOINT = 'http://localhost:8000'

export default function registerService ({username, password}){

    return fetch(`${ENDPOINT}/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})

    }).then(res => {
        // if(!res.ok) throw new Error ('Response is NOT ok')
        return res.json()
    }).then(res => {
        const { success } = res
        if(success === false) {
            throw new Error ('Response is NOT Ok')
        }
        else{
            return true
        }
    })
    
}
