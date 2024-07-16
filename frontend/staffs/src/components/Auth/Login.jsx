import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <form
        action=""
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        <div style={{ width: "90%" }}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            style={{ width: "100%" }}
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ width: "90%" }}>
          {" "}
          <label htmlFor="password">Password: </label>
          <input
            style={{ width: "100%" }}
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={loginHandler}>Login</button>
      </form>
    </div>
  );
}

export default Login;
