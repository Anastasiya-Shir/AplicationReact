import React from 'react';

import { useState } from 'react';

import ModalSignIn from '../ModalSigin/ModalSign';
import ModalSignUp from '../MadalsignUp/ModlSignUp';


export default function BasicModal(props) {
  const [formType, setFormType] = useState(false);

  if (formType) {

    return <ModalSignUp setFormType={setFormType} />
  } else {

    return <ModalSignIn formType={formType} setFormType={setFormType} />
  }

}
