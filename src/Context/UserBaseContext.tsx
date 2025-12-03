import React, { createContext } from "react";
import type { UserBase, Todo } from "./types";

export interface UserBaseContextType {
    user: UserBase | null;
    addTodo: (diaryId: string, todo: Todo) => void;
}

const UserBaseContext = createContext<UserBaseContextType | null>(null);

export default UserBaseContext;
