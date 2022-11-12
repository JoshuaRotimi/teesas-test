import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/Auth";

const Header = () => {
  const navigate = useNavigate();
  const auth = JSON.parse(sessionStorage.getItem("auth"));
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser({ loggedIn: false }));
    navigate("/");
  };
  return (
    <div className="sticky max-w-[90%] bg-blue-200 mx-auto top-0 flex justify-between mb-7 items-center p-3">
      <h3>Tessas Test</h3>
      <div className="flex space-x-3 items-center">
        <p>Welcome, {auth.username}</p>
        <button
          className={
            "rounded-sm bg-red-400 p-2 transition-all text-white hover:bg-red-500"
          }
          onClick={logout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
