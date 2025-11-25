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
    setDataSet: React.Dispatch<React.SetStateAction<dataObj[]>>
    addItem: (item: dataObj) => void
}

// const dummyData: dataObj = {
//     id: 123,
//     name: "first ",
//     desc: "This is the first dataobj"
// }





// export const LibraryContext = React.createContext<LibraryContextType | null>(null);


// export const LibrabryContextProvider = ({ children }: LibraryProviderProps) => {

//     const [dataSet, setDataSet] = useState<dataObj[]>([])

//     const addItem = (item: dataObj) => {
//         setDataSet(prev => [...prev, item])
//     }

//     return <LibraryContext.Provider value={dataSet, setDataSet, addItem}>

//         {children}

//     </LibraryContext.Provider>
// }





export const LibraryContext = React.createContext<LibraryContextType | null>(null);

export const LibraryContextProvider = ({ children }: LibraryProviderProps) => {
    const [dataSet, setDataSet] = useState<dataObj[]>([]);

    const addItem = (item: dataObj) => setDataSet(prev => [...prev, item]);

    return (
        <LibraryContext.Provider value={{ data: dataSet, setDataSet, addItem }}>
            {children}
        </LibraryContext.Provider>
    );
};

export default LibraryContextProvider