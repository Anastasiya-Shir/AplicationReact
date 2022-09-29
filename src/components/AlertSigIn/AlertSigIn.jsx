import React, { useState } from "react";
import { useEffect } from 'react';

import { Form, Field } from 'react-final-form'


import Styles from "../ModalSigin/Styles";
import { useSelector, useDispatch } from 'react-redux';
import { isModalOpen } from '../store/ModalSlice';
import Button from '@mui/material/Button';


export default function AlertSegnIn() {

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
  }


  return (
    <Styles>
      <h1>you have successfully signed up/in  </h1>
      <Form onSubmit={onSubmit}>

        <Field>
          <Button>
            Ok
          </Button>
        </Field>
      </Form>
    </Styles>
  )
}
