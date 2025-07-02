import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";

import { X } from "lucide-react";
import { useRouter } from "next/router";
import { IoMenu } from "react-icons/io5";
import { HiOutlineMapPin } from "react-icons/hi2";
import clsx from "clsx";
import { PageHeader } from "@/types/page";
import { getLinkHref } from "@/utils/cms";
import { cn } from "@/styles/classes";
import { useLocationContext } from "@/contexts/LocationContext";
import NavLink from "./components/NavLink";
import BaseSelect from "../Select";
import { Button } from "../Button";
import { NavBarProps } from "./types";
import MobileMenu from "./components/menuMobile";
import { SearchIcon } from "../Icons";
import SearchInputHeader from "./components/SearchInputHeader";
import { LoginDropdown } from "./LoginDropdown";
import { stateNameToUf } from "./helpers";

export default function Header({
  children,
  data,
}: NavBarProps & { data?: PageHeader }): JSX.Element {
  const router = useRouter();

  const { setState } = useLocationContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [location, setLocation] = useState("Carregando localização...");

  const [showLanguageSelector, setShowLanguageSelector] = useState(true);

  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const [isScrolled, setIsScrolled] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const logo = data?.logo;
  const cta = data?.cta;
  const login = data?.login;
  const customLinks = data?.links || [];

  const routes = customLinks
    .map(({ text, link }) => {
      const pathname = link.external ? link.url?.trim() : link.path;

      if (!pathname) return null;

      return {
        label: text,
        pathname,
      };
    })
    .filter((route): route is { label: string; pathname: string } =>
      Boolean(route),
    );

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = router.asPath === "/";
  const isMedicPage = router.asPath.startsWith("/medicos");
  const onlyMedicPage = router.asPath === "/medicos";

  const handleLogoClick = (): void => {
    router.push("/");
  };

  useEffect(() => {
    const language = localStorage.getItem("selectedLanguage");

    if (language) setShowLanguageSelector(false);
  }, []);

  const handleLanguageSelect = (): void => {
    if (selectedLanguage) {
      localStorage.setItem("selectedLanguage", selectedLanguage);

      setShowLanguageSelector(false);
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`,
            );

            const dataLocation = await res.json();

            const city =
              dataLocation.address.city ||
              dataLocation.address.town ||
              "Cidade";

            const stateName = dataLocation.address.state || "Estado";

            const stateUf = stateNameToUf[stateName] || "";

            setLocation(`${city}, ${stateUf || stateName}`);

            setState(stateUf);
          } catch (error) {
            setLocation("Erro ao obter localização");
          }
        },
        () => setLocation("Localização indisponível"),
      );
    } else {
      setLocation("Geolocalização não suportada");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((old) => {
      const isOpen = !old;

      document.body.style.overflow = isOpen ? "hidden" : "unset";

      return isOpen;
    });
  }, []);

  return (
    <>
      {showLanguageSelector && (
        <div className="flex h-[102px] w-full items-center justify-center gap-2 bg-darkGray px-5 md:hidden">
          <BaseSelect
            placeholder="Selecione o idioma de sua preferência"
            className="max-w-xs rounded-none border-primary bg-white text-primary"
            options={[
              { value: "1", label: "Português" },
              { value: "2", label: "Inglês" },
              { value: "3", label: "Espanhol" },
            ]}
            onChange={(value) => setSelectedLanguage(value as string)}
          />

          <Button className="w-auto text-white" onClick={handleLanguageSelect}>
            Continuar
          </Button>
        </div>
      )}

      <div className="flex h-[52px] w-full items-center justify-center bg-gray-foreground md:hidden">
        <HiOutlineMapPin size={24} className="mr-2 text-secondary" />

        <span className="font-semibold text-darkGray">{location}</span>
      </div>

      <div
        className={clsx(
          "w-full bg-white px-4 sm:pr-0 2xl:pl-0",
          isScrolled && "sticky top-0 z-50 shadow-md",
        )}
      >
        <header
          className={cn(
            "mx-auto flex h-24 w-full max-w-screen-2xl sm:justify-between",
            isMenuOpen && "fixed left-0 top-0 z-50 bg-white",
          )}
        >
          <div className="flex w-full items-center gap-2 lg:max-w-[300px] lg:justify-between">
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:order-0 order-1 ml-auto block sm:ml-0 lg:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="size-full min-w-10 text-primary" />
              ) : (
                <IoMenu className="size-full min-w-10 text-primary" />
              )}
            </button>

            <div
              className="order-0 w-auto flex-none shrink-0 cursor-pointer sm:order-1 md:ml-5 lg:ml-0 lg:!grow-0"
              onClick={handleLogoClick}
            >
              {logo && (
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className="w-[250px] max-w-none lg:w-[230px] xl:w-[290px]"
                />
              )}
            </div>
          </div>

          <div className="hidden w-full items-center justify-between gap-4 text-sm font-normal uppercase lg:flex lg:flex-1 lg:!grow-0 xl2:gap-8 2xl:text-base">
            {routes.map((route) => (
              <NavLink key={route.label} route={route} />
            ))}

            {!isHomePage && !onlyMedicPage && (
              <SearchIcon
                className="hidden text-primary hover:cursor-pointer lg:flex"
                onClick={() => setIsSearchOpen(true)}
                role="button"
              />
            )}

            {!isMedicPage && login && <LoginDropdown data={login} />}
          </div>

          <div className="hidden size-full sm:flex lg:w-auto">
            {cta && (
              <div
                className={`flex size-full flex-row items-center justify-center gap-2 text-white xl2:p-6 ${
                  isMedicPage ? "bg-darkGray" : "bg-secondary"
                }`}
              >
                <Link
                  className="flex w-full min-w-44 cursor-pointer items-center justify-center gap-2 text-white lg:min-w-48 xl2:min-w-[310px] xl2:text-lg"
                  href={getLinkHref(cta.link)}
                  target={cta.link.external ? "_blank" : "_self"}
                  rel={cta.link.external ? "noopener noreferrer" : undefined}
                >
                  <img
                    src={cta.icon.url}
                    alt={cta.icon.alt}
                    width={cta.icon.width}
                    height={cta.icon.height}
                    className="mr-2 rounded-none"
                  />

                  <span className="lg:block lg:text-sm xl2:hidden">
                    {cta.mobileText}
                  </span>

                  <span className="hidden xl2:block">{cta.text}</span>
                </Link>
              </div>
            )}
          </div>

          {isMenuOpen && (
            <MobileMenu routes={routes} onLinkClick={toggleMenu} />
          )}
        </header>

        {isSearchOpen && (
          <div className="fixed inset-x-0 top-[96px] z-50 flex h-[calc(100vh-96px)] flex-col justify-start bg-white px-10 py-6 shadow-md">
            <div className="mx-auto w-full max-w-screen-2xl">
              <div className="mb-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="flex items-center gap-1 text-base font-semibold text-primary"
                >
                  Fechar <span className="text-5xl">×</span>
                </button>
              </div>

              <SearchInputHeader />
            </div>
          </div>
        )}
      </div>

      <div>{children}</div>
    </>
  );
}
