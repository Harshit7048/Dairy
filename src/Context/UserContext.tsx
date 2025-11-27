import React, { useState } from "react";
import { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types/User';

// src/types/User.ts
export interface User {
    id: number
    ;
    name: string;
    email: string;
    password: string;
    // Add other user-related properties as needed
}
// src/context/UserContext.tsx


interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};