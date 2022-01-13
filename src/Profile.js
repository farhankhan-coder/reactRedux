import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import ProfileUpdate from "./ProfileUpdate";
const Profile = () => {
  const [value, setValue] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState();
  const [password, setPassword] = useState("");

  fetch("/findAll", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => setValue(result));

  const selectData = (data) => {
    setId(data.id);
    setName(data.name);
    setEmail(data.email);
    setPassword(data.password);
  };

  const updateUser = async () => {
    let item = { name, email };
    console.log(item);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };

    console.log(item);
    console.log(id);

    const responce = await fetch(`profileUpdate/${id}`, requestOptions);
    const result = await responce.json();
    console.log(result);
  };

  return (
    <>
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
      />
      <br />
      <button onClick={updateUser}>Update</button>
      <br />
      <h1>User Profile</h1>
      <table cellSpacing="5" cellPadding="10" border="2">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          {value.map((curElem, index) => {
            return (
              <tr key={index}>
                <td>{curElem.id}</td>
                <td>{curElem.name}</td>
                <td>{curElem.email}</td>
                <td>{curElem.password}</td>
                <td>
                  <button onClick={() => selectData(curElem)}>Update</button>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </>
  );
};

export default Profile;
