import type { CVData } from '../types/cv';

export const cv: CVData = {
  name: 'Jorge O. Uribe',
  title: 'Full-Stack Software Engineer',
  location: 'Lima, Peru',
  email: 'jorge@jouribe.dev',
  phone: '+51 972 794 964',
  github: 'https://github.com/jouribe',
  linkedin: 'https://www.linkedin.com/in/jouribe',
  twitter: 'https://x.com/jouribepe',
  summary:
    'Full-Stack Software Engineer with 15+ years designing and building scalable enterprise systems using .NET, Laravel, and SQL databases. Expertise in microservices architecture, REST API design, and high-traffic platform development. Former IT Director and team lead. Based in Lima, Peru — available globally for remote opportunities.',
  seoDescription:
    'Full-Stack Software Engineer with 15+ years of expertise in .NET, Laravel, microservices, and scalable enterprise platforms. Based in Lima, Peru — open to global remote roles.',
  experience: [
    {
      company: 'Atomikal',
      title: 'Full-Stack Developer',
      date: 'Oct 2020 - Present',
      description: [
        'Developed enterprise web portals using C# and SQL Server',
        'Built backend systems using Laravel and MariaDB',
        'Designed REST APIs and system integrations',
        'Optimized database performance and backend services',
      ],
      skills: [
        'C#',
        'SQL Server',
        'Laravel',
        'MariaDB',
        'REST APIs',
        'Performance Optimization',
      ],
      color: 'yellow',
    },
    {
      company: 'Unity Automotive (USA)',
      title: 'Software Developer',
      date: 'Feb 2020 - Sep 2020',
      description: [
        'Built automation tools using .NET Core',
        'Developed CRM and ERP backend services',
        'Designed RESTful API integrations',
      ],
      skills: ['.NET Core', 'CRM/ERP', 'REST APIs', 'Automation'],
      color: 'green',
    },
    {
      company: 'Atomikal',
      title: 'IT Director',
      date: 'Apr 2011 - Jul 2015',
      description: [
        'Led development of marketing platforms and promotional websites',
        'Delivered high-traffic campaign platforms',
      ],
      skills: [
        'Team Leadership',
        'Marketing Platforms',
        'High-Traffic Systems',
        'Project Management',
      ],
      color: 'yellow',
    },
    {
      company: 'Peruvian Army Headquarters',
      title: 'Software Developer',
      date: 'Aug 2006 - Jun 2009',
      description: [
        'Developed personnel and logistics systems',
        'Maintained enterprise backend applications',
      ],
      skills: [
        'Enterprise Software',
        'Logistics Systems',
        'Backend Maintenance',
      ],
      color: 'mauve',
    },
  ],
  skills: [
    {
      category: 'Languages',
      items: ['C#', 'PHP', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'Frameworks',
      items: ['.NET / ASP.NET Core', 'Laravel', 'Node.js', 'Vue.js', 'Nuxt.js'],
    },
    {
      category: 'Data Bases',
      items: ['SQL Server', 'MySQL', 'PostgreSQL', 'Oracle', 'MongoDB'],
    },
    {
      category: 'DevOps & Infra',
      items: ['Docker', 'Git', 'Linux', 'CI/CD'],
    },
    {
      category: 'Architecture',
      items: ['REST APIs', 'Microservices', 'Scalable Web Platforms'],
    },
  ],
  education: {
    institution:
      'Instituto de Ciencias de la Información - Universidad Nacional de Ingeniería',
    degree: 'Computer Science & Informatics',
  },
  languages: ['Spanish (Native)', 'English (Professional Technical)'],
};
