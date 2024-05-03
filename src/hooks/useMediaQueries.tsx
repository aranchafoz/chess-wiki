import React, { createContext, useContext } from "react";
import useMatchMedia from "react-use-match-media";

import { aboveQuery, belowQuery, breakpointType } from "../helpers/mediaQuery";

type MediaQueriesContextType = {
  isAbove: { [key: string]: boolean };
  isBelow: { [key: string]: boolean };
  isBetween: (
    breakpointFrom: breakpointType,
    breakpointTo: breakpointType
  ) => boolean;
};

const MediaQueriesContext = createContext<MediaQueriesContextType>({
  isAbove: {},
  isBelow: {},
  isBetween: () => false,
});

export const MediaQueriesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isAbove = {
    sm: useMatchMedia(aboveQuery("sm")),
    md: useMatchMedia(aboveQuery("md")),
    lg: useMatchMedia(aboveQuery("lg")),
    xl: useMatchMedia(aboveQuery("xl")),
    xxl: useMatchMedia(aboveQuery("xxl")),
  };

  const isBelow = {
    sm: useMatchMedia(belowQuery("sm")),
    md: useMatchMedia(belowQuery("md")),
    lg: useMatchMedia(belowQuery("lg")),
    xl: useMatchMedia(belowQuery("xl")),
    xxl: useMatchMedia(belowQuery("xxl")),
  };

  const isBetween = (
    breakpointFrom: breakpointType,
    breakpointTo: breakpointType
  ) => isAbove[breakpointFrom] && isBelow[breakpointTo];

  return (
    <MediaQueriesContext.Provider
      value={{
        isAbove,
        isBelow,
        isBetween,
      }}
    >
      {children}
    </MediaQueriesContext.Provider>
  );
};

export const MediaQueriesConsumer = MediaQueriesContext.Consumer;

export const useMediaQueries = () => useContext(MediaQueriesContext);
