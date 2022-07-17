import React from "react";

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

export default function ModalSecond(props) {
  const { open } = props;
  const { setOpen } = props;
  const handleClose = () => setOpen(false);

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
            <input placeholder='Email' style={{
              width: '60%',
              marginBottom: '10px',
            }}>
            </input>

            <input placeholder='first Name' style={{
              width: '60%', marginBottom: '10px',
            }}>
            </input>

            <input placeholder='last 
             Name' style={{
                width: '60%', marginBottom: '10px',
              }}>
            </input>

            <input placeholder='phone' style={{
              width: '60%', marginBottom: '10px',
            }}></input>

            <input type="password" placeholder='Password' style={{
              width: '60%', marginBottom: '10px',
            }}></input>

            <input type="password" placeholder=' repeat password' style={{
              width: '60%',
            }}></input>

          </form>

        </Box>

      </Modal>

    </div>
  );
}
