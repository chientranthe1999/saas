import './footer.css';

import Footer from '@/layout/Footer';
import NavBar from '@/layout/Navbar';

const Layout = (props: Record<string, unknown>) => {
  return (
    <>
      <NavBar></NavBar>

      <main className="max-w-[1080px] pt-[60px] mx-auto px-4">{props.children}</main>

      <Footer></Footer>
    </>
  );
};

export default Layout;
