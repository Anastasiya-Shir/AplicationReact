import React, { useState } from "react";
import { useEffect } from 'react';
//import Box from '@mui/material/Box';
//import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { Form, Field } from 'react-final-form';

import { useSelector, useDispatch } from 'react-redux';
import Styles from "../ModalSigin/Styles";
import { addNewUser } from "../store/UsersSlice";
import { isModalOpen } from '../store/ModalSlice';
//import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

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
  const { setFormType } = props;

  const [firstName, setfirstName] = useState('');

  const [lastName, setlastName] = useState('');

  const [phonemail, setPhonemail] = useState('');

  const [repeatpassword, setRepeatpassword] = useState('');

  const [password, setpassword] = useState('');

  const [email, setEmail] = useState('');

  const [errorMesege, setErrorMessege] = useState(false);

  // const [buttonDisabled, setButtonDisabled] = useState(true);

  const [login, setLogin] = useState(false);

  const dispatch = useDispatch();

  const isModalOpenn = useSelector(state => state.isOpen.isOpen);

  const users = useSelector(state => state.addUsers.users);

  const handleClose = () => {
    dispatch(isModalOpen(false))
    setFormType(false)
  };

  const addUser = () => dispatch(addNewUser({ email, lastName, firstName, phonemail, password }));
  // const validateEmail = (email) => {
  //   const re = /\S+@\S+\.\S+/;

  //   return (re.test(email));
  // };

  // const getBtnDisabled = () => {
  //   if (firstName.length > 0 && lastName.length > 0 && phonemail.length > 0 && repeatpassword.length > 0 && password.length > 0 && email.length > 0 && errorMesege === false) {
  //     setButtonDisabled(false)
  //   } else setButtonDisabled(true)
  // } //нужно иссправить баг с disabled button() разобра]]]]]]]]]]]]]]]]]]]]]]

  const validPassword = (a, b) => {
    (a === b) ? setErrorMessege(false) : setErrorMessege(true);

    console.log(a === b, "a==b");
    console.log(errorMesege)
  }

  const searchsimpleUser = (users, newUser) => {

    return users.find(item => item.email === newUser.email);
  }

  const handleSubmit = () => {
    validPassword(password, repeatpassword);
    const newUser = {
      email,
      password,
      isAuth: false,
      firstName,
      lastName,
    };

    console.log(password === repeatpassword, "repp")
    if (!searchsimpleUser(users, newUser) && !errorMesege) {
      console.log(errorMesege, "errormessege")

      addUser();

      setLogin(true);
    }

    else if (errorMesege) {
      console.log(errorMesege, "not correct")
      alert("repeat password not correct")
    }

    else alert("Такой пользователь уже ест")
  }

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }

  function Def(e) {
    e.preventDefault();
  }

  const container = {
    background: ' #AAF0D1',
  }

  useEffect(() => {

  }, [email]);

  // useEffect(() => {
  //   setErrorMessege(repeatpassword === password)
  // }, [repeatpassword]);

  return (
    <div>
      <Modal
        open={isModalOpenn}
        onClose={handleClose}>


        <Styles>
          <Form
            // open={isOpen}
            // onClose={handleClose}
            onSubmit={onSubmit}
            // handleChangeInput={handleChangeInput}
            // handleSignUp={handleSignUp}
            validate={values => {

              const errors = {}
              if (!values.email) {

                errors.email = 'Required'
              }
              if (!values.password) {
                errors.password = 'Required'
              } if (!values.firstName) {
                errors.firstName = 'Required'

              } if (!values.lastName) {
                errors.lastName = 'Required'
              } if (!values.phonemail) {
                errors.phone = 'Required'
              } if (!values.repeatpassword) {
                errors.phone = 'Required'
              } if (values.password !== values.repeatpassword) {

                errors.passwordsMatch = 'Passwords are not equal';
              }

              return errors
            }}

            render={({ handleSignIn, form, submitting, pristine, values, email, password, handleChangeInput, repeatpassword, lastName, firstName, phonemail }) => (
              <form style={container} onSubmit={Def}>
                <h2>Sign Up</h2>

                <Field name="email">
                  {({ input, meta }) => (
                    <div>
                      <label>Email</label>
                      <input {...input} type="text" value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }} placeholder="Email" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}

                    </div>
                  )}
                </Field>

                <Field name="firstName">
                  {({ input, meta }) => (
                    <div>
                      <label>First name</label>
                      <input {...input} type="text" value={firstName}
                        onChange={(e) => { setfirstName(e.target.value) }} placeholder="First Name" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <Field name="lastName">
                  {({ input, meta }) => (
                    <div>
                      <label>Last name</label>
                      <input {...input} type="text" value={lastName}
                        onChange={(e) => { setlastName(e.target.value) }} placeholder="Last Name" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <Field name="phone">
                  {({ input, meta }) => (
                    <div>
                      <label>phone</label>
                      <input {...input} type="text" value={phonemail}
                        onChange={(e) => { setPhonemail(e.target.value) }} placeholder="Phone" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <Field name="password">
                  {({ input, meta }) => (
                    <div>
                      <label>Password</label>
                      <input {...input} type="password"
                        value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder="Password" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}

                    </div>
                  )}
                </Field>

                <Field name="Repeate password">
                  {({ input, meta }) => (
                    <div>
                      <label>Repeat password</label>
                      <input {...input} type="password"
                        value={repeatpassword} onChange={(e) => { setRepeatpassword(e.target.value) }} placeholder="Repeat Password" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}

                    </div>
                  )}
                </Field>

                <div className="buttons">
                  <button type="submit" onClick={function () {
                    setFormType(false)
                  }} >
                    to go sign in
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                  // disabled={pristine}
                  >
                    Login
                  </button>
                </div>
                <p className={errorMesege ? 'errorMessege' : "noErrorMessege"} >Неправильно введеные данные</p>

              </form>
            )}
          />
        </Styles>




      </Modal>
      {/* //   aria-labelledby="modal-modal-title"
      //   aria-describedby="modal-modal-description"

      //   <Box sx={style}>
      //     <Typography id="modal-modal-title" variant="h6" component="h2">
      //       Sign in
      //     </Typography>

      //     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      //     </Typography>

      //     <form onSubmit={e => e.preventDefault()} style={{
      //       display: 'flex',
      //       flexDirection: 'column',
      //       alignItems: 'center',
      //       width: "80%"
      //     }} >
      //       <input placeholder='Email' onChange={(e) => {
      //         setEmail(e.target.value); if (validateEmail(email)) {
      //           setErrorMessege(false)
      //         } else {
      //           setErrorMessege(true)

      //         };

      //       }} style={{
      //         width: '60%',
      //         marginBottom: '10px',
      //       }}>
      //       </input>

      //       <input placeholder='first Name' onChange={(e) => { setfirstName(e.target.value); console.log(firstName); getBtnDisabled() }} style={{
      //         width: '60%', marginBottom: '10px',
      //       }}>
      //       </input>

      //       <input placeholder='last 
      //        Name' onChange={(e) => { setlastName(e.target.value); console.log(lastName); getBtnDisabled() }} style={{
      //           width: '60%', marginBottom: '10px',
      //         }}>
      //       </input>

      //       <input placeholder='phone' onChange={(e) => { setPhonemail(e.target.value); console.log(phonemail); getBtnDisabled() }} style={{
      //         width: '60%', marginBottom: '10px',
      //       }}></input>

      //       <input type="password" placeholder='Password' onChange={(e) => { setpassword(e.target.value); console.log(password); getBtnDisabled(); validPassword(e.target.value, repeatpassword) }} style={{
      //         width: '60%', marginBottom: '10px',
      //       }}></input>

      //       <input type="password" placeholder=' repeat password' onChange={(e) => { setRepeatpassword(e.target.value); console.log(repeatpassword); getBtnDisabled(); validPassword(password, e.target.value) }} style={{
      //         width: '60%',
      //       }}></input>
      //       <p className={errorMesege ? 'errorMessege' : "noErrorMessege"} >Неправильно введеные данные</p>
      //       <div className={login ? 'onLogin' : "offLogin"}>


      //         <p className={login ? 'onLogin' : "offLogin"} >You have successfully signed up, now you can log in to the app</p>
      //         <button onClick={function () {
      //           setFormType(false)
      //         }}  > to go sign in  </button>
      //       </div>

      //       <button disabled={buttonDisabled} onClick={handleSubmit} >Login</button>
      //     </form>

      //   </Box>

      </Modal > */}

    </div>
  );
}
