import Link from "next/link";
import { PageHeaderProps } from "./types";
import BaseButton from "../Button";

const PageHeader = ({
  preTitle,
  title,
  subtitle,
  buttonText,
  buttonIcon,
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
    <div className="relative h-[155px] w-full bg-gradient-to-br from-primary-foreground to-secondary-foreground md:h-[243px] lg:h-[343px]">
      <div className="absolute inset-0 flex justify-center">
        <div className="flex w-full max-w-screen-2xl flex-col items-start justify-center px-4">
          <div className="flex w-full flex-col sm:flex-row sm:items-center sm:justify-between lg:justify-start">
            <div className="w-full">
              {preTitle && (
                <p className="mt-2 max-w-7xl text-sm leading-[20px] text-white sm:text-base sm:leading-[22px] lg:mt-4 lg:text-lg lg:leading-[24px]">
                  {preTitle}
                </p>
              )}
              <h1 className="text-[26px] leading-[32px] text-white sm:text-4xl sm:leading-[56px] md:text-[40px] lg:text-[60px] lg:leading-[72px]">
                {title}
              </h1>
              {subtitle && (
                <div className="w-full">
                  <p className="mt-2 max-w-7xl text-[13px] font-medium leading-[20px] text-white sm:text-base sm:leading-[22px] md:text-lg lg:mt-4 lg:text-[22px] lg:leading-[24px]">
                    {subtitle}
                  </p>
                </div>
              )}
            </div>
            {buttonText && (
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:w-[322px] lg:hidden">
                <BaseButton
                  className="h-[54px] w-[322px] rounded border-white text-white"
                  startContent={buttonIcon}
                  variant="bordered"
                >
                  {buttonText}
                </BaseButton>
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
