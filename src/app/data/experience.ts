export type Experience = {
    id: number,
    company: string,
    title: string,
    location: string,
    dateFrom: string,
    dateTo: string,
    bulletPoints: string[],
    tools?:  string[]
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
        ],
        tools: [
            ".NET",
            "Entity Framework ",
            "JavaScript",
            "SQL Server",
            "Microsoft Azure",
            "SSIS",
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
        ],
        tools: [
            ".NET",
            "Entity Framework",
            "JavaScript",
            "SQL Server",
            "Microsoft Azure",
        ]
    },
    {
        id: 3,
        company: "SANTO TORIBIO DE MOGROVEJO UNIVERSITY",
        title: "Senior .NET Developer",
        location: "Lima, Perú",
        dateFrom: "07/2018",
        dateTo: "08/2021",
        bulletPoints: [
            "Implemented Git versioning with GitLab, overseeing the proposal, execution, team training, and change management to establish a streamlined development workflow.",
            "Developed an admissions CRM module, centralizing applicant data and streamlining communication with prospective students to boost enrollment efficiency.",
            "Redesign the university intranet modules related to the admission macro process, and create new reports that meet the organization's needs."
        ],
        tools: [
            ".NET",
            "JavaScript",
            "SQL Server",
            "SSRS",
        ]
    },
    {
        id: 4,
        company: "GRUPO TOPAL",
        title: "Mid .NET Developer",
        location: "Chiclayo, Perú",
        dateFrom: "07/2017",
        dateTo: "07/2018",
        bulletPoints: [
            "Developed and implemented a payroll management module for the Human Resources department, automating key processes to reduce manual data entry and enhance payroll accuracy.",
            "Developed and implemented a tailored benefits calculation module for various payroll types.",
        ],
        tools: [
            ".NET",
            "SQL Server",
            "SSRS",
        ]
    },
    {
        id: 5,
        company: "SAN MARTIN DE PORRES UNIVERSITY",
        title: "Mid Developer",
        location: "Chiclayo, Perú",
        dateFrom: "05/2016",
        dateTo: "07/2017",
        bulletPoints: [
            "Developed and implemented a new enrollment module for undergraduate students, optimizing the overall admissions workflow.",
            "Provided comprehensive support and maintenance for the Integrated University System, ensuring uninterrupted academic and administrative operations.",
        ],
        tools: [
            "Java",
            "JavaScript",
            "Oracle DB",
        ]
    },
    {
        id: 6,
        company: "ADYL CONSULTING",
        title: "Mid Developer",
        location: "Chiclayo, Perú",
        dateFrom: "08/2015",
        dateTo: "04/2016",
        bulletPoints: [
            "Developed and deployed a fuel control system for the Lambayeque Regional Government ensuring compliance with regional regulations.",
            "Mentored and trained interns, providing hands-on guidance and professional development support.",
        ],
        tools: [
            "PHP",
            "JavaScript",
            "PostgreSQL",
        ]
    },
    {
        id: 7,
        company: "SIAT PERÚ",
        title: "Junior Developer",
        location: "Chiclayo, Perú",
        dateFrom: "06/2012",
        dateTo: "03/2014",
        bulletPoints: [
            "Developed and maintained the commercial pharmacy system for Mi Salud, optimizing inventory management to enhance operational efficiency.",
            "Designed and implemented multiple corporate websites, collaborating with marketing team to ensure consistent branding and an engaging digital presence.",
        ],
        tools: [
            "PHP",
            "JavaScript",
            "MySQL",
        ]
    },
]