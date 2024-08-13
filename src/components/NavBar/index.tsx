import React, { useState } from "react";
import {
  Navbar as NextNavBar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Image,
} from "@nextui-org/react";
import { Calendar } from "lucide-react";
import { useDeviceType } from "@/hooks/useDeviceType";
import { DeviceType } from "@/utils/enums";
import NavLink from "../NavLink";

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
  const deviceType = useDeviceType();

  return (
    <>
      <NextNavBar
        maxWidth="full"
        height="96px"
        className="absolute top-0 p-0 m-0 bg-white h-fit"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="ml-16 cursor-pointer">
            <Image
              src="https://grupooncoclinicas.com/wp-content/themes/grupo-oncoclinicas/assets/imgs/header/oncoclinicas.svg"
              alt="Logo"
              width={300}
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden gap-4 uppercase sm:flex"
          justify="center"
        >
          {routes.map((route) => (
            <NavLink key={route.label} route={route} />
          ))}
        </NavbarContent>

        {
          deviceType !== DeviceType.MOBILE && (
            <NavbarContent justify="end" className="items-stretch">
              <div className="flex flex-row items-center h-full gap-2 p-6 font-semibold text-white bg-secondary">
                <Calendar size={24} />
                <Link className="text-white" href="/contato">Agende uma consulta ou exame</Link>
              </div>
            </NavbarContent>
          )
        }

        {isMenuOpen &&
          routes.map((route) => (
            <Link href={route.pathname}>
              <NavbarMenu>
                <NavbarMenuItem key={route.label}>
                  {route.label}
                </NavbarMenuItem>

              </NavbarMenu>
            </Link>
          ))
        }
      </NextNavBar>

      <div className="mt-24">
        {children}
      </div>
    </>
  );
}
