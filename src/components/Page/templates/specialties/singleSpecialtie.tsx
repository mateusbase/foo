import PageLayout from "@/components/PageLayout";
import { RenderBlocks } from "@/components/RenderBlocks";
import { SingleSpecialtieRootProps } from "./types";

export function SingleSpecialtie({
  data,
  breadcrumbs,
}: SingleSpecialtieRootProps): JSX.Element {
  return (
    <main>
      <PageLayout
        title={data.basicInfo?.name}
        breadcrumbs={breadcrumbs}
        showSections
      >
        <RenderBlocks
          blocks={data.content}
          addHeadingShortcut={data.displayConfig.addHeadingShortcut}
          addShare={data.displayConfig.addShare}
        />
      </PageLayout>
    </main>
  );
}
