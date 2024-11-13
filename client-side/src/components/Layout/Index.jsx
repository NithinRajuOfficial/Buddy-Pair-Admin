import { Outlet } from "react-router-dom";
import AdminSidebar from "./Sidebar/Index.jsx";

const AdminLayout = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-grow">
        {/* This will render the nested route like /admin/login */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
