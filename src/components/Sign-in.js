import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const defaultTheme = createTheme();


export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs"sx={{ backgroundColor: "rgba(200,200,200,0.6)", height: '13cm', display:'flow',
       justifyContent:'center', alignItems: 'center',margin:'3rem auto', border: '1.5px solid #ff0000',borderRadius:'25px' }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

          }}
        >
          <Avatar sx={{ m: 1, bgcolor:'darkred' }}>
            <AccountCircleIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
           User Login
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="Username"
                  autoComplete="Username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
             style={{ backgroundColor:'darkred'}}
              sx={{ mt: 3, mb: 2}}
            ><Link href="/home" style={{color:'white'}}>
              Login
              </Link>
            </Button>
          </Box>
        </Box>
        <Grid container justifyContent="flex-end">
        
              <Grid item>
                <Link href="/reg" variant="body2"style={{color:'darkred'}}>
                Register New Account
                </Link>
              </Grid>
            </Grid>
      </Container>
    </ThemeProvider>
  );
}