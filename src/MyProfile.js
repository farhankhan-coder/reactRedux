import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { profileView } from "./reducer/postReducer";

const MyProfile = () => {
  const [getData, setGetData] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const list = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    setId(list.user.list.id);
    setName(list.user.list.name);
    setEmail(list.user.list.email);
  }, [list]);

  const userData = JSON.parse(localStorage.getItem("user-info"));
  useEffect(() => {
    if (userData) {
      dispatch(profileView(userData.token));
    }
  }, []);

  const userLogout = () => {
    localStorage.removeItem("user-info");
    window.location = "/";
  };

  return (
    <div>
      <h1>MyProfile</h1>
      <h3>Id : {id}</h3>
      <h3>Name : {name}</h3>
      <h3>Email : {email}</h3>
      <button onClick={userLogout}>logout</button>
    </div>
  );
};

export default MyProfile;