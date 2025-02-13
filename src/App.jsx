import { useState } from 'react'
import './App.css'
import Login from './pages/login'
import { useSelector } from 'react-redux'
import Singup from './pages/singup'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Chatlist from './pages/chatlist'
function App() {
  const store = useSelector((state) => state.users)
  const [login, setlogin] = useState(true);
  console.log("store", store)
  const flagchatlist = useSelector((state) => state.users.Chatcotainner)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  console.log("flagchatlist",flagchatlist)
  return (
    <>
      <div style={{ backgroundImage: 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)' }}>
        {login && !flagchatlist ? <Login loginstate={setlogin}></Login> :
          !flagchatlist ? <Singup loginstate={setlogin}></Singup> :null}
        {flagchatlist ? <Chatlist /> : null}
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
