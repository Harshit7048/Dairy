import type { UserBase } from "../Context/types";

const userBaseData: UserBase[] = [
    {
        userId: 1,
        name: "Harshit Bhardwaj",
        email: "hello1@gmail.com",
        password: "password123",
        diaries: [
            {
                id: "2025-12-08",
                date: "2025-12-08",
                title: "My First Diary Entry",
                content:
                    "Today was a great day! I went to the park and enjoyed the sunshine.",
                main_img:
                    "https://artmarketmag.com/wp-content/uploads/2025/03/Cran-Montana-100-x-100-cm.jpg ",
                todos: [
                    {
                        parentDairyId: "2025-12-08",
                        title: "Go for a walk",
                        color: "#FFDDC1",
                        status: "Completed",
                        img: " https://artmarketmag.com/wp-content/uploads/2025/03/Cran-Montana-100-x-100-cm.jpg",
                    },
                    {
                        parentDairyId: "2025-12-08",
                        title: "Read a book",
                        color: "#C1E1FF",
                        status: "in-progress",
                        img: "https://artmarketmag.com/wp-content/uploads/2025/03/Cran-Montana-100-x-100-cm.jpg",
                    },
                ],

            },
            {
                id: "2025-12-02",
                date: "2025-12-02",
                title: "A Rainy Day",
                content: "It rained all day today. I stayed indoors and read a book.",
                main_img:
                    "https://artmarketmag.com/wp-content/uploads/2025/03/Cran-Montana-100-x-100-cm.jpg",
            },
        ],


    },
];

export default userBaseData;
