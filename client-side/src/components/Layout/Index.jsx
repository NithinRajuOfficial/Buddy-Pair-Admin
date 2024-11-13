import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Index.jsx";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Layout;
