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
      <div className="flex justify-center px-5">
        <NextNavBar
          maxWidth="full"
          height="96px"
          className="m-0 h-fit mx-auto w-full max-w-3xl bg-white p-0"
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
            className={`hidden gap-8 font-bold uppercase sm:flex ${isMedicoPage ? "justify-center" : "justify-center"}`}
          >
            {routes.map((route) => (
              <NavLink key={route.label} route={route} />
            ))}
          </NavbarContent>

          {!isMedicoPage && deviceType !== DeviceType.MOBILE && (
            <NavbarContent justify="end" className="items-center">
              <Link
                href="/contato"
                className="mr-16 flex items-center font-bold text-primary"
              >
                Entrar
                <LogIn size={26} className="ml-2" />
              </Link>

              <div
                className={`flex h-full w-96 flex-row items-center justify-center gap-2 bg-secondary p-6 font-semibold text-white`}
              >
                <Link
                  className="flex w-full items-center justify-center text-lg text-white"
                  href="/contato"
                >
                  <Calendar size={24} className="mr-2 text-white" />
                  Agende uma consulta ou exame
                </Link>
              </div>
            </NavbarContent>
          )}

          {isMedicoPage && deviceType !== DeviceType.MOBILE && (
            <NavbarContent justify="center" className="items-center">
              <div
                className={`flex h-full w-96 flex-row items-center justify-center gap-2 bg-gray-600 p-6 font-semibold text-gray-500`}
              >
                <Link
                  className="flex w-full items-center justify-center text-lg text-white"
                  href="/contato"
                >
                  <Stethoscope size={24} className="mr-2 text-white" />
                  Acesso médico
                </Link>
              </div>
            </NavbarContent>
          )}

          {isMenuOpen &&
            routes.map((route) => (
              <Link href={route.pathname} key={route.label}>
                <NavbarMenu>
                  <NavbarMenuItem>{route.label}</NavbarMenuItem>
                </NavbarMenu>
              </Link>
            ))}
        </NextNavBar>
      </div>

      <div>{children}</div>
    </>
  );
}
