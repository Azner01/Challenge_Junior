import { Theme_Types } from "src/constants/IndexDarkMode";

export const ChangeDarkMode = (theme) => {
  const { Theme_Dark, Theme_Light } = Theme_Types;
  const root = window.document.documentElement;
  const isDark = theme === Theme_Dark;
  root.classList.remove(isDark ? Theme_Light : Theme_Dark);
  root.classList.add(theme);
};
