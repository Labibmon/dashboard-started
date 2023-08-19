export type ColorsTheme = {
  primary: ColorsThemeEnum.Primary;
  secondary: ColorsThemeEnum.Secondary;
  background: ColorsThemeEnum.Background;
};

export enum ColorsThemeEnum {
  Primary = 'primary',
  Secondary = 'secondary',
  Background = 'background'
};

export type ColorType = keyof UseTheme;
export type ColorThemeType = keyof ColorsTheme;

export type UseTheme = {
  dark: ColorsTheme;
  light: ColorsTheme;
};
