import React from 'react';
import {Box, Stack, Typography, Button } from '@mui/material'

import '../components/HeroBanner.css';

import HeroBannerImage from '../assets/images/banner.png'
import { DisplaySettings } from '@mui/icons-material';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'},
        position:"relative"
    }}>
      <Typography color="#00ACC0" fontWeight="600" fontSize="26px" fontFamily="Prompt">
        Fitness Club
      </Typography>
      <Typography 
      fontWeight={700} 
      sx={{fontSize: { lg: '44px', xs: '40px'}}}
      mb="23px" mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={5}>
        Check out the most effective excersises.
      </Typography>
         
      <div className='wrap'>
        <a href="#exercises">
        <button className='button' variant="contained" color="error" href="#exercises">
                Explore Exercises
        </button> 
        </a>    
      </div>
      
      <Typography
        fontWeight={600}
        fontSize="180px"
        color="#00ACC0"
        sx={{
            opacity:0.1,
            display: { lg: 'block', xs: 'none'}
        }}
      >
        Train Hard
    </Typography>
      <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner
