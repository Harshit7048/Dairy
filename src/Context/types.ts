
type TodoStatus = "Completed" | "Pending" | "in-progress";

export interface Todo {
    parentDairyId: string;
    title: string;
    color: string;
    status: TodoStatus;
    img?: string;
}
export interface Diary {
    date: string;
    title: string;
    content: string;
    main_img?: string;
    id: string;
    todos?: Todo[];
}



export interface UserBase {
    userId: number;
    name: string;
    email: string;
    password: string;
    diaries: Diary[];

}
