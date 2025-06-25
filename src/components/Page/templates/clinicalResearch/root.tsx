import PageLayout from "@/components/PageLayout";
import { RenderBlocks } from "@/components/RenderBlocks";
import Link from "next/link";
import { Button } from "@/components/Button";
import Image from "next/image";
import type { ClinicalResearchProps } from "./type";

export function ClinicalResearchRoot({
  data,
  breadcrumbs,
}: ClinicalResearchProps): JSX.Element {
  return (
    <PageLayout
      title={data.header?.title}
      subtitle={data.header?.description}
      breadcrumbs={breadcrumbs}
    >
      <div className="mt-10 flex w-full flex-col-reverse justify-between gap-10 md:mt-20 lg:mt-0 lg:flex-row">
        <div className="flex w-full flex-col">
          <h1 className="max-w-full text-5xl font-light text-primary 2xl:text-6xl">
            {data.banner.title}
          </h1>

          <div className="lg:mb-14">
            <p className="mt-8 max-w-full text-xl font-medium text-darkGray lg:max-w-7xl 2xl:text-2xl">
              {data.banner.description}
            </p>
          </div>

          <Link href="/medicos/pesquisa-clinica/como-funciona">
            <Button className="font-bold text-white md:mt-8 md:flex md:w-1/2">
              Como funciona
            </Button>
          </Link>
        </div>

        <div className="hidden w-full flex-col items-center lg:flex">
          <Image
            src={data.banner.image.url}
            alt="Imagem de consulta"
            width={data.banner.image.width}
            height={data.banner.image.height}
            className="h-auto w-full object-cover lg:w-auto"
          />
        </div>
      </div>

      <div className="overflow-x-hidden">
        <RenderBlocks
          blocks={data.content}
          addHeadingShortcut={data.displayConfig?.addHeadingShortcut}
          addShare={data.displayConfig?.addShare}
        />
      </div>
    </PageLayout>
  );
}
