import { Outlet } from "react-router-dom/dist";
import AppBar from "../AppBar/AppBar";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
