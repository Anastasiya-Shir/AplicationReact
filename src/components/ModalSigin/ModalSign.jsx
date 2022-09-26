import React, { useState } from "react";
import { useEffect } from 'react';

import { Form, Field } from 'react-final-form'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import { useSelector, useDispatch } from 'react-redux';

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

const ModalSignIn = (props) => {

  const { setFormType } = props;
  const [password, setPVavue] = useState('')
  const [email, setEmail] = useState('');
  const [errorMesege, setErrorMessege] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const dispatch = useDispatch();

  // const handleClose = () => setOpen(false);
  const handleClose = () => dispatch(isModalOpen(false));
  const isModalOpen = useSelector(state => state.isOpen.isOpen);
  console.log(isModalOpen, "open");
  // dispatch(isModalOpen(false));


  const signIn = () => {

    const isUserAuthrized = {
      email,
    };

    const usersJson = localStorage.getItem('users');
    const users = JSON.parse(usersJson) || [];

    function searchUser() {
      const userInfo = users.find(item => item.email === email);

      return userInfo;
    }

    const searchUserInfo = searchUser();

    if (searchUserInfo && searchUserInfo.password === password) {
      users.forEach(element => {
        element.isAuth = false;
      });

      searchUserInfo.isAuth = true;

      localStorage.setItem("isUserAuthrized", JSON.stringify(isUserAuthrized));

      localStorage.setItem("users", JSON.stringify(users));

      alert(" Sign in")
      const event = new StorageEvent('storage', {
        key: 'isUserAuthrized',
        newValue: email,
      });
      window.dispatchEvent(event);
    } else alert("Check you password or email");
  }

  const getBtnDisabled = () => {
    (password.length && email.length) ? setButtonDisabled(false) : setButtonDisabled(true);
  }

  const handleChangeInput = (type) => (e) => {
    switch (type) {
      case 'email':

        setEmail(e.target.value);

        validateEmail(e.target.value);

        setErrorMessege(!validateEmail(e.target.value));
        getBtnDisabled();
        break;
      case 'Password':

        setPVavue(e.target.value);
        getBtnDisabled();
        break;
      default: console.log("error")
    }
  }
  const validateEmail = (mail) => {
    const re = /\S+@\S+\.\S+/;

    return (re.test(mail));
  };
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
  const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }
  return (
    <div>



      <Modal
        open={isModalOpen}

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
            <input type="email" placeholder='Email' onChange={handleChangeInput('email')} style={{
              width: '60%',
              marginBottom: '10px',
            }}></input>

            <p className={errorMesege ? 'errorMessege' : "noErrorMessege"} >Check your email</p>
            <input value={password} type="password" placeholder='Password'
              onChange={handleChangeInput('Password')}
              style={{
                width: '60%',
              }}>
            </input>

          </form>

          <button disabled={buttonDisabled} onClick={signIn}>Sign in</button>

          <a> Forgot your password?</a>

          <a> Don't have an account yet?</a>

          <a onClick={function () {
            setFormType(true)
          }} > Create one?</a>


        </Box>

      </Modal>

    </div>
  );
}


export default ModalSignIn;
