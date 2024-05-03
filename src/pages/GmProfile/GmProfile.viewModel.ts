import { useParams } from "react-router-dom";

export const useGmProfileViewModel = () => {
  const { username } = useParams<{ username: string }>();

  return {
    profile: { username },
  };
};
