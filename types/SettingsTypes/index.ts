
export type Settings = {
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
  
  export type ShowForm = keyof Settings["formToShow"];
  export type FormWithBulletPoints = keyof Settings["showBulletsPoints"];
  export type GeneralSettings = Exclude<
    keyof Settings,
    "formToShow" | "formToHeading" | "formsOrder" | "showBulletsPoints"
  >;
  
  export type SettingsAction = {
    changeSettings: (field: GeneralSettings, value: string) => void;
    changeShowForm: (form: ShowForm, value: boolean) => void;
    changeFormHeading: (form: ShowForm, value: string) => void;
    changeFormOrder: (form: ShowForm, type: "up" | "down") => void;
    changeBulletPoints: (form: FormWithBulletPoints, value: boolean) => void;
    setSetting: (settings: Settings) => void;
  };