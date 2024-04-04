import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Reset from "./page/Reset";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route element={<PrivateRoutes />}>
            {/* protected routing so that if the user isnt logged in, he cant access home, will be redirected to login page */}
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </div>
    </Router>
  );
}
