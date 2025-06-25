import BaseContainer from "@/components/Container";
import { PageLayoutProps } from "./types";
import Breadcrumb from "../Breadcrumb";
import PageHeader from "./components/PageHeader";

export default function PageLayout({
  children,
  showBreadcrumb = true,
  showHeader = true,
  title,
  subtitle,
  showSections = false,
  sections,
  showIcons = true,
  buttonText,
  buttonIcon,
  breadcrumbs,
}: PageLayoutProps): JSX.Element {
  return (
    <main>
      {showBreadcrumb && (
        <div className="block bg-gray-200 p-6 lg:hidden">
          <Breadcrumb
            breadcrumbs={breadcrumbs?.map(({ name, path }) => ({
              name,
              path,
            }))}
          />
        </div>
      )}

      {showHeader && (
        <PageHeader
          title={title}
          subtitle={subtitle}
          showSections={showSections}
          sections={sections}
          showIcons={showIcons}
          buttonText={buttonText}
          buttonIcon={buttonIcon}
        />
      )}

      <BaseContainer className="flex w-full flex-col py-0 md:py-0 lg:py-8">
        {showBreadcrumb && (
          <div className="hidden px-10 md:px-0 lg:mb-10 lg:block">
            <Breadcrumb
              breadcrumbs={breadcrumbs?.map(({ name, path }) => ({
                name,
                path,
              }))}
            />
          </div>
        )}

        {children}
      </BaseContainer>
    </main>
  );
}
