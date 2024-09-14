import React, { Children, createContext, useState } from 'react'


// Context Creation
export const ThemeContext = createContext()

// Provider component
export const ThemeProvider = ({ children }) => {

    const [data, setData] = useState("Data from Context")

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}


