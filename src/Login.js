import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { userLogin } from "./reducer/postReducer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const list = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    if (list.user.list.token == null) {
      setErrors("No User Found");
    } else {
      localStorage.setItem("user-info", JSON.stringify(list.user.list));
      window.location = "/";
    }
  }, [list]);

  const signIn = async () => {
    let item = { email, password };
    if (!email || !password) {
      alert("Both Field are required");
    } else {
      dispatch(userLogin(item));
    }
  };
  const userRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <h1>Login Here!!!</h1>
      Username :
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Username"
      />
      <br />
      Password :
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={() => signIn()}>Sign In</button>
      <br />
      <button onClick={userRegister}>Register</button>
    </div>
  );
};

export default Login;
