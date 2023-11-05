import { Button } from '@mui/material';

const NavBar = () => {
  return (
    <nav className="flex h-[91px] items-center justify-between px-20">
      <p className="text-primary font-bold">Banquee.</p>
      <ul className="flex">
        <li>Features</li>
        <li>Compare</li>
        <li>Support</li>
        <li>Blog</li>
      </ul>

      <div>
        <Button style={{ textTransform: 'none', marginRight: '20px' }}>Login</Button>
        <Button variant="contained" style={{ textTransform: 'none', color: 'white' }}>
          Open Account
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
