import React, { useEffect, useState } from 'react'

const SlowComponent = () => {

    const [data, setData] = useState("")

    useEffect(() => {
        const timer = setTimeout(() => {
            setData("Data from Lazy Component")
        }, 3000)

        return () => clearTimeout(timer)
    }, [])


    return (
        <div>
            {data}
        </div>
    )
}

export default SlowComponent
