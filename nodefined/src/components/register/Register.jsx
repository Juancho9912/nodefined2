import React from 'react';
import './register.css';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from '@mui/icons-material/Login';

const Register = () => {
    return (
        <div className='registerContainer'>

            <div className='inputContainer'>
                <TextField
                    style={{ margin: "0.5rem 0" }}
                    id="standard-basic"
                    label="Nombre"
                    variant="standard"
                />
                <TextField
                    style={{ margin: "0.5rem 0" }}
                    id="standard-basic"
                    label="Apellido"
                    variant="standard"
                />
            </div>

            <TextField
                style={{ margin: "0.5rem 0" }}
                id="standard-basic"
                label="Correo"
                variant="standard"
            />

            <TextField
                style={{ margin: "0.5rem 0" }}
                id="standard-basic"
                label="Wallet"
                variant="standard"
            />


            <div className='inputContainer'>
                <TextField
                    style={{ margin: "0.5rem 0" }}
                    id="standard-basic"
                    label="Contraseña"
                    variant="standard"
                />
                <TextField
                    style={{ margin: "0.5rem 0" }}
                    id="standard-basic"
                    label="Repetir contraseña"
                    variant="standard"
                />
            </div>

            <div className='buttonContainer'>
                <Button style={{fontSize: '12px'}} variant="contained" startIcon={<LoginIcon />}>
                    Registrar
                </Button>
            </div>
        </div>
    )
}

export default Register