import { useState } from "react";
import type { ReactNode } from "react";
import UserBaseContext from "./UserBaseContext";
import userBaseData from "../Assets/userBase";
import type { UserBase, Todo } from "./types";

interface Props {
  children: ReactNode;
}

export default function UserBaseContextProvider({ children }: Props) {
  const [userId] = useState<number>(1);
  const [users, setUsers] = useState<UserBase[]>(userBaseData)

  const user = users.find((u) => u.userId === userId) || null;

  function addTodo(diaryId: string, todo: Todo) {
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.userId === userId
          ? {
            ...u,
            diaries: u.diaries.map((d) =>
              d.id === diaryId
                ? { ...d, todos: [...(d.todos ?? []), todo] }
                : d
            ),
          }
          : u
      )
    );
  }

  return (
    <UserBaseContext.Provider value={{ user, addTodo }}>
      {children}
    </UserBaseContext.Provider>
  );
}
