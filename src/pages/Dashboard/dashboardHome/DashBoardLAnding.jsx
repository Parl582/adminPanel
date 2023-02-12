import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { DeleteUser, GetUser } from "../../../redux/userSlice";
import UserList from "./UserList";

function DashBoardLAnding() {
  const navigate = useNavigate();
  // const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userInfo?.data);

  const DeleteUsers = async (id) => {
    try {
      await dispatch(DeleteUser({ id }));
      await dispatch(GetUser());
    } catch (e) {}
  };

  // console.log(userData);

  useEffect(() => {
    dispatch(GetUser());
  }, []);

  return (
    <>
      {/* DashBoardLAnding header  */}
      <div className="w-full overflow-y-auto h-[calc(100%-70px)] p-5 mt-6 space-y-5">
        <div className="space-y-4 mb-9">
          <h1 className="font-semibold text-lg">All Users</h1>
          <div className="flex justify-between items-center w-full flex-wrap">
            <div className="flex space-x-6 text-base py-4">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "border-b-2  border-[#FE7524] py-1 " : ""
                }
              >
                User Details
              </NavLink>
            </div>
            <button
              className="bg-[#FE7524] text-[#fff] w-[172.62px] h-[58.52px] rounded-[30px]"
              onClick={() => navigate("/schedule")}
            >
              + Add User
            </button>
          </div>
        </div>
        <div className="flex full flex-wrap">
          {userData?.map((elm) => (
            <UserList key={elm._id} DeleteUser={DeleteUsers} elm={elm} />
          ))}
        </div>
      </div>
    </>
  );
}

export default DashBoardLAnding;
