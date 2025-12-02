import type { UserBase } from "../Context/types";

const userBaseData: UserBase[] = [
    {
        userId: 1,
        name: "Harshit Bhardwaj",
        email: "hello1@gmail.com",
        password: "password123",
        diaries: [
            {
                id: "2023-11-25",
                date: "2023-11-25",
                title: "My First Diary Entry",
                content:
                    "Today was a great day! I went to the park and enjoyed the sunshine.",
                main_img:
                    "https://artmarketmag.com/wp-content/uploads/2025/03/Cran-Montana-100-x-100-cm.jpg ",
            },
            {
                id: "2023-11-26",
                date: "2023-11-26",
                title: "A Rainy Day",
                content: "It rained all day today. I stayed indoors and read a book.",
                main_img:
                    "https://artmarketmag.com/wp-content/uploads/2025/03/Cran-Montana-100-x-100-cm.jpg",
            },
        ],
        todos: [
            {
                date: "2023-11-27",
                title: "Buy groceries",
                color: "#FF5733",
                status: "Completed",
                img: "https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"
            },
            {
                date: "2023-11-28",
                title: "Call mom",
                color: "#33FF57",
                status: "Completed",
                img: "https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"
            },
        ],
    },
];

export default userBaseData;
