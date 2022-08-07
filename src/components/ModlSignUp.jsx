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

export default function ModalSignUp(props) {
  const { open, setOpen, setFormType } = props;

  const [firstName, setfirstName] = useState("");

  const [lastName, setlastName] = useState("");

  const [phonemail, setPhonemail] = useState("");

  const [repeatpassword, setRepeatpassword] = useState("");

  const [password, setpassword] = useState("");

  const [email, setEmail] = useState("");

  const [errorMesege, setErrorMessege] = useState(false);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [login, setLogin] = useState(false);

  const handleClose = () => {
    setOpen(false)
    setFormType(false)
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;

    return (re.test(email));
  };

  const getBtnDisabled = () => {
    if (firstName.length > 0 && lastName.length > 0 && phonemail.length > 0 && repeatpassword.length > 0 && password.length > 0 && email.length > 0 && errorMesege === false) {
      setButtonDisabled(false)
    } else setButtonDisabled(true)
  } //нужно иссправить баг с disabled button() разобра]]]]]]]]]]]]]]]]]]]]]]

  const validPassword = (a, b) => {
    (a === b) ? setErrorMessege(false) && setButtonDisabled(true)
      : setErrorMessege(true);
  }

  const searchsimpleUser = (users, newUser) => {

    return users.find(item => item.email === newUser.email);
  }

  const handleSubmit = () => {
    const usersJson = localStorage.getItem('users');
    const users = JSON.parse(usersJson) || [];

    const newUser = {
      email,
      password,
      isAuth: false,
      firstName,
      lastName,
    };

    if (!searchsimpleUser(users, newUser)) {
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setLogin(true)
    } else alert("Такой пользователь уже ест")
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

          <form onSubmit={e => e.preventDefault()} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: "80%"
          }} >
            <input placeholder='Email' onChange={(e) => {
              setEmail(e.target.value); if (validateEmail(email)) {
                setErrorMessege(false)
              } else {
                setErrorMessege(true)

              };

            }} style={{
              width: '60%',
              marginBottom: '10px',
            }}>
            </input>

            <input placeholder='first Name' onChange={(e) => { setfirstName(e.target.value); console.log(firstName); getBtnDisabled() }} style={{
              width: '60%', marginBottom: '10px',
            }}>
            </input>

            <input placeholder='last 
             Name' onChange={(e) => { setlastName(e.target.value); console.log(lastName); getBtnDisabled() }} style={{
                width: '60%', marginBottom: '10px',
              }}>
            </input>

            <input placeholder='phone' onChange={(e) => { setPhonemail(e.target.value); console.log(phonemail); getBtnDisabled() }} style={{
              width: '60%', marginBottom: '10px',
            }}></input>

            <input type="password" placeholder='Password' onChange={(e) => { setpassword(e.target.value); console.log(password); getBtnDisabled(); validPassword(e.target.value, repeatpassword) }} style={{
              width: '60%', marginBottom: '10px',
            }}></input>

            <input type="password" placeholder=' repeat password' onChange={(e) => { setRepeatpassword(e.target.value); console.log(repeatpassword); getBtnDisabled(); validPassword(password, e.target.value) }} style={{
              width: '60%',
            }}></input>
            <p className={errorMesege ? 'errorMessege' : "noErrorMessege"} >Неправильно введеные данные</p>
            <div className={login ? 'onLogin' : "offLogin"}>


              <p className={login ? 'onLogin' : "offLogin"} >You have successfully signed up, now you can log in to the app</p>
              <button onClick={function () {
                setFormType(false)
              }}  > to go sign in  </button>
            </div>

            <button disabled={buttonDisabled} onClick={handleSubmit} >Login</button>
          </form>

        </Box>

      </Modal>

    </div>
  );
}
