import React, { useState,useContext } from "react";
import { useNavigate,Link } from "react-router-dom";
import UserContext from '../../store/UserContext'

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userCtx = useContext(UserContext)
  const navigate = useNavigate();

  const loginHandler = (e) => {
  e.preventDefault();
    userCtx.logUserIn({username,password},()=>navigate("/"));
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
        <Link to={'/signup'}>Not have an account? click here</Link>
      <form
        action=""
        onSubmit={loginHandler}
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
