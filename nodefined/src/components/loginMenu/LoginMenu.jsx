import React, { useState } from 'react'
import './loginMenu.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Login from '../login/Login';
import Register from '../register/Register';

const LoginMenu = () => {

  const [value, setValue] = useState(0);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div className='container'>
      <div className='form-container'>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab style={{fontSize:'12px'}}   label="Iniciar sesión" {...a11yProps(0)} />
            <Tab style={{fontSize:'12px'}}  label="Registrar" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} style={{fontSize:'12px'}}>
          <Login />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Register />
        </TabPanel>
      </Box>
      </div>
      
    </div>
  )
}

export default LoginMenu