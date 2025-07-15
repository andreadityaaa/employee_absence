import React, { useContext, useEffect } from "react";
import { LoginContext } from "../context/login";

function Login() {
  const loginContext = useContext(LoginContext)

  return (
    <div className="App" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // height: "200px",
      // transform: "translate("-50%", "-50%")"
    }}>
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">Employee Absence</h5>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input
                type="email"
                class="form-control"
                /// onChange={loginContext.handleOnChangeEmail}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Password</label>
            <input
                type="password"
                class="form-control"
                // onChange={loginContext.handleOnChangePassword}
            />
          </div>
          <a href="#" class="btn btn-primary">Log in</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
