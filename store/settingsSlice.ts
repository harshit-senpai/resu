import { Settings } from "@/types/SettingsTypes";
import { StateCreator } from "zustand";

export const initialSettings: Settings = {
  themeColor: "#38dbdf8",
  fontFamily: "Roboto",
  fontSize: "11",
  documentSize: "Letter",
  formToShow: {
    workExperience: true,
    education: true,
    projects: true,
    skills: true,
    custom: true,
  },
  formToHeading: {
    workExperience: "Work Experience",
    education: "Education",
    projects: "Projects",
    skills: "Skills",
    custom: "Custom",
  },
  formsOrder: ["workExperience", "education", "projects", "skills", "custom"],
  showBulletsPoints: {
    education: true,
    projects: true,
    skills: true,
    custom: true,
  },
};
