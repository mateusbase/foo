import PageLayout from "@/components/PageLayout";
import { RenderBlocks } from "@/components/RenderBlocks";
import { SingleServiceRootProps } from "./types";

export function SingleService({
  data,
  breadcrumbs,
}: SingleServiceRootProps): JSX.Element {
  return (
    <main>
      <PageLayout
        title={data.header?.title}
        subtitle={data.header?.description}
        breadcrumbs={breadcrumbs}
        showSections
      >
        <RenderBlocks
          blocks={data.content}
          addHeadingShortcut={data.addHeadingShortcut}
          addShare={data.addShare}
        />
      </PageLayout>
    </main>
  );
}
