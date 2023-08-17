import { useEffect, useState } from "react"

// useLocalStorage()
// this function returns a stateful value, and a function to update it
export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => { 
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof defaultValue === 'function') {
            return defaultValue()
        } else {
            return defaultValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, setValue])

    return [value, setValue]
}