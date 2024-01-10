import { MdWork, MdSchool } from "react-icons/md"
import { BiLogoAngular, BiLogoFlutter, BiLogoReact } from "react-icons/bi"
import { LangInterface } from "../interfaces/lang_interface";

class ConstantsValues {
    projectsList = [
        {
            name: "Software para atualização de embarcados",
            description: "Software desenvolvido em C++/QT/QML para atualização de firmware em sistemas embarcados"
        },
        {
            name: "Aplicativo mobile para rastreamento",
            description: "Aplicativo mobile desenvolvido em Flutter para rastreamento de dispositivos"
        },
        {
            name: "Plataforma web para gestão de comércio exterior",
            description: "Plataforma web desenvolvida em Flutter para gestão de operações de comércio exterior"
        },
        {
            name: "Plataforma web para gestão de custos",
            description: "Plataforma web desenvolvida em Flutter para gestão de custos"
        },
        {
            name: "Aplicativo mobile para gestão de estoque e logística",
            description: "Aplicativo mobile que está sendo desenvolvido em Flutter para gerenciamento de estoque e operações logísticas"
        },
        {
            name: "Aplicativo mobile para gerenciamento de estacionamento",
            description: "Aplicativo mobile que está sendo desenvolvido em Flutter para gerenciamento de estacionamento e visualização de vagas em tempo real"
        },
        {
            name: "Plataforma web para gerenciamento de questões de RH",
            description: "Plataforma web que está sendo desenvolvida em React.js para gestão de RH"
        },
    ];

    workHistory = [
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

    aboutList = [
        {
            title: "Sobre mim",
            description: "Meu nome é Igor e sou desenvolvedor Web e Mobile com habilidades sólidas em Flutter e React.js. Nesta breve apresentação, estarei compartilhando um pouco sobre minha experiência e conhecimento em ambas tecnologias.",
            route: "/career"
        },
        {
            title: "React.js",
            description: "Contenho aptidão em responsividade, consumo de API, layouts, Bootstrap, Tailwind e outros recursos do React, minha abordagem é focada na criação de interfaces interativas e funcionais.",
            route: "/react"
        },
        {
            title: "Flutter",
            description: "Minhas habilidades incluem gerenciamento de estado, consumo de APIs, tokens, layouts e outros recursos do Flutter, priorizo o desempenho suave e a responsividade em minhas aplicações.",
            route: "/flutter"
        },
    ];

    flutterSkills: LangInterface[] = [
        {
            name: "IDEs",
            options: [
                "VS Code",
                "Android Studio",
            ],
            icon: BiLogoFlutter
            
        },
        {
            name: "Widgets",
            options: [
                "Responsive Widgets",
                "Stateless Widgets",
                "Stateful Widgets",
                "Material Widgets",
            ],
            icon: BiLogoFlutter
        },
        {
            name: "Storage",
            options: [
                "Shared Preferences",
                "Firebase - Firestore/Storage/Authentication",
                "Hive",
            ],
            icon: BiLogoFlutter
        },
        {
            name: "State Management",
            options: [
                "Provider",
                "MobX",
                "GetX",
                "BLoC"
            ],
            icon: BiLogoFlutter
        },
        {
            name: "Design Principles",
            options: [
                "OOP",
                "Design patterns - Singleton/MVC/MVVM",
            ],
            icon: BiLogoFlutter
        },
        {
            name: "APIs",
            options: [
                "RESTful APIs",
                "GraphQL",
                "Web Sockets",
                "JSON Serialize/Deserialize",
            ],
            icon: BiLogoFlutter
        },
        {
            name: "Advanced Dart",
            options: [
                "Futures",
                "Streams",
                "Async/Await",
                "Lambdas",
            ],
            icon: BiLogoFlutter
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
            icon: BiLogoAngular
        },
        {
            name: "Basics",
            options: [
                "Components",
                "Templates",
                "Modules",
                "Services",
            ],
            icon: BiLogoAngular
        },
        {
            name: "Forms",
            options: [
                "Reactives Forms",
            ],
            icon: BiLogoAngular
        },
        {
            name: "Rendering Topics",
            options: [
                "Built-in Directives",
                "Built-in Pipes",
                "Change Detection",
            ],
            icon: BiLogoAngular
        },
        {
            name: "Routing",
            options: [
                "Router Outlets",
                "Router Links",
                "Route Events",
            ],
            icon: BiLogoAngular
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
            icon: BiLogoAngular
        },
        {
            name: "State Management",
            options: [
                "NGRX",
            ],
            icon: BiLogoAngular
        },
        {
            name: "Creating a custom",
            options: [
                "Directives",
                "Pipe",
            ],
            icon: BiLogoAngular
        },
        {
            name: "Services and Remote Data",
            options: [
                "Dependency Injection",
            ],
            icon: BiLogoAngular
        },
    ];

    reactSkills: LangInterface[] = [
        {
            name: "CLIs Tools",
            options: [
                "Create React App",
                "Vite",
            ],
            icon: BiLogoReact
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
            icon: BiLogoReact
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
            icon: BiLogoReact
        },
        {
            name: "State Management",
            options: [
                "Redux",
                "Context",
            ],
            icon: BiLogoReact
        },
        {
            name: "Router",
            options: [
                "React Router",
            ],
            icon: BiLogoReact
        },
        {
            name: "Hooks",
            options: [
                "useCallback",
                "useContext",
                "useState",
                "useEffect",
            ],
            icon: BiLogoReact
        },
        {
            name: "Styling",
            options: [
                "CSS Modules",
                "Tailwind",
                "Styled Components",
            ],
            icon: BiLogoReact
        },
        {
            name: "Rest",
            options: [
                "Axios",
                "Superagent",
            ],
            icon: BiLogoReact
        },
    ];
}

export default ConstantsValues;
