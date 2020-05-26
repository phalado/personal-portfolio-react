const projects = [
  {
    id: 1,
    name: 'Star Wars - Space Shooter',
    language: 'javascript',
    live: 'https://starwars-spaceshooter.herokuapp.com/',
    repo: 'https://github.com/phalado/JS-Capstone',
    description: [
      'Star Wars - Space Shooters is a game that I developed at JavaScript\'s Capstone Project.',
      'This game was done using <a href="https://phaser.io/">Phaser 3</a> framework. Here you control Luke\'s X-Wing against some of the imperial ships. The objective is to destroy as much enemy ships as you can and score high. Maybe you can erase my name from the leader board, <span style="color:black; font-weight:bold">give it a try!</span>',
    ],
    image: '../contents/projects/sw-ss.png',
  },
  {
    id: 2,
    name: "Little Chef's",
    language: 'javascript',
    live: 'https://raw.githack.com/phalado/Restaurant-page/develop/dist/index.html',
    repo: 'https://github.com/phalado/Restaurant-page',
    description: [
      'Restaurant page is a simple but elegant project done with JavaScript. There is no mouse in this restaurant.',
      'It is Little Chef\'s restaurant page with a menu, some critics and a session for contact. It is not the most complex project in my portfolio but it is a good combination of a good idea and a nice design. Be sure that Emile is, clearly, a human.',
    ],
    image: '../contents/projects/rest-page.png',
  },
  {
    id: 3,
    name: 'Friends Net',
    language: 'rails',
    live: 'https://friendsnet.herokuapp.com/',
    repo: 'https://github.com/alexawesomecode/facebook-clone-project',
    description: [
      'This was Ruby on Rails\' final project where we created a Facebook-like page.',
      'The user can create an account or login with Facebook. In the social media is possible to add other users as friends, create posts, comment on the posts and like or dislike both posts and comments.',
    ],
    image: '../contents/projects/friendsnet.png',
  },
  {
    id: 4,
    name: 'Sample App',
    language: 'rails',
    live: 'https://sample-app-phalado.herokuapp.com/',
    repo: 'https://github.com/phalado/sample_app',
    description: [
      'The Sample App is a social media done following the step-by-step of <a href="http://www.michaelhartl.com/">Michael Hartl\'s</a> Ruby on Rails Tutorial.',
      'Unlike the Facebook clone project, this one is more to what was the twitter in the past, where the posts are limited to 140 characters. It was a simple but amazing project.',
    ],
    image: '../contents/projects/sampleapp.png',
  },
  {
    id: 5,
    name: 'The Next Web',
    language: 'html',
    live: 'https://rawcdn.githack.com/phalado/Building-with-Responsive-Design/26a3313ba5b83de484bffbec1c13712546d4278c/index.html',
    repo: 'https://github.com/phalado/Building-with-Responsive-Design',
    description: [
      'Building with Responsive Design was a colaborative project at Microverse and the first responsive one - there was no turning back from here.',
      'The cloned site was <a href="https://thenextweb.com/" target="_blank">The Next Web</a>. You can see that our project is responsive to four different screen sizes.',
      'Click on the tittle to see a live version and don\'t forget to test its responsiveness.',
    ],
    image: '../contents/projects/tnw.png',
  },
  {
    id: 6,
    name: 'Using Bootstrap',
    language: 'html',
    live: 'https://rawcdn.githack.com/phalado/Using-Bootstrap/7bf89d9a69cfd69381abc181f5f543d38045c23d/index.html',
    repo: 'https://github.com/phalado/Using-Bootstrap',
    description: [
      'Using Bootstrap was one of Microverse\'s solo project and one of the funniest ones.',
      'The objective here was to use the framework Bootstrap to clone the <a href="https://www.newsweek.com/" target="_blank">Newsweek website</a> making a responsive page.',
    ],
    image: '../contents/projects/bootstrap.png',
  },
  {
    id: 7,
    name: 'Tic Tac Toe - Ruby',
    language: 'ruby',
    live: 'No live version',
    repo: 'https://github.com/phalado/Tic-Tac-Toe',
    description: [
      'The objective of this project was to build a terminal-to-play Tic-Tac-Toe.',
      "You can see more of the logic and the game in it's repository and about the design in the images bellow.",
    ],
    image: '../contents/projects/ttt-ruby.png',
  },
  {
    id: 8,
    name: 'Search Binary and Bi-Dimensional Tree',
    language: 'ruby',
    live: 'No live version',
    repo: 'https://github.com/phalado/Search-Tree',
    description: [
      'Search tree is an <span style="color:black; font-weight:bold">open-source</span> binary and bi-dimensional tree <span style="color:black; font-weight:bold">gem for ruby</span>.',
      'For more information about why and how it was done visit my <a href="https://medium.com/p/bdfe7069be2d/">article</a> in Medium.',
    ],
    image: '../contents/projects/tree.png',
  },
  {
    id: 9,
    name: 'Weather App',
    language: 'javascript',
    live: 'No live version',
    repo: 'https://github.com/phalado/Weather-App/',
    description: [
      'Weather App is a solo project in the JavaScript course in Microverse.',
      'It consist in using APIs to create an weather app (dah) where the user can verify the temperature in differen cities in celsius and fahrenheit.',
    ],
    image: '',
  },
  {
    id: 10,
    name: 'Checkers Online',
    language: 'javascript',
    live: 'https://checkers-online-phalado.herokuapp.com/',
    repo: 'https://github.com/phalado/Checkers-Online',
    description: [
      'This is a personal project. My objective was to test my skills doing an online, multiplayer game.',
      'In this project I built a CHeckers game using JavaScripts framework Phaser 3, a "fast, free and fun open-source framework for Canvas and WebGL powered browser games".',
    ],
    image: '../contents/projects/checkers-online.png',
  },
  {
    id: 11,
    name: 'Checkers Online',
    language: 'javascript',
    live: 'https://checkers-online-phalado.herokuapp.com/',
    repo: 'https://github.com/phalado/Checkers-Online',
    description: [
      'This is a personal project. My objective was to test my skills doing an online, multiplayer game.',
      'In this project I built a CHeckers game using JavaScripts framework Phaser 3, a "fast, free and fun open-source framework for Canvas and WebGL powered browser games".',
    ],
    image: '../contents/projects/checkers-online.png',
  },
  {
    id: 12,
    name: 'React BookStore',
    language: 'react',
    live: 'https://floating-plateau-44876.herokuapp.com/',
    repo: 'https://github.com/Grifo89/React_Bookstore/',
    description: [
      'This is my first React and Redux project.',
      'It consists of using React to build a CMS for a bookstore where the user can add, edit and remove books.',
    ],
    image: '../contents/projects/bookstore.png',
  },
  {
    id: 13,
    name: 'Batcomputer Clone',
    language: 'react',
    live: 'https://batcomputer-copy.herokuapp.com/',
    repo: 'https://github.com/phalado/React-Redux-Capstone',
    description: [
      "For this project I hacked Batman's computer and got some data from the main heroes and villains - you can't be the Batman if you are not prepared for each hero or villain.",
      "This project's goal was to build a browsable list of items that you can filter and access to the details of one item. The list should be accessed from an API, so I choose the Superhero API and filtered it to store only the DC Comic's characters.",
    ],
    image: '../contents/projects/batcomputer.png',
  },
  {
    id: 14,
    name: "Berk's Academy",
    language: 'react',
    live: 'https://features--berksacademy.netlify.app/',
    repo: 'https://github.com/phalado/final-capstone',
    description: [
      'This was my final capstone project for Microverse.',
      "The project's goal was to create a book of appointment. The back-end should be a REST API done with Ruby on Rails. The front-end should be done with React and Redux. ",
    ],
    image: '../contents/projects/berk.png',
  },
  {
    id: 15,
    name: 'Mobile Calculator',
    language: 'native',
    live: 'No live version',
    repo: 'https://github.com/phalado/mobileCalculator',
    description: [
      'A simple calculator for android made with React Native',
    ],
    image: '../contents/projects/mobile-calc.png',
  },
];

export default projects;
