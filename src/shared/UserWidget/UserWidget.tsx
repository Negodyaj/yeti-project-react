import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const UserWidget = () => {
  const userWidgetState = useSelector((state: RootState) => state.userWidget);

  return (
    <div className="user-info">
      <img src={userWidgetState.avatarLink} alt="Avatar" />
      <div>{userWidgetState.name}</div>
      <div>{userWidgetState.status}</div>
    </div>
  );
}