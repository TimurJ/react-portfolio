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
    imgPath: '/images/seo.webp',
    title: 'Quality Focused',
    desc: 'Focused on delivering robust, maintainable, high quality code through the use use of latest best practices, robust frontend frameworks like React, extensive Unit and End to End testing and CI/CD pipelines.',
  },
  {
    imgPath: '/images/chat.webp',
    title: 'Excellent Communication',
    desc: 'Multiple years of experience collaborating both with technical and non technical team members, able to discuss and understand client requirements with management, able to articulate technical knowledge clearly.',
  },
  {
    imgPath: '/images/time.webp',
    title: 'Deadline Efficient',
    desc: 'Making sure each ticket gets delivered on time and sprint goals are met, through the use of team estimation and prior experience. Confident in identifying issues and communicating to management to adjust timelines.',
  },
]

const techStackImgs = [
  {
    name: 'React',
    imgPath: '/images/logos/react.svg',
  },
  {
    name: 'TypeScript',
    imgPath: '/images/logos/typescript.svg',
  },
  {
    name: 'TanStack Router/Query',
    imgPath: '/images/logos/tanstack.webp',
  },
  {
    name: 'Redux',
    imgPath: '/images/logos/redux.svg',
  },

  {
    name: 'AG Grid',
    imgPath: '/images/logos/ag-grid.webp',
  },
  {
    name: 'Node.js',
    imgPath: '/images/logos/node-js.svg',
  },
  {
    name: 'NPM',
    imgPath: '/images/logos/npm.svg',
  },

  {
    name: 'Next.js',
    imgPath: '/images/logos/next-js.svg',
  },
  {
    name: 'Docker',
    imgPath: '/images/logos/docker.svg',
  },
  {
    name: 'GitHub',
    imgPath: '/images/logos/github.svg',
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
    logoPath: '/images/logos/city-university-small.webp',
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

const socialImgs = [
  {
    name: 'github',
    url: 'https://github.com/TimurJ',
    imgPath: '/images/logos/github.svg',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/timur-jalilov/',
    imgPath: '/images/logos/linkedin.webp',
  },
]

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  socialImgs,
  techStackImgs,
  navLinks,
}
