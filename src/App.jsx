import { useState } from 'react'
import './App.css'
import Login from './pages/login'
import { useSelector } from 'react-redux'
import Singup from './pages/singup'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
function App() {
  const  store = useSelector((state)=>state.users)
  const  [login,setlogin] =useState(true);
  console.log("store",store)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <div style={{ backgroundImage: 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)' }}>
        {login ?  <Login loginstate={setlogin}></Login> :  <Singup loginstate={setlogin}></Singup>}
        <Snackbar open={store.Alert} autoHideDuration={1000} onClose={''}>
        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
        {store.alertmessage}
        </Alert>
      </Snackbar>
      </div>
    </>
  )
}

export default App
