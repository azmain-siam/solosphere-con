import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="font-lato">
      {/* Navbar */}
      <Navbar />
      {/* Outlet */}
      <Outlet />

      {/* Footer */}
    </div>
  );
};

export default MainLayout;
