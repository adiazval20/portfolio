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
        description: "Just a simple portfolio"
    },
]