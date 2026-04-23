import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  csharp,
  python,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  supabase,
  jackpoole,
  erickcastro,
  bradon,
  git,
  scopic,
  oneforma,
  storecove,
  hku,
  tkt,
  selfDrivingCar,
  myPortfolio,
  bialetti,
  aionair,
  genius,
  threejs,
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
    id: "technologies",
    title: "Technologies",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React & NextJs Developer",
    icon: mobile,
  },
  {
    title: "Backend Expert Developer",
    icon: backend,
  },
  {
    title: "AI Chatbot Developer",
    icon: creator,
  },
];

const technologies = [
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
  {
    name: "TypeScript",
    icon: typescript,
  },
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "supabase",
    icon: supabase,
  },
  {
    name: "c#",
    icon: csharp,
  },
  {
    name: "python3",
    icon: python,
  },
];

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company_name: "EnliteAI / Remote",
    icon: scopic,
    iconBg: "#ffff",
    date: "November 2023 - March 2025",
    points: [
      "Developed and maintained backend services powering Al-driven SaaS applications with Python and RESTful APIs.",
      "Designed data ingestion pipelines and automation workflows supporting analytics and distributed processing.",
      "Refactored legacy modules into modular service-based architecture, improving maintainability and extensibility.",
      "Implemented caching strategies and background task processing to enhance scalability and system throughput.",
      "Integrated third-party APIs and webhook systems to enable real-time data synchronization.",
      "Supported cloud-based deployments with Docker and contributed to infrastructure improvements.",
      "Collaborated closely with product and frontend teams to deliver end-to-end features.",
    ],
  },
  {
    title: "Mid-Level Software Engineer",
    company_name: "Payt / Remote",
    icon: oneforma,
    iconBg: "#ffff",
    date: "December 2021 - October 2023",
    points: [
      "Designed and implemented backend services using Python (Flask/Django) for a multi-tenant SaaS platform.",
      "Built REST APIs and authentication logic for secure user management.",
      "improved database performance through indexing, query optimization, and transaction handling.",
      "Developed frontend components using React and improved integration between frontend and backend systems.",
      "Increased automated test coverage and contributed to stable release cycles.",
      "Supported production deployments and resolved customer-facing technical issues.",
    ],
  },
  {
    title: "Junior Full-Stack Developer",
    company_name: "HCLTech / Office",
    icon: storecove,
    iconBg: "#ffff",
    date: "September 2019 - November 2021",
    points: [
      "Developed full-stack web applications using JavaScript, PHP, and MySQL.",
      "Built internal dashboards and backend APIs for administrative workflows.",
      "Maintained legacy systems and contributed to feature enhancements.",
      "Assisted with deployment processes and server configuration.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Webdoctor.ie / Remote",
    icon: storecove,
    iconBg: "#ffff",
    date: "June 2019 - September 2019",
    points: [
      "Assisted in backend API development and booking system enhancements.",
      "Contributed to frontend improvements and bug fixes.",
      "Supported database operations and testing activities.",
    ],
  },
];

const educations = [
  {
    title: "Full Stack Web Development Co-op Course (Bachelor's degree in Computer Science)",
    company_name: "The Hong Kong University of Science and Technology (HKUST) - Clear Water Bay, Hong Kong",
    icon: hku,
    iconBg: "#ffff",
    date: "September 2013 - May 2019",
    points: [
      "Worked with various programming languages and frameworks, such as React, React Native, and Node.js.",
      "Participated in a rigorous co-op program with a focus on full-stack web development.",
      "Gained expertise in both frontend and backend technologies, including React, Node.js, and databases.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Thanks to our new Management System developed by Jason our sales and company have been skyrocketing, amazing work.",
    name: "Erick Castro",
    designation: "CEO",
    company: "Puerto Madero",
    image: erickcastro,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about his career and programming like Jason does.",
    name: "Jack Poole",
    designation: "Student",
    company: "Computer Science",
    image: jackpoole,
  },
  {
    testimonial:
      "After having worked with Jason, I realized he's a very determined person, who will always give his best and make an excellent job.",
    name: "Bradon McInnes",
    designation: "HR",
    company: "Home Depot Richmond",
    image: bradon,
  },
];

const projects = [
  {
    name: "Genius-AI",
    description:
      "The GeniusAI likely showcases AI-powered solutions or services, featuring a frontend built with frameworks like React or Next.js for an interactive user experience. It could leverage machine learning models on the backend, using Node.js, to provide personalized insights, automation, or predictive analytics for users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "text-white-600",
      },
      {
        name: "node.js",
        color: "text-yellow-600",
      },
      {
        name: "redux",
        color: "text-green-600",
      },
      {
        name: "zustand",
        color: "text-purple-600",
      },
      {
        name: "tensorFlow.js",
        color: "text-white-600",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "text-blue-600",
      },
    ],
    image: genius,
    source_code_link: "https://github.com/jasonching95/genius-ai",
  },
  {
    name: "Aionair",
    description:
      "The Aionair likely tracks and displays real-time air quality data using a responsive frontend built with React or Next.js, while its backend integrates with sensors or APIs to fetch and store air quality information in a database like MongoDB. It provides users with a clean interface to monitor and analyze air quality trends.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "text-white-600",
      },
      {
        name: "convex",
        color: "text-blue-600",
      },
      {
        name: "clerk",
        color: "text-green-600",
      },
      {
        name: "openAI",
        color: "text-grey-600",
      },
      {
        name: "ShadCN",
        color: "text-purple-600",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "text-yellow-600",
      },
    ],
    image: aionair,
    live_version_link: "https://aionair.vercel.app/",
    source_code_link: "https://github.com/jasonching95/Aionair",
  },
  {
    name: "Self Driving Car",
    description:
      "Exciting Python-based implementation of a self-driving car simulation leveraging the power of Deep Q Learning (DQN) neural networks. Imagine a virtual world where our intelligent car not only roams autonomously but learns from its experiences to become an adept driver!",
    tags: [
      {
        name: "python3",
        color: "text-green-500",
      },
      {
        name: "pytorch",
        color: "text-orange-500",
      },
      {
        name: "deeplearning",
        color: "text-blue-600",
      },
      {
        name: "tcl-tk",
        color: "text-yellow-500",
      },
      {
        name: "reinforcement-learning",
        color: "text-blue-600",
      },
    ],
    image: selfDrivingCar,
    source_code_link: "https://github.com/jasonching95/SelfDrivingCar",
  },
  {
    name: "My Portfolio",
    description:
      "Interactive portfolio with React, Three.js, and Framer Motion for a dynamic user experience. Explore my work with smooth animations and 3D elements. Powered by Vite and Tailwind CSS for fast, stylish development. Make it yours and deploy effortlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "text-green-600",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "text-blue-500",
      },
      {
        name: "framermotion",
        color: "text-purple-500",
      },
      {
        name: "threejs",
        color: "text-yellow-500",
      },
      {
        name: "postgress",
        color: "text-green-600",
      },
      {
        name: "mysql",
        color: "text-purple-600",
      },
      {
        name: "toastifyjs",
        color: "text-blue-600",
      },
    ],
    image: myPortfolio,
    source_code_link: "https://github.com/jasonching95/Portfolio",
  },
  {
    name: "Bialetti Coffee Shop",
    description:
      "JavaScript, HTML5, CSS3, and Bootstrap 5 power this site, enhancing the franchise's visibility. Key features include a commercial showcase, external stock management, and a robust delivery system. Actively developed, we welcome collaboration for a successful Bolivia launch.",
    tags: [
      {
        name: "html",
        color: "text-blue-500",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap5",
        color: "text-purple-500",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
    ],
    image: bialetti,
    source_code_link: "https://github.com/jasonching95/BialettiBolivia",
  },
];

export { services, technologies, experiences, educations, testimonials, projects };
