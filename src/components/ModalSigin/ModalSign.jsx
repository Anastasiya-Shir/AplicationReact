import React, { useState } from "react";
import { useEffect } from 'react';

import { Form, Field } from 'react-final-form'

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import Styles from "./Styles";

import { useSelector, useDispatch } from 'react-redux';

import { isModalOpen } from '../store/ModalSlice';
import { isAuth } from "../store/UsersSlice";
import { isNotAuth } from "../store/UsersSlice";
import { isUserAuthoriz } from "../store/isUserAutherized";
import { isModalOpenSelector } from '../store/selectors';

const ModalSignIn = (props) => {

  const { setFormType } = props;
  const [password, setPVavue] = useState('')
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleClose = () => dispatch(isModalOpen(false));

  const isModalOpenSelect = useSelector(isModalOpenSelector);

  const users = useSelector(state => state.addUsers.users);

  const isNotAuthTwo = () => dispatch(isNotAuth());

  const signIn = () => {
    dispatch(isUserAuthoriz({ email }))

    function searchUser() {

      const userInfo = users.find(item => item.email === email);

      return userInfo;
    }

    const searchUserInfo = searchUser();

    if (searchUserInfo && searchUserInfo.password === password) {

      isNotAuthTwo();

      dispatch(isAuth({ email }))

      alert(" Sign in")
    } else alert("Check you password or email");
  }

  const handleChangeInput = (type) => (e) => {
    switch (type) {
      case 'email':

        setEmail(e.target.value);
        // validateEmail(e.target.value);
        // setErrorMessege(!validateEmail(e.target.value));
        // getBtnDisabled();

        break;
      case 'Password':

        setPVavue(e.target.value);

        // getBtnDisabled();
        break;
      default: console.log("error")
    }
  }

  // const validateEmail = (mail) => {
  //   const re = /\S+@\S+\.\S+/;

  //   return (re.test(mail));
  // };

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  const container = {
    background: ' #AAF0D1',
  }

  const doNoUpdate = (e) => e.preventDefault();

  useEffect(() => {

  }, [email]);

  useEffect(() => {

  }, [password]);

  return (
    <Modal
      open={isModalOpenSelect}
      onClose={handleClose}

    >
      <Styles>

        <Form

          onSubmit={onSubmit}

          validate={values => {

            const errors = {}
            if (!values.email) {
              console.log(values.email, "valuesemailin")
              errors.email = 'Required'
            }
            if (!values.password) {
              errors.password = 'Required'
            }

            return errors
          }}

          render={({ form, submitting, pristine, values, email, password, handleCloseModal }) => (
            <form style={container} onSubmit={doNoUpdate} >
              <h2>Sign In</h2>

              <Field name="email">
                {({ input, meta }) => (
                  <div>
                    <label>Email</label>

                    <input type="email" value={email}
                      placeholder="Email" onChange={handleChangeInput('email')} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}

                  </div>
                )}

              </Field>

              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <label>Password</label>

                    <input {...input} type="password"
                      value={password} onChange={handleChangeInput('Password')} placeholder="Password" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}

                  </div>
                )}
              </Field>

              <div className="buttons">
                <button type="submit" disabled={submitting} onClick={signIn}>
                  sign In
                </button>

                <div className="create-acc-notification">
                  Don't you have an account?
                </div>
              </div>

              <Button className="create-acc-btn"
                onClick={function () {
                  setFormType(true)
                }
                }


              >Create one</Button>
            </form>
          )}
        />
      </Styles>
    </Modal>
    // <div>
    //   <Modal
    //     open={isModalOpen}

    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    //     <Box sx={style}>
    //       <Typography id="modal-modal-title" variant="h6" component="h2">
    //         Sign in
    //       </Typography>

    //       <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    //       </Typography>

    //       <form style={{
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //         width: "80%"

    //       }}>
    //         <input type="email" placeholder='Email' onChange={handleChangeInput('email')} style={{
    //           width: '60%',
    //           marginBottom: '10px',
    //         }}></input>

    //         <p className={errorMesege ? 'errorMessege' : "noErrorMessege"} >Check your email</p>
    //         <input value={password} type="password" placeholder='Password'
    //           onChange={handleChangeInput('Password')}
    //           style={{
    //             width: '60%',
    //           }}>
    //         </input>

    //       </form>

    //       <button disabled={buttonDisabled} onClick={signIn}>Sign in</button>

    //       <a> Forgot your password?</a>

    //       <a> Don't have an account yet?</a>

    //       <a onClick={function () {
    //         setFormType(true)
    //       }} > Create one?</a>


    //     </Box>

    //   </Modal>

    // </div>
  );
}


export default ModalSignIn;
