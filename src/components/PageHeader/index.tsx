import { Button } from "@nextui-org/react";
import Link from "next/link";
import { PageHeaderProps } from "./types";

const PageHeader = ({
  preTitle,
  title,
  subtitle,
  buttonText,
  showSections,
  sections,
  showIcons = true,
}: PageHeaderProps): JSX.Element => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ): void => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-[243px] w-full bg-gradient-to-r from-primary-foreground to-secondary-foreground sm:h-[343px]">
      <div className="absolute inset-0 flex justify-center">
        <div className="flex w-full max-w-screen-2xl flex-col items-start justify-center px-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between lg:justify-start">
            <div className="sm:w-[350px] lg:w-full">
              {preTitle && (
                <p className="mt-2 max-w-7xl text-sm leading-[20px] text-white sm:text-base sm:leading-[22px] lg:mt-4 lg:text-lg lg:leading-[24px]">
                  {preTitle}
                </p>
              )}
              <h1 className="text-3xl font-normal leading-[32px] text-white sm:text-5xl sm:leading-[56px] lg:text-title-xl lg:leading-[72px]">
                {title}
              </h1>
              {subtitle && (
                <div className="w-[272px] lg:w-full">
                  <p className="mt-2 max-w-7xl text-sm leading-[20px] text-white sm:text-base sm:leading-[22px] lg:mt-4 lg:text-lg lg:leading-[24px]">
                    {subtitle}
                  </p>
                </div>
              )}
            </div>
            {buttonText && (
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:w-[322px] lg:hidden">
                <Button className="h-[44px] w-[322px] rounded bg-white font-semibold text-primary">
                  {buttonText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showSections && sections && (
        <div className="absolute bottom-[-56.5px] right-0 mx-auto hidden h-[113px] w-auto items-center justify-between rounded-l-[20px] bg-primary pl-6 pr-10 text-white lg:flex">
          <div className="ml-[30px] flex items-center gap-8 text-[24px] font-medium">
            {sections.map((section) => (
              <div key={section.href} className="flex items-center gap-2">
                <Link
                  href={section.href}
                  onClick={(e) => handleLinkClick(e, section.href)}
                  className="flex cursor-pointer items-center gap-2 hover:underline"
                >
                  {showIcons && section.icon && section.icon}
                  {section.text}
                </Link>
                {sections.indexOf(section) < sections.length - 1 && (
                  <span>|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
