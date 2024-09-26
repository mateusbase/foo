import Page from "@/components/Page";
import ClippingDetailsScreen from "@/templates/ClippingDetailsScreen";
import { NextPageWithLayout } from "../_app";

const Clipping: NextPageWithLayout = () => {
  return (
    <Page title="Oc na mídia" description="Oncoclínicas - Clipping">
      <ClippingDetailsScreen />
    </Page>
  );
};

export default Clipping;
