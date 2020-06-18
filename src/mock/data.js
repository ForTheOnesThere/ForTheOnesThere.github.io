import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'James Cockayne | Developer and Engeineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'James Cockayne, developer.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi, I'm`,
  name: 'James Cockayne, MEng',
  subtitle: 'Please Hire me.',
  cta: 'Meet me...',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: `My name is James, and I am a software developer and aerospace engineer from the UK.
  In 2020, I graduated from the University of Nottingham with a master's degree in Aerospace Engineering (MEng).`,
  paragraphTwo: `At university, I also learned web development. As a qualified engineer that's not from a traditional software background,
                I am uniquely placed to solve a huge range of problems. `,
  paragraphThree: `A selection of my skills and projects can be seen below. Please get in touch, I'd love to work together!`,
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
