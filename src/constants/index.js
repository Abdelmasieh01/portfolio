import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // khabeer,
  stpeterlib,
  stpeterapp,
  ecommapi,
  twitter,
  threejs,
  instaTech,
  django,
  aws,
  rest,
  python,
  sql,
  avatar,
  khabeer,
  github,
  linkedin,
  email,
  finconsulting,
  myfatoorah,
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
  {
    title: "Flutter Developer",
    icon: mobile,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    company_name: "instaTech",
    icon: instaTech,
    iconBg: "#E6DEDD",
    date: "SEP 2022 - Present",
    points: [
      "Leading a team of 6 developers in Embedded Systems teams and Fullstack.",
      "Doing Marketing Campaigns for our company and Schedule Planning.",
      "Deploying Fullstack applications.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer (Contract Based)",
    company_name: "SmartServe AI",
    icon: avatar,
    iconBg: "#383E56",
    date: "MAR 2024 - MAY 2024",
    points: [
      "Developed API endpoints for AI Real-time Speech-To-Text transcriptions using Websockets.",
      "Connected the Asterisk server that receives calls to the APIs.",
      "Deployed, maintained, and enhanced the API.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
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
    // source_code_link: "https://github.com/Abdelmasieh01/khabeer",
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
    // source_code_link: "https://github.com/Abdelmasieh01/khabeer",
    live_link: "https://khabeer-omega.vercel.app/",
    figma_link:
      "https://www.figma.com/proto/mvUpttmqNfVMD8cBcmFBjE/Khabeer-Web?page-id=313%3A2786&type=design&node-id=313-2989&viewport=1421%2C3298%2C0.35&t=ZCU6o3BucmdToFEs-1&scaling=contain&starting-point-node-id=313%3A2787&mode=design",
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
  testimonials,
  projects,
  contacts,
};
