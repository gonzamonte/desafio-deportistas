import React from "react";
import { login } from "../api/Rule_auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  const validateAccess = async (e) => {
    e.preventDefault();
    await login({ email: username, password: password })
      .then((response) => {
        history("/home");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <form /* onSubmit={validateAccess} */>
      <h3>Iniciar sesion</h3>
      <br />
      <label> User Name: *</label>
      <br />
      <input
        required
        type="email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <br />
      <br />
      <label> Password: *</label>
      <br />
      <input
        required
        type="password"
        minLength={8}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      <br />
      <button onClick={validateAccess} className="Button" type="submit">
        Ingresar
      </button>
    </form>
  );
}

export default Login;
