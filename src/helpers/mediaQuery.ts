import { breakpoints } from "../constants/breakpoints";

export type breakpointType = "sm" | "md" | "lg" | "xl" | "xxl";

export const aboveQuery = (breakpoint: breakpointType) =>
  `screen and (min-width: ${breakpoints[breakpoint]}px)`;

// above("sm") === tablet and greater
export const above = (breakpoint: breakpointType) => () =>
  `@media ${aboveQuery(breakpoint)}`;

export const belowQuery = (breakpoint: breakpointType) =>
  `screen and (max-width: ${breakpoints[breakpoint] - 1}px)`;

// below("md") === mobile and tablet
export const below = (breakpoint: breakpointType) => () =>
  `@media ${belowQuery(breakpoint)}`;

export const betweenQuery = (
  breakpointFrom: breakpointType,
  breakpointTo: breakpointType
) =>
  `screen and (min-width: ${breakpoints[breakpointFrom]}px) and (max-width: ${
    breakpoints[breakpointTo] - 1
  }px)`;

export const between =
  (breakpointFrom: breakpointType, breakpointTo: breakpointType) => () =>
    `@media ${betweenQuery(breakpointFrom, breakpointTo)}`;

export const smallScreen = () => below("sm");
// including large in the medium range because of backwards compatibility
export const smallAndMediumScreen = () => below("md");
export const mediumScreen = () => between("sm", "md");
export const mediumAndWideScreen = () => above("sm");
export const wideScreen = () => above("md");
