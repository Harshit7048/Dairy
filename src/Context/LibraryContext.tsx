import React, { useState } from "react";




type LibraryProviderProps = {
    children: React.ReactNode;
};
export type dataObj = {
    name: string,
    id: number,
    desc: string
}

type LibraryContextType = {
    data: dataObj[],
    setDataSet: React.Dispatch<React.SetStateAction<dataObj[]>>,
    addItem: (item: dataObj) => void,
    // currentId: number | null,
    // setCurrentId: React.Dispatch<React.SetStateAction<number | null>>
}

const dummyData: dataObj = {
    id: 123,
    name: "first ",
    desc: "This is the first dataobj"
}

export const LibraryContext = React.createContext<LibraryContextType | null>(null);

export const LibraryContextProvider = ({ children }: LibraryProviderProps) => {
    const [dataSet, setDataSet] = useState<dataObj[]>([dummyData]);
    // const [currentId, setCurrentId] = useState<number | null>(null);

    const addItem = (item: dataObj) => {
        setDataSet(prev => [...prev, item]);
    };

    return (
        <LibraryContext.Provider value={{ data: dataSet, setDataSet, addItem }}>
            {children}
        </LibraryContext.Provider>
    );
};

export default LibraryContextProvider;