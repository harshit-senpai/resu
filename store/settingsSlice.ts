import {
  FormWithBulletPoints,
  GeneralSettings,
  SettingsState,
  ShowForm,
} from "@/types/SettingsTypes";
import { StateCreator } from "zustand";

export const initialSettings: SettingsState = {
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
export type SettingsAction = {
  changeSettings: (field: GeneralSettings, value: string) => void;
  changeShowForm: (form: ShowForm, value: boolean) => void;
  changeFormHeading: (form: ShowForm, value: string) => void;
  changeFormOrder: (form: ShowForm, type: "up" | "down") => void;
  changeBulletPoints: (form: FormWithBulletPoints, value: boolean) => void;
  setSetting: (settings: SettingsState) => void;
};

export type settingsSliceType = SettingsState & SettingsAction;

export const createSettingsSlice: StateCreator<
  settingsSliceType,
  [],
  [],
  settingsSliceType
> = (set) => ({
  ...initialSettings,
  changeSettings: (field, value) =>
    set((state) => ({
      ...state,
      [field]: value,
    })),
  changeShowForm: (form, value) =>
    set((state) => ({
      ...state,
      formToShow: {
        ...state.formToShow,
        [form]: value,
      },
    })),
  changeFormHeading: (form, value) =>
    set((state) => ({
      ...state,
      formToHeading: {
        ...state.formToHeading,
        [form]: value,
      },
    })),
  changeFormOrder: (form, type) =>
    set((state) => {
      const lastIndex = state.formsOrder.length - 1;
      const position = state.formsOrder.indexOf(form);
      const newPosition = type === "up" ? position - 1 : position + 1;
      if (position >= 0 && newPosition <= lastIndex) {
        const newFormsOrder = [...state.formsOrder];
        [newFormsOrder[position], newFormsOrder[newPosition]] = [
          newFormsOrder[newPosition],
          newFormsOrder[position],
        ];
        return { ...state, formsOrder: newFormsOrder };
      }
      return state;
    }),
  changeBulletPoints: (form, value) =>
    set((state) => ({
      ...state,
      showBulletsPoints: {
        ...state.showBulletsPoints,
        [form]: value,
      },
    })),
  setSetting: (settings) => set((state) => ({ ...settings })),
});
