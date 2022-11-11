import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Auth = () => {
  const [newUser, setNewUser] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [details, setDetails] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  const login = () => {
    setError("");
    setMessage("");
    if (newUser) {
      sessionStorage.setItem("auth", JSON.stringify(details));
      setMessage("Profile created. You can now log in.");
      setDetails({ username: "", password: "" });
      setNewUser(!newUser);
    } else {
      const credentials = JSON.parse(sessionStorage.getItem("auth"));
      if (!credentials) {
        setError("User not found.");
      } else if (
        credentials.username !== details.username ||
        credentials.password !== details.password
      ) {
        setError("Wrong username or password.");
      } else {
        navigate("/home");
      }
    }
  };
  return (
    <div
      className={
        "flex h-screen w-full bg-gray-300 justify-center items-center mx-auto"
      }
    >
      <div
        className={
          "flex flex-col bg-blue-200 max-w-[500px] space-y-4 shadow p-3 my-2"
        }
      >
        <h2 className="text-2xl font-semibold text-center">Teesas Test</h2>
        {message && <p className={"text-center text-green-800"}>{message}</p>}
        <div className={"flex space-x-3 items-center"}>
          <label htmlFor="username">Username: </label>
          <input
            name={"username"}
            className={"flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"}
            value={details.username}
            type="text"
            placeholder={"Username"}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex space-x-3 items-center">
          <label htmlFor="password">Password: </label>
          <input
            name={"password"}
            value={details.password}
            className={"flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"}
            type="password"
            placeholder={"Password"}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button
          type={"submit"}
          className={"rounded-sm bg-blue-400 p-2 text-white hover:bg-blue-500"}
          onClick={(e) => login(e)}
        >
          {newUser ? "Register" : "Login"}
        </button>
        {error && <p className={"text-center text-red-400"}>{error}</p>}
        {newUser ? (
          <p className={"text-center"}>
            Already have an account?{" "}
            <span
              onClick={() => setNewUser(!newUser)}
              className={"text-semibold underline cursor-pointer"}
            >
              Login
            </span>
          </p>
        ) : (
          <p className={"text-center"}>
            Don't have an account?{" "}
            <span
              onClick={() => setNewUser(!newUser)}
              className={"text-semibold underline cursor-pointer"}
            >
              Register
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
