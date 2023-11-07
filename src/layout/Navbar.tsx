import { Box, Button, Typography } from '@mui/material';

const NavBar = () => {
  return (
    <Box
      component="nav"
      className="flex items-center justify-between shadow-card lg:px-20 sm:px-6 h-[60px] fixed w-[100vw] bg-white"
    >
      <Typography className="font-bold" color="primary">
        Banquee.
      </Typography>

      <div>
        <Button sx={{ marginRight: '20px' }}>Login</Button>
        <Button variant="contained" sx={{ color: 'white' }}>
          Get start free
        </Button>
      </div>
      {/* </> */}
    </Box>
  );
};

export default NavBar;
