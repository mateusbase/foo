import { Button } from "@nextui-org/react";
import { MessageSquare, Phone, MapPin } from "lucide-react";

type PageHeaderProps = {
  title: string;
  address?: string;
  buttonText?: string;
  showContactSection?: boolean;
  contactLinks?: {
    whatsappText: string;
    whatsappLink: string;
    phoneText: string;
    phoneLink: string;
    mapText: string;
    mapLink: string;
  };
};

const PageHeader = ({
  title,
  address,
  buttonText,
  showContactSection,
  contactLinks,
}: PageHeaderProps): JSX.Element => {
  return (
    <div className="relative h-[343px] w-full bg-gradient-to-r from-[#00B6AD] to-[#BA99E7]">
      <div className="absolute inset-0 flex justify-center">
        <div className="ml-0 flex w-full max-w-screen-2xl flex-col items-center justify-center lg:ml-24 lg:items-start">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between lg:items-start lg:justify-start">
            <div className="sm:w-[272px] lg:w-full">
              <h1 className="text-[26px] font-bold leading-[32px] text-white sm:text-[48px] sm:leading-[56px] lg:text-[60px] lg:leading-[72px]">
                {title}
              </h1>
              <div className="w-[272px] lg:w-full">
                <p className="mt-2 text-[15px] leading-[20px] text-white sm:text-[16px] sm:leading-[22px] lg:mt-4 lg:text-[18px] lg:leading-[24px]">
                  {address}
                </p>
              </div>
            </div>
            {buttonText && (
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:w-[322px] lg:hidden">
                <Button className="h-[44px] w-[322px] rounded bg-white font-semibold text-[#007D77]">
                  {buttonText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showContactSection && contactLinks && (
        <div className="absolute bottom-[-56.5px] right-0 mx-auto hidden h-[113px] w-full max-w-[1256px] items-center justify-between rounded-l-[20px] bg-[#007D77] pl-6 pr-10 text-white lg:flex">
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
