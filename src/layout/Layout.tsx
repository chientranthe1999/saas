import NavBar from '@/layout/Navbar';

const Layout = (props: Record<string, unknown>) => {
  return (
    <>
      <NavBar></NavBar>

      <main className="max-w-[1080px]">{props.children}</main>
    </>
  );
};

export default Layout;
