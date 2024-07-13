export default {
  introduce: {
    text: 'Hi, I am Ivan Wu,\na Frontend Engineer,\ndedicated to work, learning, and living.',
    image: require('../../assets/IMG_2017_02.JPG'),
  },
  social: {
    github: {
      link: 'https://github.com/WuIFan',
    },
    linkedin: {
      link: 'https://www.linkedin.com/in/i-fan-wu-76542a182/',
    },
    mail: {
      link: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=contact@iamivanwu.com',
    },
  },
  toolbox: {
    categories: ['Frontend', 'Backend', 'Testing', 'Others'],
    scores: {
      frontend: [
        {name: 'ReactJS', score: 100},
        {name: 'Javascript', score: 100},
        {name: 'HTML/CSS', score: 85},
        {name: 'Typescript', score: 70},
      ],
      backend: [
        {name: 'Java', score: 80},
        {name: 'NodeJS', score: 80},
        {name: 'MySQL', score: 75},
      ],
      testing: [
        {name: 'Puppeteer', score: 90},
        {name: 'Selenium IDE', score: 60},
        {name: 'SideeX', score: 60},
      ],
      others: [
        {name: 'Three.js', score: 80},
        {name: 'WordPress', score: 80},
        {name: 'Docker', score: 70},
      ],
    },
  },
  experience: [
    {
      key: 2,
      years: '2021/04 - NOW',
      title: 'Engineer(2021)\nSenior Engineer(2023)',
      place: 'Perfectcorp',
      jobs: [
        'Implemet Web APP UI',
        'Demo page for our web app',
        'Web 3D object editing tool',
        'Configurable testing environment for QA',
      ],
    },
    {
      key: 1,
      years: '2018 - 2020',
      title: 'Master Degree',
      place:
        'National Cheng Kung University, Computer Science and Information Engineering',
      jobs: [
        'Develope web auto testing tool - SideeX',
        'Study how to simulate user operations on web pages',
      ],
    },
    {
      key: 0,
      years: '2014 - 2018',
      title: 'Bachelor Degree',
      place:
        'National Chung Hsing University, Computer Science and Engineering',
      jobs: [
        'Virtual Chunking: A Novel Design on Practical Data Chunking with Disk Usage Enhancement',
      ],
    },
  ],
};
