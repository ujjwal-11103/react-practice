import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const DataFetchFromContext = () => {

    const data = useContext(ThemeContext)

    return (
        <div>
            <h1>Data from Theme Context = {data}</h1>
        </div>
    )
}

export default DataFetchFromContext
