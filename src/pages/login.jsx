import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Enablechat } from '../store/reducer';
import { useDispatch } from 'react-redux';
import './page.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007FFF',
      dark: '#0066CC',
    },
  },
});

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const submitEvent = () => {
    const userData = { email: email, password: password }; 
    dispatch(Enablechat(true));
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };
  const createAccount =()=>{
    console.log("props",props);
    props ?.loginstate()
    
  }

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
              <div className='lable'>Email</div>
              <input onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div>
              <div className='lable'>Password</div>
              <input onChange={(event) => setPassword(event.target.value)} />
            </div>
          </div>
          <div className='cont_btn' >
            <button className='loginbtn' onClick={submitEvent}>Login</button>
            <button className='loginbtn' onClick={createAccount}>Create account</button>
          </div>

        </div>
      </Box>
    </ThemeProvider>
  );
}
