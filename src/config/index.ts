import { createContext } from "react"
import { FontList, ThemeFontType, useGetFont } from "@/hooks/use-get-font"
import { LayoutPropType } from "@/types/layout"

type ThemeContext = {
  data: LayoutPropType,
  font: {
    primary: FontList,
    secondary: FontList
  }
  colors: {
    dark: {
      primary: string
      secondary: string
    },
    light: {
      primary: string
      secondary: string
    }
  }
}

const ThemeContextDefaultValue: ThemeContext = {
  data: {
    layoutType: undefined,
    lang: ``,
    description: ``,
    author: '',
    title: '',
    meta: [
      {
        name: '',
        content: ''
      },
    ],
  },
  font: {
    primary: 'inter',
    secondary: 'roboto'
  },
  colors: {
    dark: {
      primary: '',
      secondary: '',
    },
    light: {
      primary: '',
      secondary: ''
    }
  }
}

export const ThemeFont: ThemeFontType = ({
  primary,
  secondary,
}) => {
  const isPrimary =  useGetFont(primary)
  const isSecondary = useGetFont(secondary)

  return {
    primary: isPrimary.className,
    secondary: isSecondary.className
  }
}

export const ThemeContext = createContext<ThemeContext>(ThemeContextDefaultValue);
