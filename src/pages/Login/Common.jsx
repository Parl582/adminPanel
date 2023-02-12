import React from "react";
import LoginImg from "../../images/project.png";
import { GrGoogle } from "react-icons/gr";
import { ImFacebook } from "react-icons/im";
import { BiMailSend } from "react-icons/bi";
import { BsKey } from "react-icons/bs";

const CommonLog = ({ data, PageChange }) => {
  const { PageName, btnText, newLink, newhere } = data;
  const [showPass, setShowPass] = React.useState(false);
  const PtoText = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      <div className="w-full h-[100vh] bg-[#fff]">
        <div className="w-full h-full flex flex-wrap ">
          <div className="md:w-1/2 md:block hidden h-full overflow-hidden ">
            <img src={LoginImg} alt="" className="w-full h-full " />
          </div>
          <div
            className="md:w-1/2 w-full h-full flex flex-col items-center 
          justify-center space-y-3 border-[1px] md:px-9 px-4 relative "
          >
            <h1 className="text-[48px] font-extrabold">
              <span className="text-[#FE7524]">Dash</span>Board
            </h1>
            <h2 className="text-[22px] font-semibold">{PageName} </h2>
            <div className="space-y-2 w-[80%]">
              <span className="text-lg">Email Address</span>
              <div className="w-full flex items-center border-[1px] border-[gray] rounded-[30px] overflow-hidden ">
                <input
                  type="email"
                  placeholder="Example@rocket.mail"
                  className="w-[90%] py-3 px-7 outline-none"
                />
                <BiMailSend className="text-[20px]" />
              </div>
            </div>
            <div className="space-y-2 w-[80%]">
              <span className="text-lg">Password</span>
              <div className="w-full flex items-center border-[1px] border-[gray] rounded-[30px] overflow-hidden ">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Your password"
                  className="w-[90%] py-3 px-7 outline-none"
                />
                <BsKey
                  className="text-[20px] cursor-pointer"
                  onClick={PtoText}
                />
              </div>
            </div>
            <button
              onClick={PageChange}
              className="w-[80%] py-2 bg-[#FE7524] rounded-[30px] text-[#fff] text-[20px]"
            >
              {btnText}
            </button>

            <p className="flex items-center font-semibold">
              {newhere}
              <span className="text-[#fe7524] ml-2 cursor-pointer">
                {newLink}
              </span>
            </p>

            {/* TODO: add line between or  */}
            <div className="flex">
              <p>Or</p>
            </div>
            <button className="w-[80%] py-2 border-[2px] flex items-center justify-center  rounded-[30px] text-[#100f0f] text-[18px] font-semibold ">
              <GrGoogle className="mr-3" /> Sign in with Google
            </button>
            <button className="w-[80%] py-2 border-[2px]  flex items-center justify-center  rounded-[30px] text-[#101010] text-[18px] font-semibold">
              <ImFacebook className="mr-3" /> Sign in with facebook
              {/* 8011601436 */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonLog;
