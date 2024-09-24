import { Button } from "@nextui-org/react";
import { MessageSquare, Phone, MapPin } from "lucide-react";
import { PageHeaderProps } from "./types";

const PageHeader = ({
  preTitle,
  title,
  subtitle,
  buttonText,
  showContactSection,
  contactLinks,
}: PageHeaderProps): JSX.Element => {
  return (
    <div className="relative h-[243px] w-full bg-gradient-to-r from-primary-foreground to-secondary-foreground md:h-[343px]">
      <div className="absolute inset-0 flex justify-center">
        <div className="ml-0 flex w-full max-w-screen-2xl flex-col items-start justify-center px-4 lg:ml-24">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between lg:justify-start">
            <div className="sm:w-[272px] lg:w-full">
              <p className="mt-2 max-w-unit-9xl text-sm leading-[20px] text-white sm:text-base sm:leading-[22px] lg:mt-4 lg:text-lg lg:leading-[24px]">
                {preTitle}
              </p>

              <h1 className="text-3xl font-bold leading-[32px] text-white sm:text-5xl sm:leading-[56px] lg:text-title-xl lg:leading-[72px]">
                {title}
              </h1>

              <div className="w-[272px] lg:w-full">
                <p className="mt-2 max-w-unit-9xl text-sm leading-[20px] text-white sm:text-base sm:leading-[22px] lg:mt-4 lg:text-lg lg:leading-[24px]">
                  {subtitle}
                </p>
              </div>
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

      {showContactSection && contactLinks && (
        <div className="absolute bottom-[-56.5px] right-0 mx-auto hidden h-[113px] w-full max-w-[1256px] items-center justify-between rounded-l-[20px] bg-primary pl-6 pr-10 text-white lg:flex">
          <div className="ml-[30px] flex items-center gap-8 text-[24px] font-medium">
            <a
              href={contactLinks.whatsappLink}
              className="flex items-center gap-2 hover:underline"
            >
              <MessageSquare size={24} /> {contactLinks.whatsappText}
            </a>
            <span>|</span>
            <a
              href={contactLinks.phoneLink}
              className="flex items-center gap-2 hover:underline"
            >
              <Phone size={24} /> {contactLinks.phoneText}
            </a>
            <span>|</span>
            <a
              href={contactLinks.mapLink}
              className="flex items-center gap-2 hover:underline"
            >
              <MapPin size={24} /> {contactLinks.mapText}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
