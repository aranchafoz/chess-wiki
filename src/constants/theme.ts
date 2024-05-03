import { DefaultTheme } from "styled-components";

export const paletteColors = {
  blue100: "#DDF0FF",
  blue200: "#CDE9FE",
  blue500: "#2689EF",
  blue600: "#1465CA",
  blue700: "#0C378A",
  grey100: "#F6F6F6",
  grey200: "#E0E2E5",
  grey500: "#9098A1",
  grey600: "#606C78",
  grey900: "#1F2228",
  white: "#FFFFFF",
};

const colors = {
  ...paletteColors,
  textPrimary: paletteColors.grey900,
  textSecondary: paletteColors.grey600,
};

const spaces = [
  0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96,
] as const;
export type Spaces = typeof spaces;

const fontSizes = [12, 14, 16, 20, 24, 36, 42] as const;
export type FontSizes = typeof fontSizes;

const lineHeights = [14, 20, 22, 26, 30, 42, 48] as const;
export type LineHeights = typeof lineHeights;

const fontWeights = [400, 600, 800] as const;
export type FontWeights = typeof fontWeights;

const borderRadii = [2, 4, 8] as const;
export type BorderRadii = typeof borderRadii;

const theme: DefaultTheme = {
  borderRadii,
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  spaces,
};

export default theme;
