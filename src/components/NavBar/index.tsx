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
import { Calendar, Stethoscope, LogIn } from "lucide-react";
import { useDeviceType } from "@/hooks/useDeviceType";
import { DeviceType } from "@/utils/enums";
import NavLink from "../NavLink";
import { useRouter } from "next/router";

const routes = [
  { label: "Pacientes", pathname: "/" },
  { label: "Médicos", pathname: "/medicos" },
  { label: "Investidores", pathname: "/servicos" },
  { label: "Instituto OC", pathname: "/contato" },
  { label: "Notícias", pathname: "/contato" },
];

export default function NavBar({ children }: NavBarProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const deviceType = useDeviceType();
  const router = useRouter();

  const isMedicoPage = router.pathname === "/medicos";

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
          className={`hidden gap-8 uppercase sm:flex font-bold ${isMedicoPage ? "justify-center" : "justify-center"}`}
        >
          {routes.map((route) => (
            <NavLink key={route.label} route={route} />
          ))}
        </NavbarContent>

        {
          !isMedicoPage && deviceType !== DeviceType.MOBILE && (
            <NavbarContent justify="end" className="items-center">
              <Link
                href="/contato"
                className="mr-20 text-primary font-bold flex items-center"
              >
                Entrar
                <LogIn size={26} className="ml-2" />
              </Link>

              <div className={`flex flex-row items-center h-full gap-2 p-6 font-semibold text-white bg-secondary w-96 justify-center`}>
                <Link className="flex text-white items-center justify-center w-full text-lg" href="/contato">
                  <Calendar size={24} className="text-white mr-2" />
                  Agende uma consulta ou exame
                </Link>
              </div>
            </NavbarContent>
          )
        }

        {isMedicoPage && deviceType !== DeviceType.MOBILE && (
          <NavbarContent justify="center" className="items-center">
            <div className={`flex flex-row items-center h-full gap-2 p-6 font-semibold text-gray-500 bg-gray-600 w-96 justify-center`}>
              <Link className="flex text-white items-center justify-center w-full text-lg" href="/contato">
                <Stethoscope size={24} className="text-white mr-2" />
                Acesso Médico
              </Link>
            </div>
          </NavbarContent>
        )}

        {isMenuOpen &&
          routes.map((route) => (
            <Link href={route.pathname} key={route.label}>
              <NavbarMenu>
                <NavbarMenuItem>
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
