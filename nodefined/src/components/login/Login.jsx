import React from 'react'
import TextField from '@mui/material/TextField';

const Login = () => {
  return (
    <div className='container-login'>
         <TextField style={{margin: '2rem 0'}} id="standard-basic" label="Email" variant="standard" />
         <TextField className='input' id="standard-basic" label="Contraseña" variant="standard" />
    </div>
  )
}

export default Login