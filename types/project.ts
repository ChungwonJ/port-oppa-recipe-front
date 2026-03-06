export interface ProjectSection {
  title: string;
  content?: string[];
  items?: string[];
}

export interface ProjectLink {
  title: string;
  src: string[];
}

export interface CaseStudyBlock {
  title: string;
  content?: string[];
  items?: string[];
  testImg?: string[];
}

export interface CaseStudyGroup {
  sectionTitle: string;
  blocks: CaseStudyBlock[];
  architectureSrc?: {
    title: string;
    src: string[];
  }[];
}

export interface ProjectData {
  id: string;
  name: string;
  architectureImage?: string;
  projectSrc?: ProjectLink[];
  templateBlocks: ProjectSection[];
  caseArchitectureImage?: string;
  architectureSrc?: ProjectLink[];
  caseStudy: CaseStudyGroup[];  
}

export type ProjectId = "opparecipe"; 