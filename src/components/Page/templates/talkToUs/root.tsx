import PageLayout from "@/components/PageLayout";
import DynamicBanner from "@/components/Blocks/DynamicBanner";
import { TalkToUsRootProps } from "./types";
import ContactUsForm from "./components/ContactUsForm";

export function TalkToUsRoot({
  data,
  breadcrumbs,
}: TalkToUsRootProps): JSX.Element {
  return (
    <PageLayout
      title={data.header?.title}
      subtitle={data.header?.description}
      breadcrumbs={breadcrumbs}
    >
      <div className="my-10 flex w-full flex-col gap-12 lg:flex-row">
        <ContactUsForm units={data.units} />

        <div className="flex flex-col">
          <DynamicBanner
            image={data.banner?.image}
            layout="vertical"
            imagePosition="top"
            theme="gradient"
            textAlign="left"
            roundedPosition="bl"
            content={data.banner?.content}
          />

          <div className="mt-5 md:flex">
            <DynamicBanner
              image={data.secondaryBanner?.image}
              logo={data.secondaryBanner?.logo}
              text={data.secondaryBanner?.text}
              link={data.secondaryBanner?.link}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
