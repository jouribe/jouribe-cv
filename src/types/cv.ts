export type ExperienceColor = 'blue' | 'green' | 'yellow' | 'mauve' | 'default';

export interface Experience {
  company: string;
  title: string;
  date: string;
  description: string[];
  skills?: string[];
  color?: ExperienceColor;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
}

export interface CVData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  summary: string;
  seoDescription: string;
  experience: Experience[];
  skills: SkillGroup[];
  education: Education;
  languages: string[];
}
