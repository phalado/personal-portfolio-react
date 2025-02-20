const pastExperiences = [
  {
    id: 5,
    name: 'Jebbit',
    period: '2023 - Current',
    website: 'https://www.jebbit.com/',
    title: 'Integrations Engineer',
    subTitle: '',
    topics: [
      'I’ve been part of the integrations team, working alongside clients to integrate their APIs with Jebbit’s',
      'Created Uploaders so that clients would, periodically, receive an email with all the data required.',
      "Implemented a new feature to collect uploader's logs and generate daily, increasing reliability of the service and clients satisfaction.",
      "Helped plan and implement the integration's data refactor, improving the client's UX.",
      'Increased the code quality, adding new features and correcting bugs.',
    ],
  },
  {
    id: 4,
    name: 'Hunt Club',
    period: '2022',
    website: 'https://www.huntclub.com/',
    title: 'Sr Software Engineer',
    subTitle: '',
    topics: [
      "I was part of the team responsible for the candidates' search. We had to add the possibility for the users to locate the desired candidate using different filters and optimize the search so it wouldn't take a long time to find some options between millions of candidates.",
      'We also had to work in the Front-end not only to get all the filters added by the user and send it to the Back-End but also to be able to receive all the data and present it in a pleasant way.',
      "To know if the candidates' search is efficient enough we implemented several tracking points in the code (both back and front-ends) so our product manager could use it to improve the user's experience.",
      "Also implemented a small feature to the company's chrome extension.",
    ],
  },
  {
    id: 3,
    name: 'Cuseum',
    period: '2022',
    website: 'https://cuseum.com/',
    title: 'Full-Stack Developer',
    subTitle: '',
    topics: [
      'Responsible for implementing new features in the Back-end, creating tests, and linking it to the view in the Front-end.',
      'Solve some bugs in the code.',
      'Increase test cover.',
    ],
  },
  {
    id: 2,
    name: 'bycoders_',
    period: '2020 - 2022',
    website: 'https://www.bycoders.com.br/',
    title: 'Full-Stack Developer',
    subTitle:
      'Working as a Full-Stack developer where I design and install creative solutions for the company’s clients. Some of my contributions:',
    topics: [
      'Install a back office for administrative access in a web store. Administrators can filter the users, stores, and products.',
      'Integration with Mixpanel so the client can check its portal’s access.',
      'Integration with Clockify and google drive, so the portal can access data from the first, show it on screen, and save on the second.',
      'Create scheduled notifications using the Sidekiq scheduler, so the client can submit notifications and emails automatically.',
      "Improve in the automated tests of a client's application, increasing its coverage up to 95%.",
      'Part of Bycoders Academy as an instructor. Main course: Automated Tests for Ruby on Rails using RSpec',
      'One of the developers in a medium-size, microservices project where I had the opportunity to install Kong as the Gateway and GraphQL to each service.',
    ],
  },
  {
    id: 1,
    name: 'Freelancer',
    period: '2019 - 2020',
    website: '',
    title: 'Freelancer Full-Stack Developer',
    subTitle: 'Some of my main projects as a freelancer',
    topics: [
      'I developed a scheduler for a client using Ruby on Rails as Back-End and React as Front-End.',
      'I developed a back-office using Ruby on Rails where the client (a web stores application) could use administrative access to filter users, stores, and products.',
    ],
  },
];

export default pastExperiences;
