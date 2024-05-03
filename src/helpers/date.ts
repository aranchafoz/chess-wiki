import { formatDistance, fromUnixTime } from "date-fns";

export const getTimeAgo = (timestamp: number) => {
  const date = fromUnixTime(timestamp);
  const timeAgo = formatDistance(new Date(date), new Date(), {
    addSuffix: true,
  });

  return timeAgo;
};
