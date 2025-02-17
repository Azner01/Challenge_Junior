import { create } from "zustand";
import { persist } from "zustand/middleware";
import {Theme_Types} from "src/constants/IndexDarkMode"

const {Theme_Light, Theme_Dark} = Theme_Types

const useThemeStore = create(
    persist(
        (set)=>({
            theme: Theme_Light,
            toggleTheme: () => 
                set((state)=>({
                    theme: state.theme === Theme_Light ? Theme_Dark : Theme_Light,
                })),
            }),
        {
           name:"theme",
        }
    )
);

export default useThemeStore;

