import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function ModalFirst(props) {
  const { open } = props;
  const { setOpen } = props;
  const { setFormType } = props;
  const [password, setPVavue] = useState("")
  const [email, setemail] = useState("");
  const [errorMesege, SetErrorMessege] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const handleClose = () => setOpen(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;

    return (re.test(email));
  };



  function sigIn() {

    const isUserAuthrized = {
      email,
    };

    const usersJson = localStorage.getItem('users');
    const users = JSON.parse(usersJson)

    const searchUser = () => {
      const userInfo = users.find(item => item.email === email);

      return userInfo
    }

    if (searchUser() && searchUser().password == password) {
      users.forEach(element => {
        element.isAuth = false;
      });

      searchUser().isAuth = true;
      localStorage.setItem(" isUserAuthrized ", JSON.stringify([isUserAuthrized]));
      console.log({ users })
      localStorage.setItem("users", JSON.stringify(users));
      alert(" Sign in")

    } else alert("Check you password or email")
  }

  const getbuttonDisabled = () => {
    if (password.length > 0 && email.length > 0) {
      setButtonDisabled(false);
    } else setButtonDisabled(true);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sign in
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          </Typography>

          <form style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: "80%"

          }}>
            <input placeholder='Email' onChange={(e) => {
              if (validateEmail(e.target.value)) {
                SetErrorMessege(false)
                getbuttonDisabled()
              } else {
                SetErrorMessege(true)

              }; setemail(e.target.value); console.log(email)
            }} style={{
              width: '60%',
              marginBottom: '10px',
            }}></input>

            <p className={errorMesege ? 'errorMessege' : "noErrorMessege"} >Неккорерктно введен email</p>
            <input value={password} type="password" placeholder='Password'
              onChange={(e) => { setPVavue(e.target.value); console.log(password); getbuttonDisabled() }}
              style={{
                width: '60%',
              }}>
            </input>

          </form>

          <button disabled={buttonDisabled} onClick={sigIn}>Sign in</button>

          <a> Forgot your password?</a>

          <p> Don't have an account yet?</p>

          <a onClick={function () {
            setFormType(true)
          }} > Create one?</a>


        </Box>

      </Modal>

    </div>
  );
}
