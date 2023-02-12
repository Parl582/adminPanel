import React from "react";
import Menu from "../../../Components/Menu";
import Navbar from "../../../Components/Navbar";
import ScheduleIndex from "./AddUserIndex";

const AddUserHome = () => {
  const [menuOpen, setMenuOpen] = React.useState(true);
  return (
    <>
      <div className="w-full p-8 h-[100vh] ">
        <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <div className="flex">
          {menuOpen && <Menu />}
          <ScheduleIndex  />
        </div>
      </div>
    </>
  );
};

export default AddUserHome;
