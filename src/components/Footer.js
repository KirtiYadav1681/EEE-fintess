import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/FooterLogo1.png';

const Footer = () => {
  return (
    <Box mt="80px">
      <Stack gap="20px" alignItems="center" px="40px">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={Logo} alt="logo" className='footer-image'/>
        </Link>
        <Typography variant="text" pb="20px" pt="30px" sx={{ color:"#0075F6"}}>
          Copyright &copy;{' '}
          <a href="https://www.linkedin.com/in/kirti-yadav1681/" target="_blank" rel="noreferrer" style={{ color:"#0075F6", textDecoration: 'none', fontWeight: '900' }}>
            Kirti Yadav
          </a>
        </Typography>
      </Stack>
      
    </Box>
  )
}

export default Footer