import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ menuOpen }) => {
  return (
    <>
      <div className="md:w-[20%] md:relative absolute  p-0 m-0 h-[100vh] border-r-2   ">
        <div className="flex h-full pt-9 fixed md:w-[10%] w-full flex-col space-y-4 bg-[#fff]">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 font-bold text-[20px] "
                : "font-bold text-[#050505] "
            }
          >
            User Details
          </NavLink>
     
        </div>
      </div>
    </>
  );
};

export default Menu;
