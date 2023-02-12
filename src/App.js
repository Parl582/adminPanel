import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainHome from "./pages/Dashboard/dashboardHome/MainHome";
import ScheduleHome from "./pages/Dashboard/addUser/AdduserHome";
import Login from "./pages/Login/Login";

import AddUserIndex from "./pages/Dashboard/addUser/AddUserIndex";
import UpdateUser from "./pages/Dashboard/addUser/UpdateUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* ===========Dashboard-routes=============== */}
        <Route path="/home" element={<MainHome />} />
        <Route path="/schedule" element={<ScheduleHome />} />
        <Route path="/edit/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
