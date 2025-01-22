// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'smr-khn', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['smr-khn/ROS-Projects','smr-khn/Penn-State-Robotics-Club','smr-khn/smr-khn.github.io',], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'Sameer Khan Portfolio',
    description: 'My Portfolio',
    imageURL: '',
  },
  social: {
    linkedin: 'sameerkhan7',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://smr-khn.github.io/',
    phone: '',
    email: 'sameerkhan@outlook.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1J8StkEseZ7tnhA703Hhe1dUwSIE3O56G/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python','C++', 'MATLAB', 'Java', 'ROS/ROS2', 'PyTorch', 'OpenCV', 'TensorFlow', 'SolidWorks', 'Linux', 'Git', 'Machine/Deep Learning'
  ],
  experiences: [
    {
      company: 'Carnegie Robotics',
      position: 'Electrical Engineering Intern',
      from: 'May 2023',
      to: 'August 2023',
      companyLink: 'https://carnegierobotics.com/',
    },
    {
      company: 'Westinghouse Electric Company',
      position: 'Electrical Engineering Intern',
      from: 'June 2022',
      to: 'August 2022',
      companyLink: 'https://westinghouse.com/',
    },
    {
      company: 'SmithMicro',
      position: 'Quality Assurance Engineering Intern',
      from: 'Summer 2018',
      to: 'Summer 2021',
      companyLink: 'https://www.smithmicro.com/',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'Johns Hopkins University',
      degree: 'MSE in Robotics',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'Pennsylvania State University',
      degree: 'BS in Electrical Engineering ',
      from: '2019',
      to: '2023',
    },
  ],
  publications: [
    {
      title: 'TBA',
      conferenceName: '',
      journalName: 'TBA',
      authors: 'John Doe, Jane Smith',
      link: 'TBA',
      description:
        'TBA',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
