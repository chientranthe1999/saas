import { Box, Button, Typography } from '@mui/material';

const NavBar = () => {
  return (
    <Box
      component="nav"
      className="flex items-center justify-between shadow-card lg:px-20 sm:px-6 h-[60px] fixed w-[100vw] !bg-[white] z-[1]"
    >
      <Typography className="!font-bold" color="primary">
        SNote
      </Typography>

      <Box component="div">
        <Button variant="outlined" sx={{ marginRight: '10px' }}>
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
