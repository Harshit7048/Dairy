export interface Diary {
    date: string;
    title: string;
    content: string;
    main_img?: string;
}

export interface Todo {
    date: string;
    title: string;
    color: string;
    status: string;
    img: string;
}

export interface UserBase {
    userId: number;
    name: string;
    email: string;
    password: string;
    diaries: Diary[];
    todos?: Todo[];
}
