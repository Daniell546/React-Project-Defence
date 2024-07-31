import { createContext } from "react";

export const AuthContext = createContext({
    user: {},
    isAuthenticated: !!localStorage.getItem('auth'),
    changeAuthState: (authState = {}) => null,
});
