import { MdWork, MdSchool } from "react-icons/md"
import { ProjectsInterface } from "../interfaces/projects_interface";
import { CareerInterface } from "../interfaces/career_interface";
import { AboutInterface } from "../interfaces/about_interface";
import { TechInterface } from "../interfaces/tech_interface";
import { AcademicInterface } from "../interfaces/academic_interface";

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
            name: "ASP.NET Core",
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
            description: "Software desenvolvido em C++/QT/QML para atualização de firmware em sistemas embarcados.",
            link: '',
        },
        {
            name: "Aplicativo mobile para rastreamento",
            description: "Aplicativo mobile desenvolvido em Flutter para rastreamento de dispositivos.",
            link: '',
        },
        {
            name: "Api de aplicativo para rastreamento",
            description: "API de software de rastreamento desenvolvida em C#, usando o ASP.NET Core, para gerenciamento dos dados do aplicativo de rastreamento.",
            link: '',
        },
        {
            name: "Plataforma web para gestão de comércio exterior",
            description: "Plataforma web desenvolvida em Angular para gestão de operações de comércio exterior.",
            link: '',
        },
        {
            name: "Plataforma web para gestão de custos",
            description: "Plataforma web desenvolvida em React.js para gestão de custos.",
            link: '',
        },
        {
            name: "Aplicativo mobile para gestão de estoque e logística",
            description: "Aplicativo mobile desenvolvido em Flutter para gerenciamento de estoque e operações logísticas.",
            link: 'https://github.com/IgorMarcucci/storage_flow',
        },
        {
            name: "Aplicativo mobile para gerenciamento de estacionamento",
            description: "Aplicativo mobile desenvolvido em Flutter para gerenciamento de estacionamento e visualização de vagas em tempo real.",
            link: 'https://github.com/IgorMarcucci/ParkIn/tree/rebase',
        },
        {
            name: "Plataforma web para gerenciamento de questões de RH",
            description: "Plataforma web que está sendo desenvolvida em React.js para gestão de RH.",
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
            description: "API de software de comunicação desenvolvida em C#, usando o ASP.NET Core, para comunicar com software de comunicação e mensagens.",
            link: '',
        },
        {
            name: "Aplicativo de rádio",
            description: "Aplicativo mobile desenvolvido em Flutter para ouvir rádio online. Possuirá funcionalidades de reprodução, ver locutores, fazer contato com emissora e reprodução em segundo plano.",
            link: 'https://github.com/IgorMarcucci/radio_app',
        },
    ];

    academicHistory: AcademicInterface[] = [
        {
            companyName: "USP/ESALQ - Universidade de São Paulo",
            role: "MBA - Pós graduação",
            description: "MBA em Engenharia de Software",
            date: "Abril/2024 - Atualmente",
            icon: MdSchool,
        },
        {
            companyName: "Faculdade de Tecnologia de Ribeirão Preto - FATEC",
            role: "Faculdade",
            description: "Graduação em Análise e Desenvolvimento de Sistemas",
            date: "Janeiro/2021 - Dezembro/2023",
            icon: MdSchool,
        },
        {
            companyName: "E.E. Prof. Sebastião Fernandes Palma - PEI",
            role: "Ensino médio integral",
            date: "Janeiro/2018 - Dezembro/2020",
            icon: MdSchool,
        }
        
    ];

    workHistory: CareerInterface[] = [
        {
            companyName: "Agrosure",
            role: "Desenvolvedor",
            description: "Desenvolvimento de softwares Mobile e Web, uso dos frameworks Flutter, Angular, ASP.NET Core e uso da biblioteca React.js e suas tecnologias no dia a dia",
            date: "Agosto/2022 - Atualmente",
            icon: MdWork,
        },
        {
            companyName: "Agrosure",
            role: "Estágio de desenvolvimento",
            description: "Desenvolvimento de softwares voltados para sistemas embarcados em C/C++, utilizando também o QT Creator e suas tecnologias, além da elaboração e criação de designs e telas usando Figma",
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
            description: "Meu nome é Igor e tenho 21 anos, sou desenvolvedor de software e pós graduando em Engenharia de Software pela USP. Sou apaixonado por tecnologia e desenvolvimento de software, e estou sempre em busca de novos desafios e aprendizados.",
            route: "/academic"
        },
        {
            title: "Carreira",
            description: "Tenho experiência em desenvolvimento de software, com habilidades sólidas para entregar soluções de qualidade aos meus clientes.",
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
            title: "ASP.NET Core",
            description: "Habilidades no desenvolvimento de APIs, utilizando o framework ASP.NET Core e suas tecnologias, como Entity Framework, Identity, JWT, Swagger, e outros recursos do C#.",
            route: "/dotnet"
        },
        {
            title: "OracleSQL e PostgreSQL",
            description: "Conhecimento em criação e manipulação de tabelas, relacionamentos, procedures, triggers, índices, e outros recursos do OracleSQL e PostgreSQL.",
            route: "/databases"
        },
    ];
}

export default ConstantsValues;
