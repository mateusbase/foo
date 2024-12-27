import React, { useEffect, useState } from "react";
import {
  Navbar as NextNavBar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  Link,
  Image,
} from "@nextui-org/react";
import { Stethoscope, LogIn, X } from "lucide-react";
import { useRouter } from "next/router";
import { IoMenu } from "react-icons/io5";
import { HiOutlineMapPin } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import NavLink from "../NavLink";
import BaseSelect from "../Select";
import BaseButton from "../Button";
import { NavBarProps } from "./types";
import MobileMenu from "./components/menuMobile";
import { CalendarIcon, SearchIcon } from "../Icons";

export default function NavBar({ children }: NavBarProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState("Carregando localização...");
  const [showLanguageSelector, setShowLanguageSelector] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const routes = [
    { label: t("navbar.patients"), pathname: "/" },
    { label: t("navbar.doctors"), pathname: "/medicos" },
    { label: t("navbar.investors"), pathname: "/relacao-com-investidor" },
    { label: t("navbar.oc_institute"), pathname: "/instituto-oc" },
    { label: t("navbar.news"), pathname: "/noticias" },
  ];

  const isHomePage = router.pathname === "/";
  const isMedicPage = router.pathname.includes("/medicos");

  const handleLogoClick = (): void => {
    router.push("/");
  };

  useEffect(() => {
    const language = localStorage.getItem("selectedLanguage");
    if (language) {
      setShowLanguageSelector(false);
    }
  }, []);

  const handleLanguageSelect = (): void => {
    if (selectedLanguage) {
      localStorage.setItem("selectedLanguage", selectedLanguage);
      setShowLanguageSelector(false);
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
          );
          const data = await response.json();

          if (data.address) {
            const city = data.address.city || data.address.town || "Cidade";

            const state = data.address.state || "Estado";

            setLocation(`${city}, ${state}`);
          }
        } catch (error) {
          setLocation("Localização indisponível");
        }
      });
    } else {
      setLocation("Geolocalização não suportada");
    }
  }, []);

  return (
    <>
      {showLanguageSelector && (
        <div className="flex h-[102px] w-full items-center justify-center gap-2 bg-darkGray px-5 md:hidden">
          <BaseSelect
            color="primary"
            variant="bordered"
            label="Selecione o idioma de sua preferência"
            className="max-w-xs bg-white"
            radius="none"
            options={[
              { key: 1, value: "1", label: "Português" },
              { key: 2, value: "2", label: "Inglês" },
              { key: 3, value: "3", label: "Espanhol" },
            ]}
            onChange={(value) => setSelectedLanguage(value as string)}
          />
          <BaseButton
            color="primary"
            className="w-auto text-white"
            onClick={handleLanguageSelect}
          >
            Continuar
          </BaseButton>
        </div>
      )}

      <div className="flex h-[52px] w-full items-center justify-center bg-gray-foreground md:hidden">
        <HiOutlineMapPin size={24} className="mr-2 text-secondary" />

        <span className="font-semibold text-darkGray">{location}</span>
      </div>

      <div
        className={`w-full bg-white lg:px-4 ${isScrolled ? "sticky top-0 z-50 shadow-md" : ""}`}
      >
        <NextNavBar
          maxWidth="full"
          height="96px"
          className="mx-auto flex h-fit w-full max-w-screen-2xl p-0 md:pl-5 lg:p-0"
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="hidden sm:block lg:hidden"
              icon={
                isMenuOpen ? (
                  <X className="size-full min-w-10 text-primary" />
                ) : (
                  <IoMenu className="size-full min-w-10 text-primary" />
                )
              }
            />

            <NavbarBrand
              className="shrink-0 cursor-pointer md:ml-5 xl2:ml-0"
              onClick={handleLogoClick}
            >
              <Image
                src="https://grupooncoclinicas.com/wp-content/themes/grupo-oncoclinicas/assets/imgs/header/oncoclinicas.svg"
                alt="Logo"
                className="w-[250px] max-w-none xl2:w-[300px]"
              />
            </NavbarBrand>

            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
              icon={
                isMenuOpen ? (
                  <X className="size-full min-w-10 text-primary" />
                ) : (
                  <IoMenu className="size-full min-w-10 text-primary" />
                )
              }
            />
          </NavbarContent>

          <NavbarContent className="hidden justify-center gap-4 text-sm font-normal uppercase lg:flex xl2:gap-8 2xl:text-base">
            {routes.map((route) => (
              <NavLink key={route.label} route={route} />
            ))}
          </NavbarContent>

          <NavbarContent justify="end" className="hidden items-center sm:flex">
            {!isMedicPage ? (
              <>
                {!isHomePage && (
                  <SearchIcon
                    className="hidden text-primary hover:cursor-pointer lg:flex xl2:ml-2"
                    size={1.5}
                  />
                )}

                <Link
                  href="/contato"
                  className="hidden items-center text-primary lg:flex xl2:mr-9"
                >
                  Entrar
                  <LogIn size={26} className="ml-2" />
                </Link>

                <div className="flex size-full flex-row items-center justify-center gap-2 bg-secondary text-white xl2:p-6">
                  <Link
                    className="flex w-full min-w-44 items-center justify-center text-white xl2:min-w-80 xl2:text-lg"
                    href="/agende-sua-consulta"
                  >
                    <CalendarIcon size={1} className="mr-2 text-white" />

                    <span className="lg:block xl2:hidden">Agendamento</span>

                    <span className="hidden xl2:block">
                      Agende uma consulta ou exame
                    </span>
                  </Link>
                </div>
              </>
            ) : (
              <div className="flex size-full min-w-60 max-w-96 flex-row items-center justify-center gap-2 bg-gray-600 p-6 text-gray-500">
                <Link
                  className="flex w-full items-center justify-center text-white xl2:text-lg"
                  href="/contato"
                >
                  <Stethoscope size={24} className="mr-2 text-white" />
                  Acesso médico
                </Link>
              </div>
            )}
          </NavbarContent>

          {isMenuOpen && <MobileMenu routes={routes} />}
        </NextNavBar>
      </div>

      <div>{children}</div>
    </>
  );
}
