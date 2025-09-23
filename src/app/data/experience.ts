export type Experience = {
    id: number,
    company: string,
    title: string,
    location: string,
    dateFrom: string,
    dateTo: string,
    bulletPoints: string[]
}

export const experiences: readonly Experience[] = [
    {
        id: 1,
        company: "NAGNOI LLC / INGENIA HEALTH",
        title: "Software Engineer II",
        location: "San Juan, PR",
        dateFrom: "09/2022",
        dateTo: "Present",
        bulletPoints: [
            "Led Azure DevOps implementation by designing and configuring automated CI/CD pipelines. This implementation reduced manual integration effort across all environments.",
            "Provided technical consulting for the STARSTrack product, leading front-end and backend system implementations, and cross-functional requirements definition.",
            "Led the software and infrastructure architecture for multiple teams, implementing best practices and design patterns that enhanced application reliability, maintainability, and scalability."
        ]
    },
    {
        id: 2,
        company: "KAITS CONSULTING",
        title: "Senior .NET Developer",
        location: "Lima, Perú",
        dateFrom: "08/2021",
        dateTo: "08/2022",
        bulletPoints: [
            "Added new functionalities to the STARSTrack product by developing data visualization and reporting interfaces for healthcare analytics, enabling actionable insights and streamlined decision-making.",
            "Developed product demos and prototypes in collaboration with marketing team, effectively showcasing new product concepts to stakeholders and accelerating go to market decisions.",
            "Supported developer hiring through technical interviews and code reviews, ensuring high-quality hires and strengthening the development team."
        ]
    },
]