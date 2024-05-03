import { useNavigate } from "react-router-dom";
import { useGmListViewModel } from "./GmList.viewModel";
import appRoutes from "../../constants/appRoutes";

export const GmList = () => {
  const navigate = useNavigate();

  const { error, isPending, list } = useGmListViewModel();

  const handleGmClick = (username: string) => {
    navigate(appRoutes.gmProfile(username));
  };

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>{"An error has occurred: " + error.message}</p>;

  return (
    <ol>
      {list.map((username, index) => (
        <li key={index} onClick={() => handleGmClick(username)}>
          {username}
        </li>
      ))}
    </ol>
  );
};
