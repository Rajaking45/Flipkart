import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import './page.css';

export default function Login() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 500,
          height: 650,
          borderRadius: 1,
          border:'2px solid blue',
        }}
      >
       <div className="maincontainer">
         <div className='logintitle'>Login Page</div>
         <div className='box1'>
         <div> <div  className='lable'>Email</div> <input></input></div>
         <div> <div className='lable'>Password</div> <input></input></div>
         </div>
         <div className='cont_btn'><button className='loginbtn'>login</button></div>
       </div>

      </Box>
    </ThemeProvider>
  );
}