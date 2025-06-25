import PageLayout from "@/components/PageLayout";
import CustomVideoPlayer from "@/components/CustomVideoPlayer";
import { SingleVideoRootProps } from "./types";

export function SingleVideoRoot({
  data,
  breadcrumbs,
}: SingleVideoRootProps): JSX.Element {
  return (
    <main>
      <PageLayout
        breadcrumbs={breadcrumbs}
        title={data.header.title}
        subtitle={data.header.description}
      >
        <h1 className="mt-10 text-2xl text-primary md:text-title-lg md:leading-[45px] lg:mt-0 lg:leading-none">
          {data.name}
        </h1>

        <p className="mt-5 text-base text-darkGray md:text-xl">
          {data.description}
        </p>

        <div className="my-14 flex justify-center">
          <CustomVideoPlayer src={data.video.data.url} />
        </div>
      </PageLayout>
    </main>
  );
}
