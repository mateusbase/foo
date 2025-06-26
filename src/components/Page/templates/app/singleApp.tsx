import PageLayout from "@/components/PageLayout";
import { RenderBlocks } from "@/components/RenderBlocks";
import { SingleAppRootProps } from "./type";

export function SingleApp({
  data,
  breadcrumbs,
}: SingleAppRootProps): JSX.Element {
  return (
    <PageLayout
      title={data.header?.title}
      subtitle={data.header?.description}
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
