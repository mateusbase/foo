import PageLayout from "@/components/PageLayout";
import { RenderBlocks } from "@/components/RenderBlocks";
import type { AppRootProps } from "./type";

export function AppRoot({ data, breadcrumbs }: AppRootProps): JSX.Element {
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
