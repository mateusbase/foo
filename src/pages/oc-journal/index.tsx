import Page from "@/components/Page";
import OcJournalScreen from "@/templates/OcJournalScreen";

const OcJournal = (): JSX.Element => {
  return (
    <Page
      title="Oncoclínicas - Referência em tratamento oncológico | Oc Journal"
      description="Oc Journal"
    >
      <OcJournalScreen />
    </Page>
  );
};

export default OcJournal;
