import React, { Children } from "react";
import LibraryContext from './LibraryContext'
import { useState } from "react";

 

export default function LibraryContextProvider({ children }) {
    const [libraryData, setLibraryData] = useState()


        < LibraryContext.Provider value = {{ libraryData, setLibraryData }
}>
    { children }
    </LibraryContext.Provider >

}