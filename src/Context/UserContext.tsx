import { useContext } from "react";
import React, { useState, useEffect } from "react";



type UserProviderProps = {
    children: React.ReactNode;
};

type UserContextType = {
    isLoggedIn: boolean,
    login: () => void,
    logout: () => void
}

export const UserContext = React.createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: UserProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <UserContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};