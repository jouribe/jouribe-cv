import type { ExperienceColor } from '../types/cv';

export interface ColorTheme {
  dot: string;
  text: string;
  border: string;
  background_hover: string;
}

export const colorMap: Record<ExperienceColor, ColorTheme> = {
  blue: {
    dot: 'bg-blue',
    text: 'text-blue',
    border: 'border-blue/30',
    background_hover: 'hover:bg-blue',
  },
  green: {
    dot: 'bg-green',
    text: 'text-green',
    border: 'border-green/30',
    background_hover: 'hover:bg-green',
  },
  yellow: {
    dot: 'bg-yellow',
    text: 'text-yellow',
    border: 'border-yellow/30',
    background_hover: 'hover:bg-yellow',
  },
  mauve: {
    dot: 'bg-mauve',
    text: 'text-mauve',
    border: 'border-mauve/30',
    background_hover: 'hover:bg-mauve',
  },
  default: {
    dot: 'bg-lavender',
    text: 'text-lavender',
    border: 'border-lavender/30',
    background_hover: 'hover:bg-lavender',
  },
};

export const skillCategoryColors: Record<string, string> = {
  Languages:
    'hover:border-yellow hover:text-yellow hover:shadow-[0_0_15px_var(--yellow)]',
  Frameworks:
    'hover:border-green hover:text-green hover:shadow-[0_0_15px_var(--green)]',
  'Data Bases':
    'hover:border-blue hover:text-blue hover:shadow-[0_0_15px_var(--blue)]',
  'DevOps & Infra':
    'hover:border-red hover:text-red hover:shadow-[0_0_15px_var(--red)]',
  Architecture:
    'hover:border-mauve hover:text-mauve hover:shadow-[0_0_15px_var(--mauve)]',
};

export const defaultSkillHover =
  'hover:border-mauve hover:text-mauve hover:shadow-[0_0_15px_var(--mauve)]';
