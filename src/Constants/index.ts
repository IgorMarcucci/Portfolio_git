import { MdWork, MdSchool } from "react-icons/md"
import { LangInterface } from "../interfaces/lang_interface";
import { ProjectsInterface } from "../interfaces/projects_interface";
import { CareerInterface } from "../interfaces/career_interface";
import { AboutInterface } from "../interfaces/about_interface";
import { TechInterface } from "../interfaces/tech_interface";

class ConstantsValues {
    techList: TechInterface[] = [
        {
            name: "Flutter",
            icon: 'devicon-flutter-plain colored',
        },
        {
            name: "Angular",
            icon: 'devicon-angularjs-plain colored',
        },
        {
            name: "React.js",
            icon: 'devicon-react-original colored',
        },
        {
            name: ".NET Core",
            icon: 'devicon-dotnetcore-plain colored',
        },
        {
            name: "OracleSQL",
            icon: 'devicon-oracle-original colored',
        },
        {
            name: "PostgreSQL",
            icon: 'devicon-postgresql-plain colored',
        }
    ];

    projectsList: ProjectsInterface[] = [
        {
            name: "Software para atualização de embarcados",
            description: "Software desenvolvido em C++/QT/QML para atualização de firmware em sistemas embarcados",
            link: '',
        },
        {
            name: "Aplicativo mobile para rastreamento",
            description: "Aplicativo mobile desenvolvido em Flutter para rastreamento de dispositivos",
            link: '',
        },
        {
            name: "Plataforma web para gestão de comércio exterior",
            description: "Plataforma web desenvolvida em Angular para gestão de operações de comércio exterior",
            link: '',
        },
        {
            name: "Plataforma web para gestão de custos",
            description: "Plataforma web desenvolvida em React.js para gestão de custos",
            link: '',
        },
        {
            name: "Aplicativo mobile para gestão de estoque e logística",
            description: "Aplicativo mobile desenvolvido em Flutter para gerenciamento de estoque e operações logísticas",
            link: 'https://github.com/IgorMarcucci/storage_flow',
        },
        {
            name: "Aplicativo mobile para gerenciamento de estacionamento",
            description: "Aplicativo mobile desenvolvido em Flutter para gerenciamento de estacionamento e visualização de vagas em tempo real",
            link: 'https://github.com/IgorMarcucci/ParkIn/tree/rebase',
        },
        {
            name: "Plataforma web para gerenciamento de questões de RH",
            description: "Plataforma web que está sendo desenvolvida em React.js para gestão de RH",
            link: '',
        },
        {
            name: "Aplicativo mobile genérico",
            description: "Aplicativo mobile desenvolvido em Flutter como modelo e base para outros projetos, com telas e funcionalidades genéricas e reutilizáveis.",
            link: 'https://github.com/IgorMarcucci/ModelApp',
        },
        {
            name: "Api de software Kanban",
            description: "API de software Kanban desenvolvida em Python, usando o Flask, para comunicar com software de gerenciamento de tarefas e projetos.",
            link: 'https://github.com/IgorMarcucci/Kanban_API',
        },
        {
            name: "Api de software de comunicação",
            description: "API de software de comunicação desenvolvida em C#, usando o .NET Core, para comunicar com software de comunicação e mensagens.",
            link: '',
        },
    ];

    workHistory: CareerInterface[] = [
        {
            companyName: "Agrosure",
            role: "Desenvolvedor",
            description: "Desenvolvimento de softwares Mobile e Web, uso do framework Flutter, do React.js e de suas tecnologias no dia a dia",
            date: "Agosto/2022 - Atualmente",
            icon: MdWork,
        },
        {
            companyName: "Agrosure",
            role: "Estágio de desenvolvimento",
            description: "Desenvolvimento de softwares voltados para sistemas embarcados em C/C++, utilizando também o QT Creator e suas tecnologias",
            date: "Maio/2022 - Agosto/2022",
            icon: MdSchool,
        },
        {
            companyName: "Take and Go",
            role: "Analista de suporte computacional",
            description: "Soluções de suporte na área da tecnologia, geração de relatórios e análise de erros",
            date: "Outubro/2021 - Maio/2022",
            icon: MdWork,
        }
        
        
    ];

    aboutList: AboutInterface[] = [
        {
            title: "Sobre mim",
            description: "Meu nome é Igor e sou engenheiro de software com habilidades sólidas em Flutter, Angular, React.js, C#, OracleSQL e PostgreSQL. Nesta breve apresentação, estarei compartilhando um pouco sobre minha experiência e conhecimento em ambas tecnologias.",
            route: "/career"
        },
        {
            title: "Flutter",
            description: "Minhas habilidades incluem gerenciamento de estado, consumo de APIs, responsividade, tokens e outros recursos do Flutter.",
            route: "/flutter"
        },
        {
            title: "Angular",
            description: "Possuo conhecimento em gerenciamento de estado, consumo de APIs, tokens, layouts e outros recursos do Angular, ",
            route: "/angular"
        },
        {
            title: "React.js",
            description: "Contenho aptidão em responsividade, consumo de APIs, gerenciamento de estado, layouts, Bootstrap, Tailwind e outros recursos do React.js.",
            route: "/react"
        },
        {
            title: ".NET Core",
            description: "Habilidades no desenvolvimento de APIs, utilizando o framework .NET Core e suas tecnologias, como Entity Framework, Identity, JWT, Swagger, e outros recursos do C#.",
            route: "/develop"
        },
        {
            title: "OracleSQL e PostgreSQL",
            description: "Conhecimento em criação de tabelas, relacionamentos, procedures, triggers, índices, e outros recursos do OracleSQL e PostgreSQL.",
            route: "/develop"
        },
    ];

    flutterSkills: LangInterface[] = [
        {
            name: "IDEs",
            options: [
                "VS Code",
                "Android Studio",
            ],
            
        },
        {
            name: "Widgets",
            options: [
                "Responsive Widgets",
                "Stateless Widgets",
                "Stateful Widgets",
                "Material Widgets",
            ],
        },
        {
            name: "Storage",
            options: [
                "Shared Preferences",
                "Firebase - Firestore/Storage/Authentication",
                "Hive",
            ],
        },
        {
            name: "State Management",
            options: [
                "Provider",
                "MobX",
                "GetX",
                "BLoC"
            ],
        },
        {
            name: "Design Principles",
            options: [
                "OOP",
                "Design patterns - Singleton/MVC/MVVM",
            ],
        },
        {
            name: "APIs",
            options: [
                "RESTful APIs",
                "GraphQL",
                "Web Sockets",
                "JSON Serialize/Deserialize",
            ],
        },
        {
            name: "Advanced Dart",
            options: [
                "Futures",
                "Streams",
                "Async/Await",
                "Lambdas",
            ],
        },
    ];

    angularSkills: LangInterface[] = [
        {
            name: "Angular CLI",
            options: [
                "ng build",
                "ng serve",
                "ng generate",
                "ng test",
            ],
        },
        {
            name: "Basics",
            options: [
                "Components",
                "Templates",
                "Modules",
                "Services",
            ],
        },
        {
            name: "Forms",
            options: [
                "Reactives Forms",
            ],
        },
        {
            name: "Rendering Topics",
            options: [
                "Built-in Directives",
                "Built-in Pipes",
                "Change Detection",
            ],
        },
        {
            name: "Routing",
            options: [
                "Router Outlets",
                "Router Links",
                "Route Events",
            ],
        },
        {
            name: "Templates",
            options: [
                "Interpolation",
                "Property Binding",
                "Template statements",
                "@Input and @Output",
                "Reference variables",
            ],
        },
        {
            name: "State Management",
            options: [
                "NGRX",
            ],
        },
        {
            name: "Creating a custom",
            options: [
                "Directives",
                "Pipe",
            ],
        },
        {
            name: "Services and Remote Data",
            options: [
                "Dependency Injection",
            ],
        },
    ];

    reactSkills: LangInterface[] = [
        {
            name: "CLIs Tools",
            options: [
                "Create React App",
                "Vite",
            ],
        },
        {
            name: "Components",
            options: [
                "Functional components",
                "JSX",
                "Props vs State",
                "Conditional rendering",
                "Composition",
            ],
        },
        {
            name: "Rendering",
            options: [
                "Component Life Cycle",
                "Lists and Keys",
                "Render props",
                "Refs",
                "Events",
            ],
        },
        {
            name: "State Management",
            options: [
                "Redux",
                "Context",
            ],
        },
        {
            name: "Router",
            options: [
                "React Router",
            ],
        },
        {
            name: "Hooks",
            options: [
                "useCallback",
                "useContext",
                "useState",
                "useEffect",
            ],
        },
        {
            name: "Styling",
            options: [
                "CSS Modules",
                "Tailwind",
                "Styled Components",
            ],
        },
        {
            name: "Rest",
            options: [
                "Axios",
                "Superagent",
            ],
        },
    ];
}

export default ConstantsValues;
