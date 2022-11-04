import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from '@mui/icons-material/Login';
import './login.css';

const Login = () => {
  return (
    <div className="loginContainer">
      <TextField
        style={{ margin: "1rem 0" }}
        id="standard-basic"
        label="Email"
        variant="standard"
      />
      <TextField
         style={{ marginBottom: "0.5rem " }}
        id="standard-basic"
        label="Contraseña"
        variant="standard"
      />
      <div className="buttonContainer">
        <Button style={{fontSize:"12px"}} variant="contained" startIcon={<LoginIcon />}>
          Ingresar
        </Button>
        <span className="link">¿Olvido contraseña?</span>
      </div>
    </div>
  );
};

export default Login;
