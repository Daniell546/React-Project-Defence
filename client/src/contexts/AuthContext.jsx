import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
    user: {
        email: '',
        phoneNumber: '',
        _id: '',
    },
    isAuthenticated: !!localStorage.getItem('auth'),
    changeAuthState: (authState = {}) => null,
});


export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        setAuthState(state);
        localStorage.setItem('user', JSON.stringify(state));
    };

    const user = JSON.parse(localStorage.getItem('user'));
    const contexAuthData = {
        user,
        isAuthenticated: !!user,
        changeAuthState,
    };

    return (
        <AuthContext.Provider value={contexAuthData}>
            {children}
        </AuthContext.Provider>
    );
};
