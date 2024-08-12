import Footer from "../Footer";
import NavBar from "../NavBar";
import { LayoutProps } from "./types";

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
