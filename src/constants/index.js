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
    review: `Taking the time to level up my technical and soft skills on the way to becoming a Senior/Tech Lead, I have been diving deep into the Professional
       Frontend Developer teaching path on Frontend Masters. Covering a wide range advanced topics like JavaScript closures, asynchronicity, React portals, custom
        hooks, TypeScript advanced types, generics and much more.`,
    imgPath: '/images/logos/frontend-masters.webp',
    logoPath: '/images/logos/frontend-masters-small.webp',
    title: 'Sabbatical/Upskilling',
    date: 'October 2024 - Present',
    responsibilities: [
      `Completing the Beginner Frontend Developer path, taking the initiative to build upon and solidify my foundational knowledge. Built multiple standalone
       HTML and CSS centric projects using the latest industry standards and methodologies, which culminated in a final Wordle clone project using HTML,
       CSS and Javascript.`,
      `Diving deep into advanced JavaScript, understanding how everything works under the hood, starting from how JS code is executed using the Thread of
       Execution, the Execution Context, Memory and the Call Stack. Covering Higher Order Functions, Callbacks, Closure, Single Threaded vs Asynchronous and how
       the browser handles the Asynchronicity. And finally finishing off with Promises and Class and Object Oriented JS.`,
      `Covering advanced React concepts, starting from builtin Hooks, utilising Custom Hooks for reusability, React Portals for rendering outside of the application root
       to help implement Modals, Error Boundaries for elegant error handling and logging. Implementing Unit Tests with Vitest and using Test Driven Development to write
       tests ahead of creating the component and making sure they pass, Mocking the API calls to avoid unnecessary calls and load on the server. Covering the React
       ecosystem implementing TanStack Router with lazy loading to improve load times, using TanStack Query for asynchronous state management and integration with API
       calls at set time intervals for dynamic data.`,
    ],
  },
  {
    review: `Joining Adaptive through the graduate program and going on to become a seasoned developer working on delivering cutting edge frontends for institutional
       trading applications for over 3 years has given me a excellent technical foundation and expert level skills.`,
    imgPath: '/images/logos/adaptive.svg',
    logoPath: '/images/logos/adaptive-small.svg',
    title: 'Frontend Developer',
    date: 'September 2021 - October 2024',
    responsibilities: [
      `Working in a team of a mid and senior frontend developers, building sophisticated, high performance trading UI's using React and TypeScript at the core,
       React Router for routing, Redux for state management, Websockets to communicate with the backend, AG Grid to display and manage incoming and outgoing trades,
       Styled Components for efficient and consistent styling, Jest and React Testing Library for unit tests, Cypress for end to end tests.`,
      `Working closely with the Backend team to collaborate on the development new api endpoint and the shape of the data. Communicate technical information clearly
       to explain any Frontend limitations or drawbacks and suggest alternatives. Test and collaborate to ensure speed and reliability with the Backend.`,
      `Coordinate with the QA team to help improve test automation using Cypress and Playwright, identify potential areas of complexity and failure to prevent
       future regression`,
      `Coach and guide Junior developers that join the team, to empower them with the confidence and the knowledge to start contributing to the codebase as soon as possible
       and start making a impact.`,
      `Working in a Agile environment with biweekly sprint and monthly productions releases, communicating effectively with the PM and BA to clarify client requirements
       and identify potential issues and technical and business domain limitations. Collaborating with other Frontend developers to estimate requirements and discuss
       technical approaches. Perform sprint retrospectives to continuously improve our processes for efficiency and reliability.`,
    ],
  },

  {
    review: `During my time at City University studying Computer Science, I have develop a deep understanding of core computer science courses, from Programming Paradigms
     to Data Structures, it equipped me with the passion and the tools to succeed in my career as a software developer.`,
    imgPath: '/images/logos/city-university.svg',
    logoPath: '/images/logos/city-university-small.png',
    title: 'Computer Science BSc',
    date: 'September 2017 - September 2020',
    responsibilities: [
      `Covering different programming paradigms from Functional Programming to Object Oriented with practical examples, coding coursework and examinations.`,
      `Working on a group project in a team of five people for 6 months developing a library book keeping application, using Git and GitHub for collaboration,
       Java as the main programming language for the UI and the Backend and mySQL for the Database.`,
      `Developing a procedurally generated 2D maze platforming game in Unity using C#, with no prior experience, I had to learn everything from scratch applying
       all of the foundational programming concepts I had learned to date. Managed to successfully create the game and finish the project.`,
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
