import React, { useState } from "react";
import {
  Navbar as NextNavBar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import NavLink from "./NavLink";
import { NavBarProps } from "./types";

const routes = [
  { label: "Início", pathname: "/" },
  { label: "Sobre nós", pathname: "/sobre-nos" },
  { label: "Serviços", pathname: "/servicos" },
  { label: "Contato", pathname: "/contato" },
];

export default function NavBar({ children }: NavBarProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <NextNavBar
        className="absolute top-0 h-24"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {routes.map((route) => (
            <NavLink key={route.label} route={route} />
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/">Login</Link>
          </NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarContent>

        {isMenuOpen && (
          <NavbarMenu>
            {routes.map((route) => (
              <NavbarMenuItem key={route.label}>
                <Link href={route.pathname}>{route.label}</Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        )}
      </NextNavBar>
      <div className="bg-primary-50">
        <div className="flex min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-32 justify-center lg:justify-start">
          {children}
        </div>
      </div>
    </>
  );
}
