import React, { useState } from "react";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("username", username);
    setUser(username);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>User Login Form</h4>
          <form onSubmit={handleLogin}>
            <div className="form-group d-flex">
              <input
                type="text"
                placeholder="Enter user name"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
