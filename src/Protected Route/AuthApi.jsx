import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    // logic for authentication
    const login = () => {
        // Perform your login logic here, such as calling an API for authentication.
        // After successful authentication:
        setIsAuthenticated(true);
        console.log('User logged in');
    };

    return (

        <AuthContext.Provider value={{ isAuthenticated, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

