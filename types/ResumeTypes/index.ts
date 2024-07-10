export type Profile = {
    name: string;
    email: string;
    phone: string;
    url: string;
    summary: string;
    location: string;
  };
  
  export type Experience = {
    companyName: string;
    jobTitle: string;
    date: string;
    description: string;
  };
  
  export type Projects = {
    projectName: string;
    date: string;
    description: string;
  };
  
  export type Skills = {
    skillName: string;
    skillLevel: number;
  };
  
  export type Education = {
    schoolName: string;
    degree: string;
    date: string;
    gpa: string;
    description: string;
  };
  
  export type Custom = {
    description: string;
  };
  
  export type Resume = {
    profile: Profile;
    experience: Experience[];
    education: Education[];
    projects: Projects[];
    skills: Skills[];
    custom: Custom;
  };
  
  export type ResumeKey = keyof Resume;
  