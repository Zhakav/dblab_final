import { React, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import AddStaff from "./components/addStaff";
import UpdateStaff from "./components/updateStaff";
import Login from "./components/Auth/Login";
import AddDeleteUser from "./components/Auth/AddDeleteUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add" element={<AddStaff />} />
      <Route path="/update/:staffId" element={<UpdateStaff />} />
      <Route path="/addDeleteUser" element={<AddDeleteUser />} />
    </Routes>
  );
}

export default App;
