import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const UserList = ({ DeleteUser, elm }) => {
  const navigate = useNavigate();
  // console.log(elm)
  return (
    <>
      {/* <div className=""> */}
      <div className="md:w-1/4 w-full  rounded-md p-2 ">
        <div className="w-full p-1 shadow relative bg-[#f3f3f3]">
          <p className="text-[1rem] font-normal mb-3 leading-tight truncate max-w-[80%]">
            {elm.firstName + " " + elm.lastName}
          </p>
          <div className="flex justify-between w-full ">
            <div className="">
              <p className=" text-[#9c9b9b] text-[0.8rem] leading-3">
                Phone Number :
              </p>
              <span className="text-[#585858] text-[0.8rem]  ">
                {elm.phoneNumber}
              </span>
            </div>
            <div className="">
              <p className=" text-[#9c9b9b] text-[0.8rem] leading-3">Age :</p>
              <span className="text-[#585858] text-[0.8rem]  ">{elm.age}</span>
            </div>
          </div>

          <div className="absolute top-2 right-2 flex  space-x-1 w-[20%] justify-end">
            <button
              className="p-0 pt-0 text-red-400 cursor-pointer"
              onClick={() => DeleteUser(elm._id)}
            >
              <AiFillDelete />{" "}
            </button>
            <button
              className="text-green-400 cursor-pointer"
              onClick={() => navigate(`/edit/:${elm.id}`, { state: elm })}
            >
              <AiFillEdit />{" "}
            </button>
          </div>
        </div>
      </div>
      {/* // </div> */}
    </>
  );
};

export default UserList;
