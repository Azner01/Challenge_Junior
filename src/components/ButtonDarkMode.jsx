import { useEffect } from "react";
import useThemeStore from "src/store/DarkModeStore";
import { ChangeDarkMode } from "@components/DarkModeChange";

export default function DarkMode() {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    ChangeDarkMode(theme);
  }, [theme]);

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === "light" && <img src="/Dark.svg" alt="" className="w-8" />}
        {theme === "dark" && <img src="/Light.svg" alt="" className="w-8" />}
      </button>
    </div>
  );
}
