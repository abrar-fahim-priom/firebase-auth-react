import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Home() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) {
    return <p>User info loading</p>;
  }
  return (
    <>
      <h1> Hello {user.email} </h1>
      <button onClick={handleLogout}> Logout</button>
    </>
  );
}
