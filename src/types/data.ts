export interface Proyect {
  id: number;
  name: string;
  description: string;
  img: string;
  url: string;
  repo: string;
}

export interface socialMedia {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  src: string;
  alt: string;
  learning: boolean;
  tool: boolean;
}

export interface Study {
  title: string;
  instutition: string;
  location: string;
  startYear: string;
  endYear: string;
  description: string;
}

export interface Experience {
  company: string,
  position: string,
  startDate: string,
  endDate: string,
  summary: string,
  highlights: string[]
}