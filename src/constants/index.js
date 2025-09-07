import {
  backend,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  mongodb,
  git,
  docker,
  stpeterlib,
  stpeterapp,
  ecommapi,
  twitter,
  instaTech,
  django,
  aws,
  python,
  sql,
  khabeer,
  github,
  linkedin,
  email,
  finconsulting,
  myfatoorah,
  smartserve,
  elmohandes,
  express,
  acies_co,
  emtethal,
  _77s,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "express.js",
    icon: express,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "FullStack Engineer",
    company_name: "instaTech Team (Freelance)",
    icon: instaTech,
    iconBg: "#E6DEDD",
    date: "SEP 2022 - Present",
    points: [
      "Leading a team of 6 developers in Embedded Systems teams and Fullstack.",
      "Doing Marketing Campaigns for our company and Schedule Planning.",
      "Utilized various technologies: Django, React, Next.js, Express.js, Flutter, MongoDB, and SQL.",
      "Took on DevOps responsibilities ensuring stable and scalable deployment.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Programming Instructor",
    company_name: "El-Mohandes Academy",
    icon: elmohandes,
    iconBg: "#fff",
    date: "SEP 2024 - Present",
    points: [
      "Mentored and taught groups various languages and skills such as: Python, HTMl, CSS, Django.",
      "Developed customized course materials, including assignments, and projects, tailored to meet the needs of diverse learners.",
      "Mentored students, addressing individual challenges and fostering a collaborative learning environment.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "SmartServe AI",
    icon: smartserve,
    iconBg: "#FFF",
    date: "JAN 2024 - AUG 2024",
    points: [
      "Developed API endpoints for AI Real-time Speech-To-Text transcriptions using Websockets.",
      "Connected the Asterisk server that receives calls to the APIs.",
      "Built and maintained a lightweight backend system for the project.",
    ],
  },
  {
    title: "Fullstack Engineer",
    company_name: "Arabic Platform for Technology (Emtethal)",
    icon: emtethal,
    iconBg: "#FFF",
    date: "FEB 2025 - Present",
    points: [
      "Contributed to backend development using Django, ensuring a well-structured and maintainable codebase.",
      "Participated in code reviews to uphold code quality and consistency across the team.",
      "Wrote unit tests for backend functionality to ensure reliability and catch regressions early.",
      "Handled backend deployment and server configuration.",
      "Built and maintained Frontend features using React, including dynamic components, form handling, API integration, and state management with hooks and context.",
      "Used React Query for efficient data fetching and caching, and styled components with Tailwind CSS to create responsive, consistent user interfaces.",
    ]
  }
].reverse();

const projects = [
  {
    name: "77s Design Frontend",
    description:
      "A site similar to UpWork but for graphic designers! I was handed a Figma design and it was my responsibility to make it into a react app and make it responsive as well. The backend was made by Django and I had to make minor enhancements and adjustment to adapt to the frontend UI.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "django", color: "green-text-gradient" },
      { name: "React-Query", color: "pink-text-gradient" },
      { name: "Docker", color: "blue-text-gradient" },
      { name: "Figma", color: "green-text-gradient" },
      { name: "Responsive_Design", color: "pink-text-gradient" },
    ],
    image: _77s,
  },
  {
    name: "ACIES-Co",
    description:
      "ACIES-Co accounting company has a dashbaord in which they wanted to add multiple visualization charts and pages to enhance their dashboard UI.",
    tags: [
      { name: "ReactJS", color: "green-text-gradient" },
      { name: "chartJS", color: "blue-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
      { name: "react-query", color: "green-text-gradient" },
      { name: "axios", color: "blue-text-gradient" },
    ],
    image: acies_co,
  },
  {
    name: "Arabanah Payment Gaetway Integration",
    description:
      "The project was based on Saleor using Django and GraphQL. I extended the project to integrate MyFatoorah payment gateway. Then, I enabled Webhooks to track and change payment status.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "saleor",
        color: "blue-text-gradient",
      },
      {
        name: "GraphQL",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "webhooks",
        color: "blue-text-gradient",
      },
      {
        name: "payment",
        color: "pink-text-gradient",
      },
      {
        name: "myFatoorah",
        color: "green-text-gradient",
      },
    ],
    image: myfatoorah,
  },
  {
    name: "Mr. Finconsulting Dashboard",
    description:
      "A dashaboard made for a German accounting company. The dashboard includes chats, user management, and admin control. For this project I worked with the backend developer to implement the figma design made by the UI/UX.",
    tags: [
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "blue-text-gradient",
      },
      {
        name: "react-query",
        color: "pink-text-gradient",
      },
    ],
    image: finconsulting,
  },
  {
    name: "Khabeer Dashboard",
    description:
      "A dashaboard where you can manage your gold workshop. This project is for a company named Khabeer, the design was copied from a Figma design. You can click on the figma Icon to see the website styling.",
    tags: [
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
    ],
    image: khabeer,
  },
  {
    name: "St. Peter Library",
    description:
      "Web App to search for the books on a local church library, read posts by other people and create your account to track the books you borrow. Integrated with Rest APIs for seamless experience with the mobile app.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "DRF",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: stpeterlib,
    source_code_link: "https://github.com/Abdelmasieh01/library",
  },
  {
    name: "St. Peter Library App",
    description:
      "Mobile app created using Flutter to integrate with the Library website and APIs.",
    tags: [
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "rest_api",
        color: "blue-text-gradient",
      },
    ],
    image: stpeterapp,
    live_link: "https://stpeterlibrary.flutterflow.app/",
  },
  {
    name: "E-commerce API with payment gateway",
    description:
      "E-commerce API with payment using Paymob's service. You can buy with mobile wallets and also with payment cards.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "DRF",
        color: "blue-text-gradient",
      },
      {
        name: "paymob",
        color: "pink-text-gradient",
      },
    ],
    image: ecommapi,
    source_code_link: "https://github.com/Abdelmasieh01/ecommerce",
  },
  {
    name: "Twitter Clone",
    description:
      "A Twitter clone made with django, html, css. It has real-time connections using websockets to display real-time tweet like count. Collabrated with a frontend developer on this project.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "websocket",
        color: "blue-text-gradient",
      },
      {
        name: "channels",
        color: "pink-text-gradient",
      },
      {
        name: "async",
        color: "green-text-gradient",
      },
    ],
    image: twitter,
    source_code_link: "https://github.com/Abdelmasieh01/TerTer",
  },
];

const contacts = [
  {
    type: "email",
    icon: email,
    content: "abdelmasieh84@gmail.com",
  },
  {
    type: "linkedin",
    icon: linkedin,
    content: "https://www.linkedin.com/in/abdelmasieh-baselious/",
  },
  {
    type: "github",
    icon: github,
    content: "https://github.com/abdelmasieh01",
  },
];

export {
  services,
  technologies,
  experiences,
  projects,
  contacts,
};
