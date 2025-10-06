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
const hoobk = '/assets/hoobk.png'
const threejsp = '/assets/threejsp.png'
const yelpcamp = '/assets/thumb_YelpCamp.jpg'
const weather = '/assets/thumb_WeatherApp.jpg'
const mapsapi = '/assets/thumb_MapsApi.jpg'
const gallery = '/assets/thumb_Gallery.jpg'
const altgallery = '/assets/thumb_Taste.jpg'
const blog = '/assets/thumb_TechBlog.jpg'
const tetris = '/assets/thumb_Tetris.jpg'

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
    title: 'Founder / Front End Engineer',
    company_name: 'Self-Employed',
    iconBg: '#1c1c1c',
    date: 'Mar 2025 - Present',
    points: [
      'Built a React Native (Expo) mobile app backed by FastAPI and Postgres, featuring real-time chat, media uploads, and offline caching.',
      'Designed and maintained CI/CD pipelines with error tracking and release analytics to monitor client stability and adoption.',
      'Focused on scalable UI patterns and resilient front-end architecture to support rapid iteration and feature delivery.',
      'Wireframed, documented, and designed systems on the frontend and backend, prioritizing user experience.',
    ],
  },
  {
    title: 'Front End Software Engineer',
    company_name: 'Invincible GG',
    iconBg: '#1c1c1c',
    date: 'Feb 2024 - Feb 2025',
    points: [
      'Shipped high-performance React/Redux features for an e-commerce platform serving 15k+ users.',
      'Boosted conversion rates 18% through responsive design overhaul and mobile-first implementation.',
      'Reduced content update latency by 50% via custom CMS dashboard implementation.',
      'Drove a 40% improvement in load performance through bundle optimization and lazy loading.',
      'Integrated event telemetry (Matomo) to guide retention-focused product decisions.',
    ],
  },
  {
    title: 'Manager',
    company_name: 'Kumon Institute Education',
    iconBg: '#DCCEC5',
    date: 'Jan 2023 - Feb 2024',
    points: [
      'Led a team of 11 instructors while maintaining technical skills through independent React projects.',
      'Analyzed learning process to identify areas for improvement, resulting in a 10% increase in assessment scores.',
      'Introduced online learning through a mobile app, reducing planning and grading time by 6+ hours per week.',
    ],
  },
  {
    title: 'Front End Engineer',
    company_name: 'Finding Farmers',
    iconBg: '#1c1c1c',
    date: 'May 2022 - Jan 2023',
    points: [
      'Increased user engagement 25% by integrating Google Maps API with React-Query for data caching.',
      'Migrated legacy JavaScript codebase to TypeScript, reducing production bugs by 30%.',
      'Designed reusable React components library adopted across 3 product teams.',
    ],
  },
  {
    title: 'Front End Developer',
    company_name: 'Kalo Technologies',
    iconBg: '#DCCEC5',
    date: 'Nov 2021 - May 2022',
    points: [
      'Optimized React component performance, reducing average FCP from 2.1s to 1.3s through memoization.',
      'Implemented atomic design system increasing UI development speed by 25%.',
      'Coordinated with design teams to ensure clean and functional website aesthetics, tailored to stakeholder needs.',
    ],
  },
  {
    title: 'Freelance Developer',
    company_name: 'Self-Employed',
    iconBg: '#1c1c1c',
    date: 'Apr 2021 - Nov 2021',
    points: [
      'Delivered 15+ React web apps, widgets, and plugins with custom CSS animations and interactive overlays.',
      'Partnered with clients to translate business goals into technical specs, delivering user-centric interfaces that reduced client revision cycles by 40% through iterative feedback workshops.',
    ],
  },
  {
    title: 'Systems & Operations',
    company_name: 'GEICO',
    iconBg: '#1c1c1c',
    date: 'Feb 2019 - Apr 2021',
    points: [
      'Improved internal CMS processes used by 60k+ agents, reducing average call resolution by 2 minutes; achieved 93% first-contact resolution for technical incidents.',
      'Led imaging/configuration for 6k+ machines to migrate to Windows 10, reducing known security vulnerabilities.',
    ],
  },
]

const projects = [
  {
    name: 'Banking Dashboard',
    description: 'A finance management dashboard that allows users to connect bank accounts, display transactions, and transfers funds.',
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
    name: 'Threejs Project',
    description: 'Interactive project showcasing the capabilities of Three.js in 3D modeling.',
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
    image: threejsp,
    source_code_link: 'https://github.com/MGahelrasoul/threejs-project',
    source_site_link: 'https://threejs-project.tech/',
  },
  {
    name: 'Metaverse Madness',
    description: 'Comprehensive product site exploring the metaverse with a curated selection of products.',
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
    source_site_link: 'https://metaverse-madness.tech',
  },
  {
    name: 'Bank App',
    description: 'Landing page for a modern banking app showcasing clean components and beautiful graphics based on Figma design.',
    tags: [
      {
        name: 'react',
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
    image: hoobk,
    source_code_link: 'https://github.com/MGahelrasoul/Bank-App',
    source_site_link: 'https://hoobk.tech',
  },
  {
    name: 'Yelp Camp',
    description: 'Yelp-clone for searching, viewing, and creating campgrounds/comments. Requires login for use.',
    tags: [
      {
        name: 'bootstrap',
        color: 'blue-text-gradient',
      },
      {
        name: 'node',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'restapi',
        color: 'pink-text-gradient',
      },
    ],
    image: yelpcamp,
    source_code_link: 'https://github.com/MGahelrasoul/YelpCamp',
    // source_site_link:
    //   'http://ec2-18-117-72-225.us-east-2.compute.amazonaws.com/YelpCamp',
  },
  {
    name: 'Weather App',
    description: 'React-based Weather App using GeoDB Cities and OpenWeather APIs for real-time weather information.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'api',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: weather,
    source_code_link: 'https://github.com/MGahelrasoul/Weather-App',
  },
  {
    name: 'Maps API',
    description: 'GCP project utilizing Maps APIs for powerful location-based services.',
    tags: [
      {
        name: 'materialui',
        color: 'blue-text-gradient',
      },
      {
        name: 'node',
        color: 'green-text-gradient',
      },
      {
        name: 'gcp',
        color: 'pink-text-gradient',
      },
    ],
    image: mapsapi,
    source_code_link: 'https://github.com/MGahelrasoul/Maps-API',
  },
  {
    name: 'Tetris',
    description: 'Playable Tetris game with customizable options for a nostalgic gaming experience.',
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
        name: 'aws',
        color: 'pink-text-gradient',
      },
    ],
    image: tetris,
    source_code_link: 'https://github.com/MGahelrasoul/Tetris',
    // source_site_link:
    //   'http://ec2-18-117-72-225.us-east-2.compute.amazonaws.com/Tetris',
  },
  {
    name: 'Blog',
    description: 'A versatile CRUD app for effortless blog content management.',
    tags: [
      {
        name: 'bootstrap',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'node',
        color: 'green-text-gradient',
      },
    ],
    image: blog,
    source_code_link: 'https://github.com/MGahelrasoul/Blog',
  },
  {
    name: 'Gallery',
    description: 'A specialized image gallery designed for showcasing high-quality images.',
    tags: [
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'ejs',
        color: 'orange-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: gallery,
    source_code_link: 'https://github.com/MGahelrasoul/Image-Gallery',
  },
  {
    name: 'Alt Gallery',
    description: 'A gallery page with a sleek sidebar and masonry grid layout for easy image navigation.',
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
    source_code_link: 'https://github.com/MGahelrasoul/Alternate-Gallery',
  },
]

export { services, technologies, experiences, projects }
