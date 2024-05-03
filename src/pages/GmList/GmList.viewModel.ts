import { useQuery } from "@tanstack/react-query";
import { apiUrl } from "../../constants/config";
import api from "../../constants/api";
import { useMemo } from "react";

export const useGmListViewModel = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["gmList"],
    queryFn: () => fetch(`${apiUrl}${api.gmList}`).then((res) => res.json()),
  });

  const gmList = useMemo(() => data?.players as string[], [data]);

  return {
    error,
    isPending,
    list: gmList,
  };
};
