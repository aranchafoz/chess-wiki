import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../constants/config";
import api from "../../constants/api";
import { Player } from "./GmProfile.types";
import { getIntervalToDuration } from "../../helpers/date";
import { useEffect, useState } from "react";

export const useGmProfileViewModel = () => {
  const { username } = useParams<{ username: string }>();
  const [timeSinceLastOnline, setTimeSinceLastOnline] = useState("-");

  const { isPending, isFetching, error, data } = useQuery<Player>({
    enabled: !!username,
    queryKey: ["gmList"],
    queryFn: () =>
      fetch(`${apiUrl}${api.gmProfile(username ?? "")}`).then((res) =>
        res.json()
      ),
    refetchInterval: 1000,
  });

  useEffect(() => {
    setTimeSinceLastOnline(getIntervalToDuration(data?.last_online ?? 0));
  }, [isFetching, data?.last_online]);

  return {
    error,
    isLoading: isPending,
    profile: data,
    timeSinceLastOnline,
  };
};
