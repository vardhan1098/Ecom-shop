import React, { useState } from "react";
import { useEffect } from "react";

const Signup = () => {
  const [details, setDetails] = useState({
    fName: "",
    lName: "",
    username: "",
    password: "",
  });
  const { fName, lName, username, password } = details;

  const [read,setRead] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(fName && lName && username && password){
      localStorage.setItem("sasi",JSON.stringify(details))
    }else{
      alert("Please fill all the Details..")
    }
  };
useEffect(()=>{
  const ExisitingValues = JSON.parse(localStorage.getItem('sasi',details))||[];
setRead(ExisitingValues)
},[])

const handleRemove = () =>{
  const removed = localStorage.removeItem("sasi",details?.fName)
  setRead(removed)
}



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <dl>
          <dt>First Name:</dt>
          <dd>
            <input
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              name="fName"
              value={fName}
              required
            />
          </dd>
          <dt>Last Name:</dt>
          <dd>
            <input
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              name="lName"
              value={lName}
              required
            />
          </dd>
          <dt>Username:</dt>
          <dd>
            <input
              type="text"
              placeholder="Username"
              onChange={handleChange}
              name="username"
              value={username}
              required
            />
          </dd>
          <dt>Password:</dt>
          <dd>
            <input
              type="password"
              placeholder="Enter password"
              onChange={handleChange}
              name="password"
              value={password}
              required
            />
          </dd>
        </dl>
        <button type="submit">Signup</button>
      </form>

      <>
      {
      read?.fName && <p>{read?.fName}</p>
      }

      </>
    </div>
  );
};

export default Signup;
