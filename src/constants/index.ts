const backend = '/assets/backend.png'
const creator = '/assets/creator.png'
const mobile = '/assets/mobile.png'
const web = '/assets/web.png'

const css = '/assets/tech/css.png'
const docker = '/assets/tech/docker.png'
const figma = '/assets/tech/figma.png'
const git = '/assets/tech/git.png'
const html = '/assets/tech/html.png'
const javascript = '/assets/tech/javascript.png'
const mongodb = '/assets/tech/mongodb.png'
const nodejs = '/assets/tech/nodejs.png'
const reactjs = '/assets/tech/reactjs.png'
const redux = '/assets/tech/redux.png'
const tailwind = '/assets/tech/tailwind.png'
const typescript = '/assets/tech/typescript.png'

const bk_dashboard = '/assets/bk_dashboard.png'
const metaverse = '/assets/metaverse.png'
const threejsp = '/assets/threejsp.png'
const altgallery = '/assets/thumb_Taste.jpg'
const broke_brothers = '/assets/broke_brothers.png'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Software Engineer',
    icon: web,
  },
  {
    title: 'React JS FrontEnd',
    icon: mobile,
  },
  {
    title: 'Node JS BackEnd',
    icon: backend,
  },
  {
    title: 'UX/UI Development',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Founder / Frontend Engineer',
    company_name: 'Self-Employed',
    date: 'Mar 2025 - Present',
    points: [
      'Built a React Native (Expo) mobile app backed by FastAPI and Postgres, featuring real-time chat, media uploads, and offline caching.',
      'Designed and maintained CI/CD pipelines with error tracking and release analytics to monitor client stability and adoption.',
      'Focused on scalable UI patterns and resilient front-end architecture to support rapid iteration and feature delivery.',
      'Wireframed, documented, and designed systems on the frontend and backend, prioritizing user experience.',
    ],
  },
  {
    title: 'Frontend Software Engineer',
    company_name: 'Invincible GG',
    date: 'Feb 2024 - Feb 2025',
    points: [
      'Shipped high-performance React/Redux features for an e-commerce platform serving 15k+ users.',
      'Boosted conversion rates 18% through responsive design overhaul and mobile-first implementation.',
      'Reduced content update latency by 50% via custom CMS dashboard implementation.',
      'Drove a 40% improvement in load performance through bundle optimization and lazy loading.',
      'Integrated event telemetry (Matomo) to guide retention-focused product decisions.',
    ],
  },
  // {
  //   title: 'Manager',
  //   company_name: 'Kumon Institute Education',
  //   date: 'Jan 2023 - Feb 2024',
  //   points: [
  //     'Led a team of 11 instructors while maintaining technical skills through independent React projects.',
  //     'Analyzed learning process to identify areas for improvement, resulting in a 10% increase in assessment scores.',
  //     'Introduced online learning through a mobile app, reducing planning and grading time by 6+ hours per week.',
  //   ],
  // },
  {
    title: 'Frontend Engineer',
    company_name: 'Finding Farmers',
    date: 'May 2022 - Jan 2023',
    points: [
      'Increased user engagement 25% by integrating Google Maps API with React-Query for data caching.',
      'Migrated legacy JavaScript codebase to TypeScript, reducing production bugs by 30%.',
      'Designed reusable React components library adopted across 3 product teams.',
    ],
  },
  {
    title: 'Software Engineer, Frontend',
    company_name: 'Kalo Technologies',
    date: 'Nov 2021 - May 2022',
    points: [
      'Optimized React component performance, reducing average FCP from 2.1s to 1.3s through memoization.',
      'Implemented atomic design system increasing UI development speed by 25%.',
      'Coordinated with design teams to ensure clean and functional website aesthetics, tailored to stakeholder needs.',
    ],
  },
  {
    title: 'Freelance Frontend Developer',
    company_name: 'Self-Employed',
    date: 'Apr 2021 - Nov 2021',
    points: [
      'Delivered 15+ React web apps, widgets, and plugins with custom CSS animations and interactive overlays.',
      'Partnered with clients to translate business goals into technical specs, delivering user-centric interfaces that reduced client revision cycles by 40% through iterative feedback workshops.',
    ],
  },
  // {
  //   title: 'Systems & Operations',
  //   company_name: 'GEICO',
  //   date: 'Feb 2019 - Apr 2021',
  //   points: [
  //     'Improved internal CMS processes used by 60k+ agents, reducing average call resolution by 2 minutes; achieved 93% first-contact resolution for technical incidents.',
  //     'Led imaging/configuration for 6k+ machines to migrate to Windows 10, reducing known security vulnerabilities.',
  //   ],
  // },
]

const projects = [
  {
    name: 'Broke Brothers Website',
    description: 'Commissioned project enhancing site SEO, performance, and UI polish for an existing Squarespace site.',
    tags: [
      {
        name: 'seo',
        color: 'blue-text-gradient',
      },
      {
        name: 'performance',
        color: 'green-text-gradient',
      },
      {
        name: 'frontend',
        color: 'pink-text-gradient',
      },
    ],
    image: broke_brothers,
    source_site_link: 'https://www.broke-brothers.com/',
  },
  {
    name: '3D AI Showcase',
    description: 'Interactive 3D experience combining WebGL and AI image generation (DALL·E) to explore creative model visualization.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'ai',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: threejsp,
    source_code_link: 'https://github.com/MGahelrasoul/threejs-project',
    source_site_link: 'https://threejs-project.space/',
  },
  {
    name: 'Banking Dashboard',
    description: 'Finance dashboard built with Next.js and TypeScript, featuring account connections, transaction history, and transfers.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: bk_dashboard,
    source_code_link: 'https://github.com/MGahelrasoul/Banking-Dashboard',
  },
  {
    name: 'Metaverse Madness',
    description: 'Product showcase exploring virtual worlds through curated 3D visuals and responsive layout.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'node',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: metaverse,
    source_code_link: 'https://github.com/MGahelrasoul/Metaversus',
    // source_site_link: 'https://metaverse-madness.tech',
  },
  // {
  //   name: 'Twitch Clone (planned)',
  //   description: 'Live streaming platform interface with embedded video player, real-time chat, and dynamic user interactions.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'typescript',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'tailwind',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: hoobk,
  //   source_code_link: 'https://github.com/MGahelrasoul/Bank-App',
  //   // source_site_link: '',
  // },
  // {
  //   name: 'Valorant Tracker / Leaderboard (planned)',
  //   description: 'Stats dashboard using official Valorant APIs to track player performance, match history, and progress over time.',
  //   tags: [
  //     {
  //       name: 'bootstrap',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'node',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'mongodb',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'restapi',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: yelpcamp,
  //   source_code_link: 'https://github.com/MGahelrasoul/YelpCamp',
  //   // source_site_link: '',
  // },
  {
    name: 'Early Work',
    description: 'Earlier explorations in API integration and UI design.',
    tags: [
      {
        name: 'bootstrap',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'html',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: altgallery,
    source_code_link: 'https://github.com/MGahelrasoul?tab=repositories',
  },
]

export { services, technologies, experiences, projects }
