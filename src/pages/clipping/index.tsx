import Page from "@/components/Page";
import ClippingScreen from "@/templates/ClippingScreen";
import { NextPageWithLayout } from "@/utils/types";

const Clipping: NextPageWithLayout = () => {
  return (
    <Page title="Clipping" description="Oncoclínicas - Clipping">
      <ClippingScreen />
    </Page>
  );
};

export default Clipping;
