export type SettingsState = {
  themeColor: string;
  fontFamily: string;
  fontSize: string;
  documentSize: string;
  formToShow: {
    workExperience: boolean;
    education: boolean;
    projects: boolean;
    skills: boolean;
    custom: boolean;
  };
  formToHeading: {
    workExperience: string;
    education: string;
    projects: string;
    skills: string;
    custom: string;
  };
  formsOrder: ShowForm[];
  showBulletsPoints: {
    education: boolean;
    projects: boolean;
    skills: boolean;
    custom: boolean;
  };
};

export type ShowForm = keyof SettingsState["formToShow"];
export type FormWithBulletPoints = keyof SettingsState["showBulletsPoints"];
export type GeneralSettings = Exclude<
  keyof SettingsState,
  "formToShow" | "formToHeading" | "formsOrder" | "showBulletsPoints"
>;