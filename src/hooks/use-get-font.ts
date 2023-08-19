import { Inter, Roboto } from "next/font/google";

export type FontList = "roboto" | "inter";
export type ReturnThemeFontType = {
  primary: string;
  secondary: string;
};

export type ThemeFontTypeProps  = { primary: FontList; secondary: FontList }

export type ThemeFontType = (type: ThemeFontTypeProps) => ReturnThemeFontType;

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const useGetFont = (type: FontList) => {
  const fontFamily = {
    inter,
    roboto,
  };

  return fontFamily[type];
};
