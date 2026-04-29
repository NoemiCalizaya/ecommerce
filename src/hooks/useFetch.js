import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../constants/env"

export const useFetch = (endpoint, headers={}) => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`${API_URL}/${endpoint}`)
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            }
            )
    }, [])

    return { data, error, loading }
}