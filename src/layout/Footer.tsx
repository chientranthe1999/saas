import { EmailRounded, FacebookRounded, Phone, Twitter } from '@mui/icons-material';
import { Box, Grid, List } from '@mui/material';
const Footer = () => {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid #c9c4c4' }}>
      <Box component="div" className="max-w-[1080px] mx-auto py-12 sm:px-4">
        <Grid container spacing={2}>
          <Grid item md={3} xs={3}>
            <p className="footer-heading">About us</p>

            <p>Made with ❤ by me</p>
          </Grid>
          <Grid item md={3} xs={3}>
            <p className="footer-heading">Quick link</p>

            <ul>
              <li>Product</li>
              <li>Download</li>
              <li>Try now</li>
            </ul>
          </Grid>
          <Grid item md={3} xs={3}>
            <p className="footer-heading">Office hours</p>
            <p>Open from 8AM to 9PM</p>
          </Grid>
          <Grid item md={3} xs={3}>
            <p className="footer-heading">Contact me</p>
            <p className="mb-4">
              <Phone></Phone> <span>123123123</span>
            </p>
            <p className="mb-4 flex items-center">
              <EmailRounded></EmailRounded> <span className="ml-1">demo@gm.co</span>
            </p>

            <div className="text-xl mb-2">
              <span>Find me on </span>
              <FacebookRounded className="social-icon"></FacebookRounded>
              <Twitter className="social-icon"></Twitter>
            </div>
            <List></List>
          </Grid>
        </Grid>
      </Box>
      <Box component="p" className="py-4 text-center" sx={{ background: '#f5f5f5' }}>
        © {new Date().getFullYear()} Snote Copyright
      </Box>
    </Box>
  );
};
export default Footer;
