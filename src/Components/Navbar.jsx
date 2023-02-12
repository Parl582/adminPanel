
import React from "react";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoIosArrowDown, IoMdNotificationsOutline } from "react-icons/io";


const Navbar = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <div className="w-full h-[70px] bg-[#fff]  rounded-[30px] shadow-2xl sticky top-2 z-50">
        <div className="w-full flex items-center px-8 h-full justify-between">
          {/* //leftside  */}
          <div className="flex items-center  justify-between md:w-1/2">
            {/* logo div  */}
            <div className="flex items-center space-x-3">
              <HiOutlineMenuAlt1
                className="text-[30px] cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
              />
              <h1 className="flex text-[30px] font-extrabold">
                <span className="text-[#FE7524]">Dash</span>Board
              </h1>
            </div>
            {/* search div  */}
            <div className="items-center ml-[30px] md:w-[90%] border-2 md:flex hidden   px-[20px] rounded-[50px] space-x-4 overflow-hidden">
              <input
                type="text"
                placeholder="Search ..."
                className="border-0 outline-none w-full py-2 px-3"
              />
              <BiSearch className="text-[20px] " />
            </div>
          </div>

          {/* //rightside  */}
          <div className="md:w-1/2  md:space-x-4 space-x-5  flex items-center justify-end ">
            <div className="flex items-center space-x-5">
              <IoMdNotificationsOutline className="text-[30px] text-[#FE7524] cursor-pointer" />
              <p className="md:flex hidden text-[#7C7C7C] font-[600] cursor-pointer">
                Help & FAQ
              </p>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer ">
              <img
                className="w-[50px]  h-[50px] rounded-full p-1 object-cover "
                src="https://cdn.profoto.com/cdn/0532192/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-3840x2160px-2.jpg?width=1280&quality=75&format=jpg&mode=crop&height=1280"
                alt=""
              />
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
