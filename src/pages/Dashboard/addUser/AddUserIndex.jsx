import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { createUser, UpdateUser } from "../../../redux/userSlice";

const AddUserIndex = ({ add }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [userInfo, setUserInfo] = React.useState({
    firstName: location?.state?.firstName,
    lastName: location?.state?.lastName,
    phoneNumber: location?.state?.phoneNumber,
    age: location?.state?.age,
  });
  let ids = location?.state?._id;

  const HandleChange = (e) => {
    const value = e.target.value;
    setUserInfo({ ...userInfo, [e.target.name]: value });
  };

  const error = useSelector((state) => ({ ...state.user }));

  const CreateUser = (post) => {
    if (userInfo.firstName === undefined || userInfo.firstName === "") {
      return alert("Please Fill the FirstName");
    }
    if (userInfo.lastName === undefined || userInfo.lastName === "") {
      return alert("Please Fill the LastName");
    }
    if (userInfo.phoneNumber === undefined) {
      return alert("Please Fill the PhoneNumber");
    }
    if (userInfo.phoneNumber === NaN) {
      return alert("PhoneNumber must be a Number");
    }
    if (userInfo.phoneNumber.length !== 10) {
      return alert("PhoneNumber must be 10 digit");
    }
    if (userInfo.age === NaN) {
      return alert("Age must be a Number");
    }
    if (userInfo.age === undefined || userInfo.age === "") {
      return alert("Please Fill the Age");
    }
    post === undefined
      ? dispatch(createUser({ userInfo }))
      : dispatch(UpdateUser({ userInfo, id: ids }));

    if (!error.error) {
      alert("SuccessFull");
      navigate("/home");
    }
  };

  return (
    <>
      <div className="p-6">
        <div className="w-full space-y-5">
          <h1 className="text-[20px] font-semibold">Add New User</h1>
          {/* <form action=""> */}
          <div className="flex  space-y-3 flex-wrap">
            <div className=" py-1 px-3 md:w-[60%] w-full">
              <h1 className="text-[15px] text-[gray]">FastName</h1>
              <input
                type="text"
                name="firstName"
                value={userInfo?.firstName}
                className="w-full outline-none border-b-2"
                required
                onChange={HandleChange}
              />
            </div>
            <div className=" py-1 px-3 md:w-[60%] w-full">
              <h1 className="text-[15px] text-[gray]">LastName</h1>
              <input
                type="text"
                name="lastName"
                value={userInfo?.lastName}
                className="w-full outline-none border-b-2"
                onChange={HandleChange}
                required
              />
            </div>
            <div className=" py-1 px-3 md:w-[60%] w-full">
              <h1 className="text-[15px] text-[gray]">Phone-Number</h1>
              <input
                type="number"
                name="phoneNumber"
                value={userInfo?.phoneNumber}
                className="w-full outline-none border-b-2"
                min="10"
                max="10"
                onChange={HandleChange}
                required
              />
            </div>
            <div className=" py-1 px-3 md:w-[60%] w-full">
              <h1 className="text-[15px] text-[gray]">Age</h1>
              <input
                type="number"
                name="age"
                onChange={HandleChange}
                value={userInfo?.age}
                className="w-full outline-none border-b-2"
                required
              />
            </div>
          </div>

          <div className="w-full text-center space-x-5 mt-8">
            <input
              type="submit"
              value="Create"
              className="py-3 px-9 rounded-[30px] text-[#fff] bg-[#FE7524] cursor-pointer"
              onClick={() => CreateUser(add)}
            ></input>
          </div>
          {/* </form> */}
        </div>
      </div>
    </>
  );
};

export default AddUserIndex;
