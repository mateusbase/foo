import Page from "@/components/Page";
import ReleaseDetailScreen from "@/templates/ReleaseDetailScreen";
import { NextPageWithLayout } from "@/utils/types";

const Clipping: NextPageWithLayout = () => {
  return (
    <Page title="Oc na mídia" description="Oncoclínicas - Releases">
      <ReleaseDetailScreen />
    </Page>
  );
};

export default Clipping;
