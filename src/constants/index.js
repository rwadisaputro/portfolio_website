export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
export const myProjects = [
  {
    title: 'Project 153 - Generalized algorithmic trading framework for any financial asset',
    desc: 'Inspired by the lessons learned from my early trading days using technical analysis, Project 153 aims to generate price regime- and asset-agnostic standardized features that are interpretably consistent.',
    subdesc:
      'The aforementioned features guarantee reproducibility, which can be leveraged to formulate a systematic rule-based trade action decision-making process.',
    href: 'Placeholder',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project_153_logo.png',
    logoStyle: {
      backgroundColor: '#EEE2CC',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'Scipy',
        path: 'assets/scipy.png',
      },
      {
        id: 3,
        name: 'Sklearn',
        path: '/assets/sklearn.png',
      },
      // {
      //   id: 4,
      //   name: 'Framer Motion',
      //   path: '/assets/framer.png',
      // },
    ],
  },
  {
    title: 'Project Recountal - Augmenting fundemantal analysis for valuation purposes',
    desc: '<>',
    subdesc:
      '<>',
    href: 'Placeholder',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project_recountal_logo.png',
    logoStyle: {
      backgroundColor: '#556A95',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'R',
        path: 'assets/r.png',
      },
      {
        id: 3,
        name: 'Optuna',
        path: '/assets/optuna.png',
      },
      {
        id: 4,
        name: 'Linearmodels',
        path: '/assets/linearmodels.png',
      },
    ],
  },
  {
    title: 'Project Sentry - Quantifying and forecasting world tension level in near real-time',
    desc: '<>',
    subdesc:
      '<>',
    href: 'Placeholder',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project_sentry_logo.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'LightGBM',
        path: 'assets/lightgbm.png',
      },
      {
        id: 3,
        name: 'Optuna',
        path: '/assets/optuna.png',
      },
      {
        id: 4,
        name: 'SHAP',
        path: '/assets/shap.png',
      },
      {
        id: 5,
        name: 'Metaflow',
        path: '/assets/metaflow.png',
      },
    ],
  },
  // {
  //   title: 'Project Dossier - <>',
  //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
  //   subdesc:
  //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
  //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
  //   texture: '/textures/project/project4.mp4',
  //   logo: '/assets/project-logo4.png',
  //   logoStyle: {
  //     backgroundColor: '#0E1F38',
  //     border: '0.2px solid #0E2D58',
  //     boxShadow: '0px 0px 60px 0px #2F67B64D',
  //   },
  //   spotlight: '/assets/spotlight4.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'Python',
  //       path: '/assets/python.png',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  {
    title: 'Project Dossier - <>',
    desc: '<>',
    subdesc:
      '<>',
    href: 'Placeholder',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project_dossier_logo.png',
    logoStyle: {
      backgroundColor: '#CFC6D7',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'PyTorch',
        path: 'assets/pytorch.png',
      },
      {
        id: 3,
        name: 'Top2Vec',
        path: '/assets/top2vec.png',
      },
      // {
      //   id: 4,
      //   name: 'Framer Motion',
      //   path: '/assets/framer.png',
      // },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    infinityPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

// export const workExperiences = [
//   {
//     id: 1,
//     name: 'Framer',
//     pos: 'Lead Web Developer',
//     duration: '2022 - Present',
//     title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
//     icon: '/assets/framer.svg',
//     animation: 'victory',
//   },
//   {
//     id: 2,
//     name: 'Figma',
//     pos: 'Web Developer',
//     duration: '2020 - 2022',
//     title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
//     icon: '/assets/figma.svg',
//     animation: 'clapping',
//   },
//   {
//     id: 3,
//     name: 'Notion',
//     pos: 'Junior Web Developer',
//     duration: '2019 - 2020',
//     title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
//     icon: '/assets/notion.svg',
//     animation: 'salute',
//   },
// ];