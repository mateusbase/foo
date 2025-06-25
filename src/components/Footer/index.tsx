import Link from "next/link";
import Image from "next/image";
import { PageFooter } from "@/types/page";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BaseContainer from "../Container";
import MainOptionsActions from "../MainOptionsActions";
import { Radio, RadioGroup } from "../Radio";

interface FooterProps {
  data: PageFooter;
}

export default function Footer({ data }: FooterProps): JSX.Element {
  const router = useRouter();

  const [selectedLanguage, setSelectedLanguage] = useState<string>("pt_BR");

  const toggleLanguageLocale = (language: string): void => {
    let newLocale = "";

    if (language === "en") {
      newLocale = "en";
    } else if (language === "es-ES") {
      newLocale = "es";
    }

    const currentPath = router.asPath;
    const pathParts = currentPath.split("/").filter(Boolean);
    const firstPartIsLang = ["en", "es"].includes(pathParts[0]);

    const basePath = firstPartIsLang
      ? `/${pathParts.slice(1).join("/")}`
      : currentPath;

    const newPath = newLocale ? `/${newLocale}${basePath}` : basePath;

    localStorage.setItem("language", language);

    setSelectedLanguage(language);

    router.push(newPath);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") ?? "pt_BR";

      setSelectedLanguage(saved);
    }
  }, []);

  const actions = data?.actions?.map((action, index) => ({
    id: index,
    text: action.text,
    icon: action.icon,
    link: action.link,
  }));

  function useIsTablet(): boolean {
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
      const checkSize = (): void => {
        setIsTablet(window.innerWidth >= 568 && window.innerWidth < 1024);
      };

      checkSize();
      window.addEventListener("resize", checkSize);

      return () => window.removeEventListener("resize", checkSize);
    }, []);

    return isTablet;
  }

  const isTablet = useIsTablet();

  return (
    <>
      {actions && (
        <MainOptionsActions options={actions} rounded="rounded-none" />
      )}

      <footer className="bg-darkGray p-0 pt-10 font-lato font-medium leading-snug text-white md:p-10">
        <BaseContainer className="flex w-full flex-col">
          <div className="flex flex-col items-center justify-between gap-4 md:gap-14 lg:flex-row lg:items-start lg:gap-0">
            <Image
              src={data.logo.url}
              alt={data.logo.alt}
              width={312}
              height={38}
            />

            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <h1 className="mt-10 text-white md:mt-0 lg:text-[26px]">
                {data.social?.text}
              </h1>

              <div className="flex gap-4">
                {data.social?.social?.map((item, index) => (
                  <Link
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${item.link}-${index}`}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={item.logo.url}
                      alt={item.logo.alt}
                      width={32}
                      height={32}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <hr className="mt-8 hidden border-gray-500 md:block" />

          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5">
            {isTablet ? (
              <>
                {data.linkGroups?.slice(0, 3).map((group) => (
                  <div key={group.name}>
                    <p className="mb-3 text-white">{group.name}</p>

                    <ul>
                      {group.links?.map((linkItem, index) => {
                        const isExternal = linkItem.link?.external;
                        const href = isExternal
                          ? linkItem.link?.url?.trim()
                          : linkItem.link?.path;

                        return (
                          <li
                            // eslint-disable-next-line react/no-array-index-key
                            key={`${group.name}-${href}-${index}`}
                            className="mb-2"
                          >
                            <Link
                              href={href || "#"}
                              target={isExternal ? "_blank" : "_self"}
                              rel={
                                isExternal ? "noopener noreferrer" : undefined
                              }
                              className="text-[13px] hover:border-b-2 lg:text-base"
                            >
                              {linkItem.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}

                {data.app?.text && (
                  <div className="hidden sm:block">
                    <p className="mb-3 text-white">{data.app.text}</p>

                    <div className="flex flex-col gap-2">
                      {data.app.stores?.map((store) => (
                        <a
                          key={store.image.url}
                          href={store.link.url}
                          target={store.link.external ? "_blank" : undefined}
                          rel={
                            store.link.external
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          <Image
                            src={store.image.url}
                            alt={store.image.alt}
                            width={store.image.width}
                            height={store.image.height}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {data.linkGroups?.[3] && (
                  <div key={data.linkGroups[3].name}>
                    <p className="mb-3 text-white">{data.linkGroups[3].name}</p>

                    <ul>
                      {data.linkGroups[3].links?.map((linkItem, index) => {
                        const isExternal = linkItem.link?.external;

                        const href = isExternal
                          ? linkItem.link?.url?.trim()
                          : linkItem.link?.path;

                        return (
                          <li
                            // eslint-disable-next-line react/no-array-index-key
                            key={`${data.linkGroups[3].name}-${href}-${index}`}
                            className="mb-2"
                          >
                            <Link
                              href={href || "#"}
                              target={isExternal ? "_blank" : "_self"}
                              rel={
                                isExternal ? "noopener noreferrer" : undefined
                              }
                              className="text-[13px] hover:border-b-2 lg:text-base"
                            >
                              {linkItem.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <>
                {data.linkGroups?.slice(0, 4).map((group) => (
                  <div key={group.name}>
                    <p className="mb-3 text-white">{group.name}</p>

                    <ul>
                      {group.links?.map((linkItem, index) => {
                        const isExternal = linkItem.link?.external;

                        const href = isExternal
                          ? linkItem.link?.url?.trim()
                          : linkItem.link?.path;

                        return (
                          <li
                            // eslint-disable-next-line react/no-array-index-key
                            key={`${group.name}-${href}-${index}`}
                            className="mb-2"
                          >
                            <Link
                              href={href || "#"}
                              target={isExternal ? "_blank" : "_self"}
                              rel={
                                isExternal ? "noopener noreferrer" : undefined
                              }
                              className="text-[13px] hover:border-b-2 lg:text-base"
                            >
                              {linkItem.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}

                {data.app?.text && (
                  <div className="hidden md:block">
                    <p className="mb-3 text-white">{data.app.text}</p>

                    <div className="flex flex-col gap-2">
                      {data.app.stores?.map((store) => (
                        <a
                          key={store.image.url}
                          href={store.link.url}
                          target={store.link.external ? "_blank" : undefined}
                          rel={
                            store.link.external
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          <Image
                            src={store.image.url}
                            alt={store.image.alt}
                            width={store.image.width}
                            height={store.image.height}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {data.linkGroups?.slice(4).map((group) => (
              <div key={group.name}>
                <p className="mb-3 text-white">{group.name}</p>

                <ul>
                  {group.links?.map((linkItem, index) => {
                    const isExternal = linkItem.link?.external;

                    const href = isExternal
                      ? linkItem.link?.url?.trim()
                      : linkItem.link?.path;

                    return (
                      <li
                        // eslint-disable-next-line react/no-array-index-key
                        key={`${group.name}-${href}-${index}`}
                        className="mb-2"
                      >
                        <Link
                          href={href || "#"}
                          target={isExternal ? "_blank" : "_self"}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="text-[13px] hover:border-b-2 lg:text-base"
                        >
                          {linkItem.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <hr className="mt-8 border-gray-500" />

          {data.app?.text && (
            <div className="mt-8 flex flex-col items-center justify-center sm:hidden">
              <p className="mb-4 font-bold text-white">{data.app.text}</p>

              <div className="flex flex-col gap-2">
                {data.app?.stores.map((store) => (
                  <a
                    key={store.image.url}
                    href={store.link.url}
                    target={store.link.external ? "_blank" : undefined}
                    rel={
                      store.link.external ? "noopener noreferrer" : undefined
                    }
                  >
                    <Image
                      src={store.image.url}
                      alt={store.image.alt}
                      width={store.image.width}
                      height={store.image.height}
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="my-8 flex flex-col items-center justify-between text-center lg:flex-row lg:text-left">
            <span className="text-[13px] text-white lg:text-base">
              {data.referenceText}
            </span>

            <RadioGroup
              className="md:mt-0gap-4 mt-4 flex lg:flex-row"
              color="primary"
              value={selectedLanguage}
              onValueChange={(value) => toggleLanguageLocale(value)}
              orientation="horizontal"
            >
              <Radio value="pt_BR" className="border-white">
                <span className="text-[13px] text-white lg:text-base">
                  PORTUGUÊS
                </span>
              </Radio>

              <Radio value="en" className="border-white">
                <span className="text-[13px] text-white lg:text-base">
                  ENGLISH
                </span>
              </Radio>

              <Radio value="es-ES" className="border-white">
                <span className="text-[13px] text-white lg:text-base">
                  ESPAÑOL
                </span>
              </Radio>
            </RadioGroup>
          </div>
        </BaseContainer>
      </footer>
    </>
  );
}
