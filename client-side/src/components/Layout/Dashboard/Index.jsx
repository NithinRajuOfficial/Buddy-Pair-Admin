import { onClose } from "../../../Redux/Reducers/isOpenSlice";
import DialogBox from "../../Common/Dialog/Index";
import Login from "../Login/Index";
import { useDispatch, useSelector } from "react-redux";

const AdminDashboard = () => {
  const isOpen = useSelector((state) => state.isOpen?.status);
  const dispatch = useDispatch();
  return (
    <article className="p-6">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <p>Welcome to the Admin Dashboard!</p>
      <DialogBox scale={{ s: "sm", m: "md" }} isOpen={isOpen}>
        <Login onClose={() => dispatch(onClose())} />
      </DialogBox>
    </article>
  );
};

export default AdminDashboard;
