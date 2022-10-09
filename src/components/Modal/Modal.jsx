import React from 'react';

import { useState } from 'react';

import ModalSignIn from '../ModalSigin/ModalSign';
import ModalSignUp from '../MadalsignUp/ModlSignUp';

export default function BasicModal(props) {
  const [formType, setFormType] = useState(false);
  const { open } = props;
  const { setOpen } = props;

  if (formType) {

    return <ModalSignUp open={open} setOpen={setOpen} setFormType={setFormType} />
  } else {

    return <ModalSignIn open={open} setOpen={setOpen} formType={formType} setFormType={setFormType} />
  }

}
