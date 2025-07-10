const navLinks = [
  {
    name: 'Work',
    link: '#work',
  },
  {
    name: 'Experience',
    link: '#experience',
  },
  {
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Testimonials',
    link: '#testimonials',
  },
]

const words = [
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
]

const counterItems = [
  { value: 4, suffix: '+', label: 'Years of Experience' },
  { value: 5, suffix: '+', label: 'Completed Projects' },
  { value: 500, suffix: '+', label: 'Project Contributions' },
  { value: 100, suffix: '%', label: 'Of Deadlines Met' },
]

const logoIconsList = [
  {
    imgPath: '/images/logos/html-5.svg',
    name: 'html-5',
  },
  {
    imgPath: '/images/logos/css-3.svg',
    name: 'css-3',
  },
  {
    imgPath: '/images/logos/javascript.svg',
    name: 'javascript',
  },
  {
    imgPath: '/images/logos/react.svg',
    name: 'react',
  },
  {
    imgPath: '/images/logos/typescript.svg',
    name: 'typescript',
  },
  {
    imgPath: '/images/logos/redux.svg',
    name: 'redux',
  },
  {
    imgPath: '/images/logos/visual-studio-code.svg',
    name: 'vscode',
  },
  {
    imgPath: '/images/logos/vercel.svg',
    name: 'vercel',
  },
  {
    imgPath: '/images/logos/next-js.svg',
    name: 'nextJS',
  },
  {
    imgPath: '/images/logos/docker.svg',
    name: 'docker',
  },
  {
    imgPath: '/images/logos/node-js.svg',
    name: 'nodeJS',
  },
  {
    imgPath: '/images/logos/git.svg',
    name: 'git',
  },
  {
    imgPath: '/images/logos/github.svg',
    name: 'github',
  },
  {
    imgPath: '/images/logos/npm.svg',
    name: 'npm',
  },
]

const abilities = [
  {
    imgPath: '/images/seo.png',
    title: 'Quality Focused',
    desc: 'Focused on delivering robust, maintainable, high quality code through the use use of latest best practices, robust frontend frameworks like React, extensive Unit and End to End testing and CI/CD pipelines.',
  },
  {
    imgPath: '/images/chat.png',
    title: 'Excellent Communication',
    desc: 'Multiple years of experience collaborating both with technical and non technical team members, able to discuss and understand client requirements with management, able to articulate technical knowledge clearly.',
  },
  {
    imgPath: '/images/time.png',
    title: 'Deadline Efficient',
    desc: 'Making sure each ticket gets delivered on time and sprint goals are met, through the use of team estimation and prior experience. Confident in identifying issues and communicating to management to adjust timelines.',
  },
]

const techStackImgs = [
  {
    name: 'React Developer',
    imgPath: '/images/logos/react.png',
  },
  {
    name: 'Python Developer',
    imgPath: '/images/logos/python.svg',
  },
  {
    name: 'Backend Developer',
    imgPath: '/images/logos/node.png',
  },
  {
    name: 'Interactive Developer',
    imgPath: '/images/logos/three.png',
  },
  {
    name: 'Project Manager',
    imgPath: '/images/logos/git.svg',
  },
]

const techStackIcons = [
  {
    name: 'React Developer',
    modelPath: '/models/react_logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: 'Python Developer',
    modelPath: '/models/python-transformed.glb',
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: 'Backend Developer',
    modelPath: '/models/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: 'Interactive Developer',
    modelPath: '/models/three.js-transformed.glb',
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: 'Project Manager',
    modelPath: '/models/git-svg-transformed.glb',
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
]

const expCards = [
  {
    review:
      'Joining Adaptive through the graduate program and continuing to become a seasoned developer working on delivering cutting edge frontends for institutional trading applications for over 3 years has given me a excellent technical foundation and expert level skills.',
    imgPath: '/images/logos/adaptive.svg',
    logoPath: '/images/logos/adaptive-small.svg',
    title: 'Frontend Developer',
    date: 'September 2021 - October 2024',
    responsibilities: [
      'Worked in a team of a mid and senior frontend developers, building sophisticated, high performance trading UIs using React at the core, React Router for routing, Redux for state management, Websockets to communicate with the backend, AG Grid to display and manage incoming and outgoing trades, ',
      'Collaborated closely with UI/UX designers to ensure seamless user experiences.',
      'Optimized web applications for maximum speed and scalability.',
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: '/images/exp2.png',
    logoPath: '/images/logo2.png',
    title: 'Full Stack Developer',
    date: 'June 2020 - December 2023',
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      'Worked with backend engineers to integrate APIs seamlessly with the frontend.',
      'Contributed to open-source projects that were used with the Docker ecosystem.',
    ],
  },
  {
    review:
      'Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.',
    imgPath: '/images/exp3.png',
    logoPath: '/images/logo3.png',
    title: 'React Native Developer',
    date: 'March 2019 - May 2020',
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      'Improved app performance and user experience through code optimization and testing.',
      'Coordinated with the product team to implement features based on feedback.',
    ],
  },
]

const expLogos = [
  {
    name: 'logo1',
    imgPath: '/images/logo1.png',
  },
  {
    name: 'logo2',
    imgPath: '/images/logo2.png',
  },
  {
    name: 'logo3',
    imgPath: '/images/logo3.png',
  },
]

const testimonials = [
  {
    name: 'Esther Howard',
    mentions: '@estherhoward',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    imgPath: '/images/client1.png',
  },
  {
    name: 'Wade Warren',
    mentions: '@wadewarren',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    imgPath: '/images/client3.png',
  },
  {
    name: 'Guy Hawkins',
    mentions: '@guyhawkins',
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: '/images/client2.png',
  },
  {
    name: 'Marvin McKinney',
    mentions: '@marvinmckinney',
    review:
      'Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.',
    imgPath: '/images/client5.png',
  },
  {
    name: 'Floyd Miles',
    mentions: '@floydmiles',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!',
    imgPath: '/images/client4.png',
  },
  {
    name: 'Albert Flores',
    mentions: '@albertflores',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.',
    imgPath: '/images/client6.png',
  },
]

const socialImgs = [
  {
    name: 'insta',
    url: '',
    imgPath: '/images/insta.png',
  },
  {
    name: 'fb',
    url: '',
    imgPath: '/images/fb.png',
  },
  {
    name: 'x',
    url: '',
    imgPath: '/images/x.png',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/timur-jalilov/',
    imgPath: '/images/linkedin.png',
  },
]

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
}
