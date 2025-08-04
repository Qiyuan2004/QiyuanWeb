const CONFIG = {
  github: { username: 'Qiyuan2004' },
  base: '/QiyuanWeb/',
  seo: {
    title: 'Portfolio of Qiyuan Qiu',
    description:
      'ACMS student at UW, focusing on Machine Learning, Data Analysis, and Algorithms.',
    imageURL: '/avatar.jpg', // 本地头像
  },
  social: {
    linkedin: 'qiyuan-qiu-10a747304',
    github: 'Qiyuan2004',
    website: 'https://qiyuan2004.github.io/QiyuanWeb/',
    email: 'qq22@uw.edu',
  },
  resume: { fileUrl: '/resume.pdf' },
  skills: [
    'Python','OCaml','C/C++','Java','SQL','HTML/CSS','LaTeX','PyTorch','NumPy','Pandas','Matplotlib',
  ],
  experiences: [
    {
      company: 'China Mobile',
      position: 'AI/ML Intern',
      from: 'Jul 2025',
      to: 'Present',
      companyLink: 'https://www.chinamobileltd.com/',
    },
    {
      company: 'MassMutual Northwest',
      position: 'Data Analysis Intern',
      from: 'Jan 2025',
      to: 'Feb 2025',
      companyLink: 'https://www.massmutual.com/',
    },
  ],
  educations: [
    {
      institution: 'University of Washington',
      degree:
        'B.S. in Applied and Computational Mathematical Sciences (Discrete Math & Algorithms)',
      from: '2022',
      to: '2026 (Expected)',
      institutionLink: 'https://www.uw.edu',
    },
  ],
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: { sortBy: 'stars', limit: 6, exclude: { forks: true, projects: [] } },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'Jet Tagging with Transformers',
          description: 'Transformer-based deep learning model classifying LHC jets into 5 categories with 77.1% accuracy.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Qiyuan2004/jet-tagging',
        },
        {
          title: 'MOOC Completion Predictor',
          description: 'Predicting MOOC course completion with decision tree ensembles, achieving 95.3% accuracy.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Qiyuan2004',
        },
        {
          title: 'Interactive Data Visualization',
          description: 'Dashboards visualizing climate change & global indices using Vega-Lite.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Qiyuan2004',
        },
      ],
    },
  },
  blog: { source: '', username: '', limit: 0 },
  googleAnalytics: { id: '' },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'nord',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: ['light','dark','cupcake','bumblebee','emerald','corporate','synthwave','retro',
             'cyberpunk','valentine','halloween','garden','forest','aqua','lofi','pastel',
             'fantasy','wireframe','black','luxury','dracula','cmyk','autumn','business',
             'acid','lemonade','night','coffee','winter','dim','nord','sunset','procyon'],
  },
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
