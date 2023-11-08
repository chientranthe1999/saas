import '@/assets/styles/login.css';

import { Email, Key, LockPerson } from '@mui/icons-material';
import { Box, Button, Card, InputAdornment, TextField } from '@mui/material';

const Login = () => {
  return (
    <div className="h-[72vh]">
      <Card
        sx={{
          width: '400px',
          margin: '0 auto',
          marginTop: '120px',
          padding: '24px',
          color: 'inherit',
        }}
        className="card"
      >
        <Box component="h2" sx={{ fontSize: '24px', fontWeight: '500' }}>
          <span className="mr-2">
            <Key sx={{ color: 'rgb(34, 197, 94)' }}></Key>
          </span>
          Welcome to SNote
        </Box>

        <p className="py-4">Please enter your email and password</p>

        <TextField
          id="input-with-icon-textfield"
          label="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
          sx={{ width: '100%', marginBottom: '16px' }}
          variant="standard"
        />

        <TextField
          id="input-with-icon-textfield"
          label="Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockPerson />
              </InputAdornment>
            ),
          }}
          sx={{ width: '100%' }}
          variant="standard"
        />

        <p className="py-2 text-sm mb-2">
          Forgot password? <span className="text-primary">Get it back</span>
        </p>

        <Button variant="contained" sx={{ width: '100%' }}>
          Login
        </Button>
      </Card>
    </div>
  );
};

export default Login;
