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
  // docker,
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
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'ReactJS Frontend',
    icon: mobile,
  },
  {
    title: 'NodeJS Backend',
    icon: backend,
  },
  {
    title: 'UX/UI Design',
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
]

const experiences = [
  {
    title: 'Systems Technician',
    company_name: 'TalentPro Inc',
    iconBg: '#1a191d',
    date: 'Feb 2019 - Dec 2019',
    points: [
      'Diagnosed and troubleshot software, hardware, and network; researched, analyzed, and rectified technical problems, reducing call resolution to 5 minutes or less, with 93% of calls resolved on first contact.',
      ' Generated Tier 1 troubleshooting protocols and delivered training sessions for Tier 1 techs, increasing department first call resolution by 12% and decreasing call resolution time to below 10 minutes per incident.',
      " Led imaging and configuration of over 6000 AD adjusters' computers to Windows 10, eradicating Windows 7 security vulnerabilities from the enterprise.",
      ' Created inventory tables and repaired equipment onsite, reducing downtime on most common failure points.',
    ],
  },
  {
    title: 'Systems Specialist',
    company_name: 'GEICO',
    iconBg: '#DCCEC5',
    date: 'Dec 2019 - Apr 2021',
    points: [
      'Researched Content Management Systems (CMS), Accessibility Standards, and Mobile/Cross-browser Compatibility optimization used to improve the internal Geico IT website frontend impacting 60,000 agents.',
      " Engineered a Python script to generate precisely formatted email templates and establish file paths, streamlining the retrieval of phone recordings crucial for regional agents' access.",
      ' Crafted system to structure customer data, improving call resolution by 2 minutes across 600 daily support calls.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Freelance',
    iconBg: '#1a191d',
    date: 'Apr 2021 - Nov 2021',
    points: [
      'Independently managed and executed frontend projects using HTML, CSS, and JavaScript to create dynamic and visually appealing web applications, demonstrating strong self-motivation and time management skills.',
      'Innovated for clients by creating custom graphics, illustrations, and animations, ultimately enhancing the overall user experience as well as increasing traffic exponentially.',
      'Collaborated with clients to understand their requirements and translate them into seamless user interfaces.',
      'Developed 15+ interactive overlays using custom CSS to achieve clean and aesthetically pleasing UX/UI.',
    ],
  },
  {
    title: 'Junior Web Developer',
    company_name: 'Kalo Technologies',
    iconBg: '#DCCEC5',
    date: 'Nov 2021 - May 2022',
    points: [
      'Collaborated with stakeholders to create static, dynamic, e-commerce, and portal web applications,',
      ' demonstrating proficiency in HTML, CSS, JavaScript, and various frontend frameworks/packages.',
      ' Translated stakeholder needs into innovative website functionalities, offering tailored solutions that resulted in an impressive 12% surge in user activity and website engagement.',
      ' Improved response time on the client side by roughly 1 second while decreasing server load.',
      ' Coordinated with the Graphics Design team for aesthetics, resulting in clean website functionality and design.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Finding Farmers',
    iconBg: '#1a191d',
    date: 'May 2022 - Jan 2023',
    points: [
      'Designed, developed, tested, and implemented responsive react web applications with modern frontend and backend frameworks, ensuring seamless integration, friendly user interfaces, and a consistent user experience.',
      ' Utilized React JS for templating, resulting in faster compilation and development of reusable components.',
      " Leveraged Ajax functions to successfully integrate Google Cloud's Geocoding and Maps JavaScript APIs, a pivotal feature enhancing user interaction and engagement, ultimately increasing website traffic.",
      ' Provided clear directives on objectives, functionalities, and constraints in an SRS, improving the team workflow.',
      ' Pulled SQL queries on stakeholder requests and analyzed data to formulate solutions for driving user activity.',
    ],
  },
  {
    title: 'Manager',
    company_name: 'Kumon',
    // icon: kumon,
    iconBg: '#DCCEC5',
    date: 'Jan 2023 - Current',
    points: [
      'Analyzed the learning process to identify areas of improvement and spearheaded collaborative efforts to implement tailored solutions that aligned with stakeholder requirements and needs.',
      'Led a team of 11 instructors to organize concepts, optimize schedules, and deliver services efficiently.',
      'Crafted personalized lesson plans tailored to individual needs, resulting in a 10% increase in assessment scores.',
      'Maintained a student information database, enabling data-driven lessons, assessments, and instruction.',
      'Provided insight towards implementing online learning through a mobile app, ultimately reducing planning/grading time by a couple of hours per week.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Moe proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  // {
  //   name: 'Metaverse Madness',
  //   description:
  //     'Comprehensive product site exploring the metaverse with a curated selection of products.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'node',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'tailwind',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: metaverse,
  //   source_code_link: '#',
  //   source_site_link: '#',
  // },
  {
    name: 'HooBank',
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
    // source_site_link: '#',
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
    source_site_link:
      'http://ec2-18-117-72-225.us-east-2.compute.amazonaws.com/YelpCamp',
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
    source_site_link:
      'http://ec2-18-117-72-225.us-east-2.compute.amazonaws.com/Tetris',
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

export { services, technologies, experiences, testimonials, projects }
