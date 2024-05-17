export default {
  introduce: {
    text: 'Hi, I am Ivan Wu,\na Frontend Engineer,\ndedicated to work, learning, and living.',
    image: require('../../assets/IMG_2017_02.JPG'),
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
      ]
    },
  },
};
