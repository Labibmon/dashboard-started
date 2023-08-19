import { ColorsTheme, ColorType, UseTheme } from "@/types/color-theme";

export const useTheme = (theme: UseTheme) => {
  const setStyleAttribute = (type: ColorType) => {
    let color: keyof ColorsTheme;
    document.documentElement.setAttribute("data-theme", type);

    for (color in theme[type]) {
      document.documentElement.style.setProperty(
        `--${color}`,
        theme[type][color]
      );
    }
  };

  if (typeof window !== "undefined") {
    let color: keyof ColorsTheme;

    let dark: boolean =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    // local storage is used to override OS theme settings
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "dark") {
        setStyleAttribute("dark");
      } else {
        setStyleAttribute("light");
      }
    } else if (!window.matchMedia) {
      //OS theme setting detected as dark
      for (color in theme.light) {
        setStyleAttribute("light");
      }
    } else if (dark) {
      setStyleAttribute("dark");
    } else {
      //OS theme setting detected as light
      setStyleAttribute("light");
    }
  }
};
