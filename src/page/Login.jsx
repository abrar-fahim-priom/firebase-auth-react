import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  loginWithEmailandPassword,
  signInWithFB,
  signInWithGoogle,
} from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await loginWithEmailandPassword(email, password);
      console.log(res);
      navigate("/home");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  const SocialSignIn = async (website) => {
    if (website == "google") {
      try {
        const user = await signInWithGoogle();
        console.log(user);
        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    }
    if (website == "fb") {
      try {
        const user = await signInWithFB();
        console.log(user);
        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Login</h1>
      <form className="flex flex-col">
        <div className="my-1">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
            className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
          />
        </div>
        <button
          type="submit"
          onClick={handleLogin}
          className="bg-black text-white p-1 rounded-md m-auto"
        >
          Login
        </button>
      </form>

      <button
        onClick={() => SocialSignIn("google")}
        className="bg-yellow-400 m-2 text-white p-1 rounded-md "
      >
        Login with Google
      </button>

      <button
        onClick={() => SocialSignIn("fb")}
        className="bg-blue-500 m-2 text-white p-1 rounded-md "
      >
        Login with Facebook
      </button>

      {error && (
        <div className=" bg-red-300 rounded-md m-2 text-red-700 ">{error}</div>
      )}
      <p className="my-2">
        Forgot Password?{" "}
        <NavLink to="/reset" className="underline">
          Reset
        </NavLink>
      </p>

      <p className="my-2 text-green-500">
        Don't have an account?{" "}
        <NavLink to="/register" className="underline">
          Create an account
        </NavLink>
      </p>
    </div>
  );
};

export default Login;
