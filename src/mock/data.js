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
    img: 'robotSearch.png',
    title: 'Robot Address Book with React.js',
    info: `An address book that generates random portraits for each entry using an API.`,
    info2: 'This simple web app is built with React.js. It has a dynamic search function to filter contacts, and is clean and responsive.',
    url: 'https://fortheonesthere.github.io/robotfriends/',
    repo: 'https://github.com/ForTheOnesThere/robotfriends', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Coronavirus Tracker with WebGL Globe and a COVID-19 API',
    info: 'This project is yet to be built.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Machine Learning Facial Recognition',
    info: 'This project is yet to be built.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'logo.png',
    title: 'My Github Account',
    info: 'More of my work can be found on my Github page. The link to this and my other social media can be found in the footer below.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to work together? Awesome!',
  btn: '',
  email: 'jamescockayne1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jamescockayne/',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/fortheonesthere',
    },
    {
      id: uuidv1(),
      name: 'reddit',
      url: 'https://www.reddit.com/user/ForTheOnesThere',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/ForTheOnesThere',
    },
  ],
};

//GITHUB CARD DATA
export const githubCardData = {
  text: 'This is the text section.',
  avatarUrl: 'www.yay.com',
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
