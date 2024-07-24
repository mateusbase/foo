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
  Image,
} from "@nextui-org/react";
import NavLink from "./NavLink";
import { NavBarProps } from "./types";
import { Button } from "../Button";

const routes = [
  { label: "Pacientes", pathname: "/" },
  { label: "Médicos", pathname: "/sobre-nos" },
  { label: "Investidores", pathname: "/servicos" },
  { label: "Instituto OC", pathname: "/contato" },
  { label: "Notícias", pathname: "/contato" },
  { label: "Entrar", pathname: "/contato" },
];

export default function NavBar({ children }: NavBarProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <NextNavBar
        maxWidth="2xl"
        className="absolute top-0 h-32"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="cursor-pointer">
            <Image
              src="https://grupooncoclinicas.com/wp-content/themes/grupo-oncoclinicas/assets/imgs/header/oncoclinicas.svg"
              alt="Logo"
              width={300}
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-4 uppercase"
          justify="center"
        >
          {routes.map((route) => (
            <NavLink key={route.label} route={route} />
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/">Login</Link>
          </NavbarItem>
          <Button.Root as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button.Root>
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
        <div className="flex min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-36 justify-center lg:justify-start">
          {children}
        </div>
      </div>
    </>
  );
}
