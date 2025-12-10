import { useState } from "react";
import type { ReactNode } from "react";
import UserBaseContext from "./UserBaseContext";
import userBaseData from "../Assets/userBase";
import type { UserBase, Todo, Diary } from "./types";

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

  // function updateTodoStatus(diaryId: string, todoTitle: string) {
  //   const todo = user?.diaries.find(ele => ele.id === diaryId)?.todos?.find(t => t.title === todoTitle);
  //   if (!todo) return

  //   if (todo.status === "Completed") return
  //   todo.status = "Completed"
  //   console.log("status updated", todo);
  // }
  function updateTodoStatus(diaryId: string, todoTitle: string) {
    setUsers(prevUsers =>
      prevUsers.map(u =>
        u.userId === userId
          ? {
            ...u,
            diaries: u.diaries.map(d =>
              d.id === diaryId
                ? {
                  ...d,
                  todos: (d.todos ?? []).map(t =>
                    t.title === todoTitle
                      ? { ...t, status: "Completed" }
                      : t
                  ),
                }
                : d
            ),
          }
          : u
      )
    );
  }

  function AddDiaryEntry(newDiary: Diary) {
    alert("new dairy captured")
    console.log(newDiary);
    setUsers(prevUsers =>
      prevUsers.map(u =>
        u.userId === userId
          ? {
            ...u,
            diaries: [...u.diaries, newDiary]
          }
          : u
      )
    )
  }

  // function EditDairy(){

  // }



  function updateHighLightImageTodo(diaryId: string, todoTitle: string, newImg: string) {
    setUsers(prevUsers =>
      prevUsers.map(u =>
        u.userId === userId
          ? {
            ...u,
            diaries: u.diaries.map(d =>
              d.id === diaryId
                ? {
                  ...d,
                  todos: (d.todos ?? []).map(t =>
                    t.title === todoTitle
                      ? { ...t, img: newImg }
                      : t
                  ),
                }
                : d
            ),
          }
          : u
      )
    );
  }




  return (
    <UserBaseContext.Provider value={{ user, addTodo, updateTodoStatus, AddDiaryEntry, updateHighLightImageTodo }}>
      {children}
    </UserBaseContext.Provider>
  );
}
