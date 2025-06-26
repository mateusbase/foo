import PageLayout from "@/components/PageLayout";
import { RenderBlocks } from "@/components/RenderBlocks";
import { DynamicTemplateProps } from "./types";

export default function DynamicTemplateRoot({
  data,
  breadcrumbs,
}: DynamicTemplateProps): JSX.Element {
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
        sideLinks={data.displayConfig?.sideLinks}
      />
    </PageLayout>
  );
}
