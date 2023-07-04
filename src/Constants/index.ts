import { MdWork, MdSchool } from "react-icons/md"

class ConstantsValues {
    static projectsList = [
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

    static workHistory = [
        {
            companyName: "Agrosure",
            role: "Desenvolvedor júnior",
            description: "Desenvolvimento de softwares Mobile e Web, uso do framework Flutter, do React.js e de suas tecnologias no dia a dia",
            date: "Agosto/2022 - Atualmente",
            icon: MdWork,
        },
        {
            companyName: "Agrosure",
            role: "Estágio de desenvolvimento C/C++",
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

    static aboutList = [
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

    static flutterSkills = [
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

    static reactSkills = [
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
