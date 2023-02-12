import React from "react";
import Menu from "../../../Components/Menu";
import Navbar from "../../../Components/Navbar";
import UserDetails from "./DashBoardLAnding";

const MainHome = () => {
  const [menuOpen, setMenuOpen] = React.useState(true);
  return (
    <>
      <div className="w-full p-8 h-[100vh] ">
        <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <div className="flex">
          {menuOpen && <Menu />}
          <UserDetails />
        </div>
      </div>
    </>
  );
};

export default MainHome;
