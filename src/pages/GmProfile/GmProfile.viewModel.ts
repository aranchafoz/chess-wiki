import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../constants/config";
import api from "../../constants/api";
import { Player } from "./GmProfile.types";
import { useMemo } from "react";
import { getTimeAgo } from "../../helpers/date";

export const useGmProfileViewModel = () => {
  const { username } = useParams<{ username: string }>();

  const { isPending, isFetching, error, data } = useQuery<Player>({
    enabled: !!username,
    queryKey: ["gmList"],
    queryFn: () =>
      fetch(`${apiUrl}${api.gmProfile(username ?? "")}`).then((res) =>
        res.json()
      ),
  });

  const lastOnlineTimeAgo = useMemo(() => {
    if (!data || !data.last_online) return;
    return getTimeAgo(data.last_online);
  }, [data]);

  return {
    error,
    isLoading: isPending || isFetching,
    profile: data,
    lastOnlineTimeAgo,
  };
};
