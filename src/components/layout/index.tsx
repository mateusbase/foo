import Footer from "../Footer";
import NavBar from "../NavBar";

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <NavBar>
        <main>{children}</main>
      </NavBar>
      <Footer />
    </>
  );
}
