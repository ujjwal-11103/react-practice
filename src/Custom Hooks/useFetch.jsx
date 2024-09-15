import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {

        const fetchdata = async () => {

            if (url) {
                try {
                    const response = await fetch(url)
                    const responseJson = await response.json()
                    setData(responseJson)
                    setLoading(false)
                    if (responseJson.status == "404") {
                        setError("User Not Found")
                    }
                } catch (error) {
                    console.log("Error = " + error);
                    setError(error)
                }
            }
        }

        fetchdata()

    }, [url])


    return { data, loading, error }
}

export default useFetch
