import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

const NavBar = () => {
  const nav = useNavigate();
  return (
    <Box
      component="nav"
      className="flex items-center justify-between shadow-card lg:px-20 sm:px-6 h-[60px] fixed w-[100vw] !bg-[white] z-[1]"
    >
      <Typography
        className="!font-bold cursor-pointer"
        color="primary"
        onClick={() => nav('/')}
      >
        SNote
      </Typography>

      <Box component="div">
        <Button
          variant="outlined"
          sx={{ marginRight: '10px' }}
          onClick={() => nav('/login')}
        >
          Login
        </Button>
        <Button variant="contained" sx={{ color: 'white' }}>
          Get start free
        </Button>
      </Box>
      {/* </> */}
    </Box>
  );
};

export default NavBar;
