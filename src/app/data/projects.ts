export type Project = {
    id: number,
    image: string,
    title: string,
    description: string
}

export const projects: Project[] = [
    {
        id: 1,
        image: "projects/project-1.png",
        title: "Portfolio",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        image: "projects/project-2.jpg",
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 3,
        image: "projects/project-3.png",
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
]