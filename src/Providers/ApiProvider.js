import { createContext, useContext, useEffect, useState } from "react"

const ApiContext = createContext({})

const ApiProvider = (props) => {
    const apiKey = 'eHJtV82PvMsDStFrC-4ByF8CYSohUDT5iwULUgq4qXA'
    const [query, setQuery] = useState('pokemon')
    const [photos, setPhotos] = useState(null)
    const [error, setError] = useState(null)

    const handlerQuery = (value) => setQuery(value)

    useEffect(() => {
        const fetchPhotos = async() => {
            try {
                const resp = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${apiKey}`)
                const json = await resp.json()
                setPhotos(json.results)
            } catch (err) {
                setError(err)
            }
        }

        fetchPhotos()
    }, [query])

    const apiContext = {photos, error, handlerQuery}

    return <ApiContext.Provider value={apiContext} {...props}/>
}
export const useApi = () => useContext(ApiContext)
export default ApiProvider