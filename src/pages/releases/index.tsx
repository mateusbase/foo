import ReleasesScreen from "@/templates/ReleasesScreen";
import Page from "@/components/Page";

const Releases = (): JSX.Element => {
  return (
    <Page
      title="Oncoclínicas - Referência em tratamento oncológico | Releases"
      description="Oncoclínicas - Releases"
    >
      <ReleasesScreen />
    </Page>
  );
};

export default Releases;
