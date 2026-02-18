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

const youtube_ui = '/assets/youtubeui.png'
const grmstech = '/assets/grmstech.png'
const altgallery = '/assets/thumb_Taste.jpg'
const broke_brothers = '/assets/broke_brothers.png'
const oc = '/assets/oc.png'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  // {
  //   id: 'work',
  //   title: 'Work',
  // },
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
    title: 'React & TypeScript',
    sub: '(5+ years)',
    icon: web,
  },
  {
    title: 'Performance optimization',
    sub: '(LCP, FCP, bundle size)',
    icon: mobile,
  },
  {
    title: 'Real-time UI',
    sub: '(chat, live data, leaderboards)',
    icon: backend,
  },
  {
    title: 'UX Systems',
    sub: '(design systems, shared component)',
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
    title: 'Founding Frontend Engineer',
    company_name: 'GRMS Technologies',
    date: 'Mar 2025 - Present',
    points: [
      'Built a cross-platform React Native (Expo) app with real-time messaging, media uploads, and offline support.',
      'Designed scalable frontend architecture and CI/CD pipelines to support fast iteration and stable releases.',
      'Improved mobile performance by optimizing memory usage and frame rate across devices.',
      'Tech: TypeScript, React, React Native, Expo, FastAPI, PostgreSQL',
    ],
  },
  {
    title: 'Frontend Engineer II',
    company_name: 'Invincible GG',
    date: 'Feb 2024 - Feb 2025',
    points: [
      'Built and shipped React and Redux features for an e-commerce platform serving 15k+ users.',
      'Increased conversions by 18% through responsive and mobile-first UI improvements.',
      'Improved load performance by 40% using bundle splitting and lazy loading.',
      'Built real-time UI features including live leaderboards.',
      'Tech: React, Redux, TypeScript, Webpack, Matomo',
    ],
  },
  {
    title: 'Frontend Engineer (Product)',
    company_name: 'Finding Farmers',
    date: 'May 2022 - Jan 2023',
    points: [
      'Built map-based product features that increased user engagement by 25%.',
      'Migrated a large JavaScript codebase to TypeScript, reducing production bugs by 30%.',
      'Designed a reusable React component library adopted across multiple teams.',
      'Tech: React, TypeScript, React-Query, Google Maps API',
    ],
  },
  {
    title: 'Frontend Engineer',
    company_name: 'Kalo Technologies',
    date: 'Nov 2021 - May 2022',
    points: [
      'Improved React rendering performance, reducing FCP from 2.1s to 1.3%.',
      'Built and applied a shared design system to speed up UI development.',
      'Worked closely with designers to deliver clean, consistent interfaces.',
      'Tech: React, JavaScript, CSS, performance profiling',
    ],
  },
  {
    title: 'Freelance Engineer (Contract)',
    company_name: 'Self-Employed',
    date: 'Apr 2021 - Nov 2021',
    points: [
      'Built 15+ React apps, widgets, and plugins with custom animations and interactive UI.',
      'Worked directly with clients to turn requirements into usable, shipped interfaces.',
      'Reduced revision cycles through early prototypes and fast feedback.',
      'Tech: React, JavaScript, CSS animations',
    ],
  },
]

const projects = [
  {
    name: 'GRMS Technologies',
    description: 'Product showcase for an ai service through custom visuals and responsive layout.',
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
    image: grmstech,
    // source_code_link: 'https://github.com/MGahelrasoul/#',
    source_site_link: 'https://grmstechnologies.com',
  },
  {
    name: 'Broke Brothers LLC',
    description: 'Commissioned project enhancing site SEO, performance, and UI polish for an existing Squarespace site.',
    tags: [
      {
        name: 'seo',
        color: 'blue-text-gradient',
      },
      {
        name: 'optimization',
        color: 'green-text-gradient',
      },
      {
        name: 'design',
        color: 'pink-text-gradient',
      },
    ],
    image: broke_brothers,
    // source_code_link: 'https://github.com/MGahelrasoul/#',
    source_site_link: 'https://www.broke-brothers.com/',
  },
  {
    name: 'Youtube UI',
    description: 'Plugin to customize YouTube layout and appearance, primarly to revert BigMode.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: youtube_ui,
    source_code_link: 'https://github.com/MGahelrasoul/youtube-ui',
  },
  {
    name: 'OwnersClub Storefront',
    description: 'Membership portal featuring gated content, shopping utilities, and a responsive UI optimized for performance and usability',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'fastapi',
        color: 'green-text-gradient',
      },
      {
        name: 'sass',
        color: 'pink-text-gradient',
      },
    ],
    image: oc,
    // source_code_link: 'https://github.com/MGahelrasoul/#',
    source_site_link: 'https://ownersclub.invinciblegg.com/',
  },
  // {
  //   name: '3D AI Showcase',
  //   description: 'Interactive 3D experience combining WebGL and AI image generation (DALL·E) to explore creative model visualization.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'ai',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'tailwind',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: threejsp,
  //   source_code_link: 'https://github.com/MGahelrasoul/#',
  //   source_site_link: '',
  // },
  // {
  //   name: 'Twitch Plugin/Extension (planned)',
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
  //   image: twitch,
  //   source_code_link: 'https://github.com/MGahelrasoul/#',
  //   // source_site_link: '',
  // },
  // {
  //   name: 'Valorant Tracker / Leaderboard (planned)',
  //   description: 'Stats dashboard using official Valorant APIs to track player performance, match history, and progress over time.',
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
  //   image: valotracker,
  //   source_code_link: 'https://github.com/MGahelrasoul/#',
  //   // source_site_link: '',
  // },
  {
    name: 'Early Work',
    description: 'Earlier explorations in API integration, UI design, and AI tools.',
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
