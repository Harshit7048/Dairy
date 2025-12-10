import React, { createContext } from "react";
import type { UserBase, Todo, Diary } from "./types";

export interface UserBaseContextType {
    user: UserBase | null;
    addTodo: (diaryId: string, todo: Todo) => void
    updateTodoStatus: (dairyId: string, todoTitle: string) => void
    updateHighLightImageTodo: (dairyId: string, todoTitle: string, newImg: string) => void
    AddDiaryEntry: (newdairy: Diary) => void
}

const UserBaseContext = createContext<UserBaseContextType | null>(null);

export default UserBaseContext;
