import PageLayout from "@/components/PageLayout";
import { RenderBlocks } from "@/components/RenderBlocks";
import { CancerTypeProps } from "./types";

export function SingleCancer({
  data,
  breadcrumbs,
}: CancerTypeProps): JSX.Element {
  return (
    <main>
      <PageLayout
        title={data.name}
        subtitle={data.shortDescription}
        breadcrumbs={breadcrumbs}
        showSections
      >
        <RenderBlocks
          blocks={data.content}
          addHeadingShortcut={data?.addHeadingShortcut}
          addShare={data.addShare}
        />
      </PageLayout>
    </main>
  );
}
