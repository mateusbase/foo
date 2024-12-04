import Page from "@/components/Page";
import { NextPageWithLayout } from "@/utils/types";
import JournalScreen from "@/templates/JournalScreen";

const OcJournal: NextPageWithLayout = () => {
  return (
    <Page title="OcJournal" description="Oncoclínicas - OcJournal">
      <JournalScreen />
    </Page>
  );
};

export default OcJournal;
