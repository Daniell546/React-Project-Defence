import { createContext } from "react";

export const AuthContext = createContext({
    user: {
        email: '',
        phoneNumber: '',
        _id: '',
    },
    isAuthenticated: !!localStorage.getItem('auth'),
    changeAuthState: (authState = {}) => null,
});
