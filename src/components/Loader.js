import React from 'react';
import { Stack,Typography } from '@mui/material';
import { Circles } from 'react-loader-spinner';


const Loader = ({message}) => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center" width="100%" mt={20}>
        <Circles color="#0075F6" />
        <Typography variant="h6" color="white" mt={2}>{message}</Typography>
    </Stack>
  )
}

export default Loader