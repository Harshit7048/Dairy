import React, { Children } from "react";

import { createContext } from "react";

type DailyObject = {
    date: Date,
    id: number,
    descriptiton: string
}


const LibraryContext = createContext<DailyObject[] | undefined>()

export default LibraryContext