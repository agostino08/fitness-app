import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="transparent">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '80px', height: '75px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '14px', xs: '10px' } }} mt="41px" textAlign="center" pb="40px">Made by Agustín Ponce <br/> Credits to JavaScript Mastery</Typography>
  </Box>
);

export default Footer;