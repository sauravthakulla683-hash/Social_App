import React from "react";
import Sigin from "./pages/Sigin";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sigin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
