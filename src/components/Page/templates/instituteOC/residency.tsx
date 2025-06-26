import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import BaseSwiper from "@/components/BaseSwiper";
import GradientBanner from "@/components/Blocks/GradientBanner";
import { RichText } from "@/components/Blocks/RichText";
import { useDeviceType } from "@/hooks/useDeviceType";
import { ResidencyRootsProps } from "./types";
import SpecialistCard from "./components/SpecialistCards";
import ReasonsCard from "./components/ReasonsCards";

export function ResidencyRoot({
  data,
  breadcrumbs,
}: ResidencyRootsProps): JSX.Element {
  const { headBanner, signup, cardSection, footerBanner, disclaimer } = data;
  const deviceType = useDeviceType();

  return (
    <main>
      <PageLayout
        title={data.header.title}
        subtitle={data.header.description}
        breadcrumbs={breadcrumbs}
      >
        <Image
          width={headBanner.image.width}
          height={headBanner.image.height}
          src={headBanner.image.url}
          alt={headBanner.image.alt}
          className="mx-auto my-10 rounded-md lg:mt-0"
        />

        <div className="flex flex-col lg:flex-row">
          <div className="mt-10 block flex-col lg:my-[89px] lg:h-[555px] lg:w-1/2 lg:justify-center">
            <h1 className="mb-4 text-2xl text-primary md:w-4/5 md:text-3xl lg:text-xl xl:text-3xl">
              {signup.title}
            </h1>

            <SpecialistCard
              date={signup.date}
              values={signup.values}
              documentUrl={signup.documentUrl}
              signupButtonText={signup.signupButtonText}
              signupOverText={signup.signupOverText}
              signupUrl={signup.signupUrl}
              image={signup.image}
              title={signup.title}
            />
          </div>

          <div className="flex justify-center md:w-full lg:w-1/2">
            <Image
              src={signup.image.url}
              width={signup.image.width}
              alt={signup.image.alt}
              height={signup.image.height}
              className="block w-full object-fill lg:mt-[89px] lg:h-[555px] xl:h-[601px]"
            />
          </div>
        </div>

        <div className="my-10">
          <h1 className="mb-7 text-2xl text-primary md:mb-8 md:text-4xl lg:text-6xl">
            {cardSection.title}
          </h1>

          <BaseSwiper
            className="md:hidden"
            data={cardSection.cards.map((card, index) => ({
              ...card,
              id: index,
            }))}
            renderItem={(item) => (
              <ReasonsCard
                key={item.id}
                icon={item.image.url}
                description={item.description}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
              />
            )}
          />

          <div className="hidden flex-col md:flex lg:grid lg:grid-cols-3 lg:gap-7">
            {cardSection.cards.map((item) => (
              <ReasonsCard
                key={item.description}
                icon={item.image.url}
                description={item.description}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
              />
            ))}
          </div>
        </div>

        <GradientBanner
          description={footerBanner.content}
          media={{
            data: {
              type: "image",
              data: {
                url: footerBanner.image.url,
                width: footerBanner.image.width,
                height: footerBanner.image.height,
                alt: footerBanner.image.alt,
              },
            },
            side: "left",
          }}
          roundCorner={deviceType === "desktop" ? "bottom-left" : "none"}
          customClassName="mb-10 mt-10"
        />

        <h1 className="mb-3 mt-10 text-2xl text-primary md:mb-4 md:text-title-lg lg:mb-2">
          {disclaimer.title}
        </h1>

        <RichText
          content={disclaimer.content}
          className="mb-16 text-lg text-darkGray md:text-2xl"
        />
      </PageLayout>
    </main>
  );
}
