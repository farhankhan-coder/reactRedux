import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import MyProfile from "./MyProfile";
import ProfileUpdate from "./ProfileUpdate";
import SpaceshipConfigurator from "./SpaceshipConfigurator";
import NotFound from "./NotFound";

function App() {
  const getData = localStorage.getItem("user-info");
  // const removeData = localStorage.removeItem("user-info");

  return (
    <>
      <Routes>
        {getData ? (
          <>
            <Route exact path="/" element={<MyProfile />} />
            <Route exact path="/my-profile" element={<MyProfile />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/update" element={<ProfileUpdate />} />
            <Route exact path="testTask" element={<SpaceshipConfigurator />} />
          </>
        ) : (
          <>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
