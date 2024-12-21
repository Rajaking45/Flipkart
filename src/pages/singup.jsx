import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import './page.css';
import { useDispatch } from 'react-redux';
import {adduser} from '../store/reducer'

const theme = createTheme({
  palette: {
    primary: {
      main: '#007FFF',
      dark: '#0066CC',
    },
  },
});

export default function Singup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()

  const submitEvent = () => {
    const userData = { email: email, password: password,name:name,city:city }; 
    dispatch(adduser(userData));
    setOpen(true);
    props && props ?.loginstate()

  };



  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: 400,
          height: 500,
          borderRadius: 1,
          border: '2px solid #D9AFD9',
          backgroundColor: '#D9AFD9',
          backgroundImage: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
        }}
        className="customBox"
      >
        <div className="maincontainer">
          <div className='logintitle'>Login Page</div>
          <div className='box1'>
          <div>
              <div className='lable'>Name</div>
              <input onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
              <div className='lable'>City</div>
              <input onChange={(event) => setCity(event.target.value)} />
            </div>
            <div>
              <div className='lable'>Email</div>
              <input onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div>
              <div className='lable'>Password</div>
              <input onChange={(event) => setPassword(event.target.value)} />
            </div>
          </div>
          <div className='cont_btn' onClick={submitEvent}>
            <button className='loginbtn'>Create</button>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
}
