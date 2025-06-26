import PageLayout from "@/components/PageLayout";
import { RenderBlocks } from "@/components/RenderBlocks";
import { FellowshipRootsProps } from "./types";

export function FellowshipRoot({
  data,
  breadcrumbs,
}: FellowshipRootsProps): JSX.Element {
  return (
    <PageLayout
      title={data.header.title}
      subtitle={data.header.description}
      breadcrumbs={breadcrumbs}
    >
      <RenderBlocks
        blocks={data.content}
        addHeadingShortcut={data.displayConfig?.addHeadingShortcut}
        addShare={data.displayConfig?.addShare}
      />
    </PageLayout>
  );
}
