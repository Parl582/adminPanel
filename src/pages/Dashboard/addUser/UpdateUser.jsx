import React from "react";

import Menu from "../../../Components/Menu";
import Navbar from "../../../Components/Navbar";
import AddUserIndex from "./AddUserIndex";

const UpdateUser = () => {
  const [menuOpen, setMenuOpen] = React.useState(true);
  return (
    <div className="w-full p-8 h-[100vh] ">
      <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <div className="flex">
        {menuOpen && <Menu />}
        <AddUserIndex add={"update"} />
      </div>
    </div>
  );
};

export default UpdateUser;
