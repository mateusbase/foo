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
import { useRouter } from "next/router";
import NavLink from "../NavLink";
import { NavBarProps } from "./types";

const routes = [
  { label: "Pacientes", pathname: "/" },
  { label: "Médicos", pathname: "/medicos" },
  { label: "Investidores", pathname: "/relacao-com-investidor" },
  { label: "Instituto OC", pathname: "/contato" },
  { label: "Notícias", pathname: "/contato" },
];

export default function NavBar({ children }: NavBarProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const isMedicoPage = router.pathname === "/medicos";

  const handleLogoClick = (): void => {
    router.push("/");
  };

  return (
    <>
      <div className="w-full bg-white">
        <NextNavBar
          maxWidth="full"
          height="96px"
          className="mx-auto flex h-fit w-full max-w-screen-2xl p-0 md:pl-5 lg:p-0"
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden"
            />
            <NavbarBrand className="cursor-pointer" onClick={handleLogoClick}>
              <Image
                src="https://grupooncoclinicas.com/wp-content/themes/grupo-oncoclinicas/assets/imgs/header/oncoclinicas.svg"
                alt="Logo"
                className="w-[250px] max-w-none lg:w-[300px]"
              />
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent
            className={`hidden gap-8 font-bold uppercase lg:flex ${isMedicoPage ? "justify-center" : "justify-center"}`}
          >
            {routes.map((route) => (
              <NavLink key={route.label} route={route} />
            ))}
          </NavbarContent>

          <NavbarContent justify="end" className="hidden items-center sm:flex">
            {!isMedicoPage ? (
              <>
                <Link
                  href="/contato"
                  className="ml-10 mr-14 hidden items-center font-bold text-primary lg:flex"
                >
                  Entrar
                  <LogIn size={26} className="ml-2" />
                </Link>

                <div className="flex h-full w-96 flex-row items-center justify-center gap-2 bg-secondary p-6 font-semibold text-white">
                  <Link
                    className="flex w-full items-center justify-center text-lg text-white"
                    href="/agende-sua-consulta"
                  >
                    <Calendar size={24} className="mr-2 text-white" />
                    Agende uma consulta ou exame
                  </Link>
                </div>
              </>
            ) : (
              <div className="flex h-full w-96 flex-row items-center justify-center gap-2 bg-gray-600 p-6 font-semibold text-gray-500">
                <Link
                  className="flex w-full items-center justify-center text-lg text-white"
                  href="/contato"
                >
                  <Stethoscope size={24} className="mr-2 text-white" />
                  Acesso médico
                </Link>
              </div>
            )}
          </NavbarContent>

          {isMenuOpen && (
            <div className="sm:hidden">
              <NavbarMenu>
                {routes.map((route) => (
                  <NavbarMenuItem key={route.label}>
                    <Link href={route.pathname} className="block py-2">
                      {route.label}
                    </Link>
                  </NavbarMenuItem>
                ))}
              </NavbarMenu>
            </div>
          )}
        </NextNavBar>
      </div>

      <div>{children}</div>
    </>
  );
}
