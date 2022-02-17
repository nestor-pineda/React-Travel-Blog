import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, useAuthState, useAuthDispatch } from "../../Context";
import styles from "./login.module.scss";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAuthDispatch();
  let navigate = useNavigate();
  const { loading, errorMessage } = useAuthState(); //lee los valores del loading y errorMessages del contexto

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let response = await loginUser(dispatch, { email, password });
      if (!response.user) return;
      navigate("/create");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Login Page</h1>
        {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
        <form>
          <div className={styles.loginForm}>
            <div className={styles.loginFormItem}>
              <label htmlFor="email">Username</label>
              <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} />
            </div>
          </div>
          <button onClick={handleLogin}>login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
