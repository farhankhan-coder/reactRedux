import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { userRegister } from "./reducer/postReducer";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const list = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    if (list.user.list.data == null) {
      setError(list.user.list.message);
    } else {
      navigate("/login");
    }
  }, [list]);

  const signUp = async () => {
    const item = { name, email, password };

    if (!name || !email || !password) {
      alert("feild required");
    } else {
      dispatch(userRegister(item));
    }
  };
  const loginUser = () => {
    navigate("login");
  };

  return (
    <>
      <h1>Register Here !!!</h1>
      Name :
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Email :
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> <br />
      Gender :
      <input
        type="text"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      /> <br />
      Contact :
      <input
        type="text"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      /> <br />
      Password :
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> <br />
      <h4>{error}</h4>
      {/* <br />
      Age :
      <input type="text" value={Age} onChange={(e) => setAge(e.target.value)} />
      <br /> */}
      <button onClick={signUp}>Sign Up</button>
      <br />
      <button onClick={loginUser}>Login Here</button>
    </>
  );
};

export default Register;
