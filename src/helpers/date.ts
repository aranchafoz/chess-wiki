import { differenceInHours, fromUnixTime, intervalToDuration } from "date-fns";

export const getIntervalToDuration = (timestamp: number) => {
  const date = fromUnixTime(timestamp);
  const interval = intervalToDuration({
    start: date,
    end: new Date(),
  });
  const diffHours = differenceInHours(new Date(), date);

  return `${diffHours}:${interval.minutes}:${interval.seconds ?? 0}`;
};
