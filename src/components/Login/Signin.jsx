import React, { useState } from "react";
import Signup from "./Signup";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [signin, setSignin] = useState({ username: "", password: "" });
  const [signup, setSignup] = useState({
    fName: "",
    lName: "",
    username: "",
    password: "",
  });

  const handleSigninChange = (e) => {
    const { name, value } = e.target;
    setSignin({ ...signin, [name]: value });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  const handleSigninSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored users
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(
      (user) => user.username === signin.username
    );

    if (!user) {
      alert("User not found. Please sign up first.");
      return;
    }

    // Validate password
    const hashedPassword = btoa(signin.password);
    if (user.password !== hashedPassword) {
      alert("Incorrect password. Please try again.");
      return;
    }

    // Store user session
    localStorage.setItem("authenticatedUser", JSON.stringify(user));
    alert("Signin successful!");
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Check if username already exists
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some(
      (user) => user.username === signup.username
    );

    if (userExists) {
      alert("Username already exists. Please choose a different one.");
      return;
    }

    // Hash password and store user details
    const hashedPassword = btoa(signup.password);
    const newUser = { ...signup, password: hashedPassword };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("Signup successful! You can now sign in.");
    setIsSignup(false);
  };

  return (
    <div>
      {isSignup ? (
        <>
          <Signup />
        </>
      ) : (
        <form onSubmit={handleSigninSubmit}>
          <dl>
            <dt>Username:</dt>
            <dd>
              <input
                type="text"
                placeholder="Enter username"
                name="username"
                value={signin.username}
                onChange={handleSigninChange}
                required
              />
            </dd>
            <dt>Password:</dt>
            <dd>
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                value={signin.password}
                onChange={handleSigninChange}
                required
              />
            </dd>
          </dl>
          <button type="submit">Signin</button>
          <span
            onClick={() => setIsSignup(true)}
            style={{ marginLeft: "10px", cursor: "pointer" }}
          >
            New user? Signup
          </span>
        </form>
      )}
    </div>
  );
};

export default Auth;
