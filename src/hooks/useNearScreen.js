import React, {useState, useEffect, useRef} from 'react'

export default function useNearScreen ({distance = '200px'} = {}) {

    const [isNearScreen, setIsNearScreen] = useState(false)
    const lazyRef = useRef()
    useEffect(() => {
        const onChange = (entries, observer) => {
            const el = entries[0]
            console.log(el);
            if (el.isIntersecting) {
                setIsNearScreen(true)
                observer.disconnect()
            }
        }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: distance
        })
        observer.observe(lazyRef.current)
        return () => observer.disconnect()
    })
    return {isNearScreen, lazyRef}
}