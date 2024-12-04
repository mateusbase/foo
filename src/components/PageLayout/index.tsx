import PageHeader from "@/components/PageHeader";
import BaseContainer from "@/components/Container";
import { useRouter } from "next/router";
import { options } from "@/utils/objectUtils";
import { PageLayoutProps } from "./types";
import MainOptionsActions from "../MainOptionsActions";
import Breadcrumb from "../Breadcrumb";

export default function PageLayout({
  children,
  showBreadcrumb = true,
  showHeader = true,
  title,
  subtitle,
  showSections = false,
  sections,
  mainOptions = true,
  showIcons = true,
  buttonText,
  buttonIcon,
}: PageLayoutProps): JSX.Element {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];

  const capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const pageTitle =
    title || capitalizeFirstLetter(decodeURIComponent(lastSegment));

  return (
    <main>
      {showBreadcrumb && (
        <div className="block bg-gray-200 p-6 md:hidden">
          <Breadcrumb />
        </div>
      )}

      {showHeader && (
        <PageHeader
          title={pageTitle}
          subtitle={subtitle}
          showSections={showSections}
          sections={sections}
          showIcons={showIcons}
          buttonText={buttonText}
          buttonIcon={buttonIcon}
        />
      )}

      <BaseContainer className="flex w-full flex-col py-0 md:py-20">
        {showBreadcrumb && (
          <div className="hidden px-10 md:block md:px-0">
            <Breadcrumb />
          </div>
        )}
        {children}
      </BaseContainer>

      {mainOptions && (
        <MainOptionsActions options={options} rounded="rounded-none" />
      )}
    </main>
  );
}
