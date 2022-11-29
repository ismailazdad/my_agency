import {useContext, useEffect, useState} from 'react'
import {ThemeContext} from "../context"

export function useFetch(url) {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!url) return
        setLoading(true)
        async function fetchData() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
            } catch (e) {
                console.log(e)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])
    return {isLoading, data, error}
}
//same
// export function useTheme() {
//     return useContext(ThemeContext)
// }
export function useTheme() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return { theme, toggleTheme }
}