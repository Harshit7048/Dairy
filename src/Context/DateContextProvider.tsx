import React, { useState } from "react";
import type { ReactNode } from "react";
import DateContext from "./DateContext";

interface Props {
    children: ReactNode;
}

export default function DateContextProvider({ children }: Props) {
    // Initialize once on mount
    const [currentDate] = useState<string>(() => {
        const d = new Date();
        const year = d.getFullYear();
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const day = d.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    });

    return (
        <DateContext.Provider value={currentDate}>
            {children}
        </DateContext.Provider>
    );
}
