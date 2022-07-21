import React from 'react';

import ModalFirst from './ModalSign';
import ModalSecond from './ModlSignUp';



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

export default function BasicModal(props) {
  const [formType, setFormType] = React.useState(false);
  const { open } = props;
  const { setOpen } = props;

  if (formType) {

    return <ModalSecond open={open} setOpen={setOpen} setFormType={setFormType} />
  } else {

    return <ModalFirst open={open} setOpen={setOpen} formType={formType} setFormType={setFormType} />
  }

}
