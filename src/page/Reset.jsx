import { useState } from "react";
import { NavLink } from "react-router-dom";
import { resetPasswordEmail } from "../firebase";

export default function Reset() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Reset Your Password</h1>
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

        <button
          type="submit"
          onClick={() => resetPasswordEmail(email)}
          className="bg-black text-white p-1 rounded-md m-auto"
        >
          Send Email with Verification Link
        </button>
      </form>

      <p className="my-2">
        Already Have an Account?{" "}
        <NavLink to="/login" className="underline">
          Sign In
        </NavLink>
      </p>
    </div>
  );
}
