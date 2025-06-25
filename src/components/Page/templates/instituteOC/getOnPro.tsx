import PageLayout from "@/components/PageLayout";
import { RenderBlocks } from "@/components/RenderBlocks";
import { GetOnProRootsProps } from "./types";

export function GetOnProRoot({
  data,
  breadcrumbs,
}: GetOnProRootsProps): JSX.Element {
  return (
    <main>
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
    </main>
  );
}
