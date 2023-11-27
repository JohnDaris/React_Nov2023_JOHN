// src/components/HomePage.js
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from 'react';
import { Container, Typography, Button, AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import "./home.css"


const StyledTitle = styled(Typography)({
  marginBottom: (theme) => theme.spacing(2),
});

const HomePage = () => {
  return (
    
      <body className='bb'>
        <div>
        <div  style={{ backgroundColor: "black", color: "white", borderBottom: "5px solid white" }} >
          <Toolbar>
            <Typography variant="h6">My App</Typography>
            <div style={{ marginLeft: 'auto' }}>
              <Button color="inherit" href='/log'>Login</Button>
              <Button color="inherit" href='/reg'>Sign Up</Button>
            </div>
          </Toolbar>
        </div>
      <div className='hi'>
          <StyledTitle variant="h2" align="center" style={{ marginTop: "1em",padding:"10px" }}>
            Welcome to My Awesome App!
          </StyledTitle>
          <Typography variant="body1" align="center" sx={{padding:"30px"}}>
            this app helps you to purchase the things you desire with the touch of your finger
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary" href="/expo" sx={{ padding: "15px" }}>
              Get started
            </Button>
          </div>
        </div>

        </div>
        <footer class="site-footer" >
          <div class="social-icons">
            <a href="#" class="text-white"><InstagramIcon style={{height:"50px",width:"70px"}}/></a>
            <a href="#" class="text-white1"><FacebookIcon style={{height:"50px",width:"70px"}}/></a>
            <a href="#" class="text-white1"><LinkedInIcon style={{height:"50px",width:"70px"}}/></a>
            <a href="#" class="text-white1"><TwitterIcon style={{height:"50px",width:"70px"}}/></a>
            <a href="#" class="text-white2"><YouTubeIcon style={{height:"50px",width:"70px"}}/></a>
            <a href="#" class="text-white3"><WhatsAppIcon style={{height:"50px",width:"70px"}}/></a>
          </div>
        </footer> 
      </body>

  );
};

export default HomePage;