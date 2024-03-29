const projects = [
  {
    id: 1,
    name: 'Star Wars - Space Shooter',
    language: 'javascript',
    live: 'https://starwars-spaceshooter.herokuapp.com/',
    repo: 'https://github.com/phalado/JS-Capstone',
    description: [
      'Star Wars - Space Shooters is a game that I developed at JavaScript\'s Capstone Project.',
      'This is an endless runner developed using Phaser 3 framework. Here you control Luke\'s X-Wing against some of the imperial ships. The goal is to destroy as many enemy ships as you can and score high. Maybe you can erase my name from the leader board, give it a try!',
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
      'The Restaurant page is a simple but elegant project done with JavaScript. There is no mouse in this restaurant.',
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
      'This is a a Facebook-like social net created with Ruby on Rails.',
      'You can create an account or use your Facebook credentials to log in. Omniauth was the tool used for this.',
      'On this social network, the user can add other users as friends, create posts, comment on the posts, and like or dislike both posts and comments.',
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
      'The Sample App is a social media done following the step-by-step of Michael Hartl\'s Ruby on Rails Tutorial.',
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
      'Building with Responsive Design was a collaborative project at Microverse, where the goal was to clone The Next Web website.',
      'This was the first responsive project and there is no turning back after this point.',
      'Click on the title to see a live version and don\'t forget to test its responsiveness.',
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
      'The goal here was to use the framework Bootstrap to clone the Newsweek website making a responsive page.',
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
      'The goal of this project was to build a two-player, terminal-to-play Tic-Tac-Toe.',
      'Unfortunately, there is no live version available yet but you can see more of the logic and the game in its repository and a bit about the design in the images below.',
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
      'Search Tree is an open-source binary and bi-dimensional tree gem for ruby that I decided to code because... only God knows why.',
      'For more information about the logic and how it was done visit my article in Medium - https://medium.com/p/bdfe7069be2d/.',
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
      'Weather App is an API reading project.',
      'It consists of using APIs to create a weather app (dah) where the user can verify the temperature in different cities. The user can, also, choose between celsius and Fahrenheit.',
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
      'This is a personal project. My goal was to test my skills by doing an online, multiplayer game.',
      'In this project, I built a checker game using JavaScript\'s framework Phaser 3.',
      'This is a multiplayer-only game. One user has to create a game and pass to the second one the generated code.',
      'The game\'s logic shows you the possible movements and recognizes when the game is over.',
    ],
    image: '../contents/projects/checkers-online.png',
  },
  {
    id: 14,
    name: "Berk's Academy",
    language: 'react',
    live: 'https://features--berksacademy.netlify.app/',
    repo: 'https://github.com/phalado/final-capstone',
    description: [
      'This was my final capstone project for Microverse and the most complete one.',
      'The project\'s goal was to create a book of appointment. I chose to create a dragon flying academy based on the characters of How to Train Your Dragon.',
      'The back-end is a RESTful API done with Ruby on Rails and the front-end was done with React and Redux.',
    ],
    image: '../contents/projects/berk.png',
  },
  {
    id: 13,
    name: 'Batcomputer Clone',
    language: 'react',
    live: 'https://batcomputer-copy.herokuapp.com/',
    repo: 'https://github.com/phalado/React-Redux-Capstone',
    description: [
      'For this project, I hacked Batman\'s computer and got some data from the main heroes and villains. You can\'t be the Dark Knight if you are not prepared for each hero or villain.',
      'This project\'s goal was to build a browsable list of items that you can filter and access to the details of one item. The list should be accessed from an API, so I chose the Superhero API and filtered it to store only the DC Comic\'s characters.',
      'I used React and Redux to divide the characters by affiliation, and alignment.',
    ],
    image: '../contents/projects/batcomputer.png',
  },
  {
    id: 12,
    name: 'React BookStore',
    language: 'react',
    live: 'https://floating-plateau-44876.herokuapp.com/',
    repo: 'https://github.com/Grifo89/React_Bookstore/',
    description: [
      'This is my first React and Redux project.',
      'It consists of using React to build a CMS for a bookstore where the user can add, edit, and remove books.',
    ],
    image: '../contents/projects/bookstore.png',
  },
  {
    id: 15,
    name: 'Mobile Calculator',
    language: 'native',
    live: 'https://drive.google.com/file/d/1Hh2XN_AfMIAgdupILKmCcbra9gEA89po/view?usp=sharing',
    repo: 'https://github.com/phalado/mobileCalculator',
    description: [
      'A simple calculator for android and my first project done with React Native',
      'There is no live-version for this project but you can download the apk clicking on the project\'s title.',
      'Try to divide by 0',
    ],
    image: '../contents/projects/mobile-calc.png',
  },
  {
    id: 16,
    name: 'Typescript Calculator',
    language: 'typescript',
    live: 'https://calculator-typescript.netlify.app/',
    repo: 'https://github.com/phalado/typescript-calculator',
    description: [
      'Another simple calculator, but done with TypeScript this time.',
      'Try to divide by 0',
    ],
    image: '../contents/projects/calculator-typescript.png',
  }
];

export default projects;
