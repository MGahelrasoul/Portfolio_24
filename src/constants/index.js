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
  metaverse,
  hoobk,
  threejsp,
  yelpcamp,
  mapsapi,
  gallery,
  altgallery,
  weather,
  blog,
  tetris,
  threejs,
} from '../assets'

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
    name: 'Three JS',
    icon: threejs,
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
    title: 'Front End Software Engineer',
    company_name: 'Invincible GG',
    iconBg: '#1c1c1c',
    date: 'Feb 2024 - Current',
    points: [
      'Developed and managed an e-commerce web app using React and Redux for over 15,000 users, enhancingperformance and user engagement across various devices and browsers.',
      'Implemented dozens of new features and design enhancements, improving site responsiveness and UX.',
      'Created an admin dashboard, including CMS tools that enabled designers to apply promotions, news articles, and other content directly to the storefront and reduce update time by 50%.',
      'Integrated advanced user activity tracking via Matomo, boosting user retention through data-driven insights.',
      'Built and maintained RESTful APIs and automation scripts with Node and Express, enhancing backend efficiency.',
      'Optimized performance, leading to improvement in page load times and overall application efficiency.',
    ],
  },
  {
    title: 'Manager',
    company_name: 'Kumon Institute Education',
    iconBg: '#DCCEC5',
    date: 'Jan 2023 - Feb 2024',
    points: [
      'Led a team of 11 instructors to deliver personalized educational services efficiently.',
      'Analyzed learning process to identify areas for improvement, resulting in a 10% increase in assessment scores.',
      'Maintained a student information database, enabling data-driven lessons, and assessments.',
      'Introduced online learning through a mobile app, reducing planning and grading time by several hours per week.',
    ],
  },
  {
    title: 'Full Stack Software Engineer',
    company_name: 'Finding Farmers',
    iconBg: '#1c1c1c',
    date: 'May 2022 - Jan 2023',
    points: [
      'Designed, developed, and implemented responsive web applications using React and modern frameworks.',
      'Utilized React for templating, accelerating development through reusable components.',
      "Integrated Google Cloud's Geocoding and Maps JavaScript APIs, enhancing user interaction and increasing website traffic by 25%.",
      'Provided clear directives in Software Requirements Specifications (SRS), improving team workflow.',
      'Executed SQL queries to analyze data and formulate solutions to drive user activity.',
    ],
  },
  {
    title: 'Junior Full Stack Software Engineer',
    company_name: 'Kalo Technologies',
    iconBg: '#DCCEC5',
    date: 'Nov 2021 - May 2022',
    points: [
      'Collaborated with stakeholders to create static, dynamic, and e-commerce web applications using HTML, CSS, JavaScript, and various frontend frameworks.',
      'Developed innovative solutions tailored to stakeholder needs, resulting in a 12% surge in user engagement.',
      'Optimized client-side performance, reducing response times by roughly 1 second and decreasing server load.',
      'Coordinated with design teams to ensure clean and functional website aesthetics.',
    ],
  },
  {
    title: 'Front End Software Engineer',
    company_name: 'Freelance',
    iconBg: '#1c1c1c',
    date: 'Apr 2021 - Nov 2021',
    points: [
      'Managed and executed frontend projects using HTML, CSS, and JavaScript to create dynamic and visually appealing web applications, widgets, and plugins.',
      'Enhanced user experience by creating custom graphics, illustrations, and animations.',
      'Developed 15+ interactive overlays using custom CSS for improved UX/UI.',
      'Collaborated with clients to understand requirements and deliver seamless user interfaces.',
    ],
  },
  {
    title: 'Systems Specialist',
    company_name: 'GEICO',
    iconBg: '#DCCEC5',
    date: 'Dec 2019 - Apr 2021',
    points: [
      'Mentored under a Web Developer III, gaining foundational skills in frontend development.',
      'Researched Content Management Systems (CMS), accessibility standards, and cross-browser compatibility to improve GEICO’s internal IT website used by over 60,000 agents.',
      'Developed a Python script to generate formatted email templates and establish file paths, streamlining retrieval of phone recordings for regional agents.',
      'Improved customer data structuring, reducing call resolution time by 2 minutes across 600 daily support calls.',
    ],
  },
  {
    title: 'Systems Technician',
    company_name: 'TalentPro Inc.',
    iconBg: '#1c1c1c',
    date: 'Feb 2019 - Dec 2019',
    points: [
      'Diagnosed and resolved software, hardware, and network issues, achieving 93% first-contact resolution rate.',
      'Created Tier 1 troubleshooting protocols and conducted training sessions, increasing department efficiency.',
      'Led project to image and configure over 6000 computers to Windows 10, eliminating security vulnerabilities.',
    ],
  },
]

const projects = [
  {
    name: 'Banking Dashboard',
    description:
      'A finance management dashboard that allows users to connect bank accounts, display transactions, and transfers funds.',
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
    image: null,
    source_code_link: 'https://github.com/MGahelrasoul/banking-dashboard',
    // source_site_link: 'https://threejs-project.tech/',
  },
  {
    name: 'Threejs Project',
    description:
      'Interactive project showcasing the capabilities of Three.js in 3D modeling.',
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
    description:
      'Comprehensive product site exploring the metaverse with a curated selection of products.',
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
    description:
      'Landing page for a modern banking app showcasing clean components and beautiful graphics based on Figma design.',
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
    description:
      'Yelp-clone for searching, viewing, and creating campgrounds/comments. Requires login for use.',
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
    description:
      'React-based Weather App using GeoDB Cities and OpenWeather APIs for real-time weather information.',
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
    description:
      'GCP project utilizing Maps APIs for powerful location-based services.',
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
    description:
      'Playable Tetris game with customizable options for a nostalgic gaming experience.',
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
    description:
      'A specialized image gallery designed for showcasing high-quality images.',
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
    description:
      'A gallery page with a sleek sidebar and masonry grid layout for easy image navigation.',
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
