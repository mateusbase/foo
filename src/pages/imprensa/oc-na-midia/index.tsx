import Page from "@/components/Page";
import ClippingScreen from "@/templates/ClippingScreen";
import { NextPageWithLayout } from "@/utils/types";

const Clipping: NextPageWithLayout = () => {
  return (
    <Page title="OC na mídia" description="Oncoclínicas - Oc na mídia">
      <ClippingScreen />
    </Page>
  );
};

export default Clipping;
