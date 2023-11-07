import NavBar from '@/layout/Navbar';

const Layout = (props: Record<string, unknown>) => {
  return (
    <>
      <NavBar></NavBar>

      <main className="max-w-[1080px] pt-[60px] mx-auto px-4">{props.children}</main>
    </>
  );
};

export default Layout;
