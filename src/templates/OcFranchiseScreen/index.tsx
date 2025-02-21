import PageLayout from "@/components/PageLayout";
import RightFullbleedBanner from "./components/RightFullbleedBanner";

export default function OcFranchiseScreen(): JSX.Element {
  return (
    <PageLayout
      title="OC Franquia"
      subtitle="Uma oportunidade transformadora para você, para a sua região e para os seus pacientes"
    >
      <RightFullbleedBanner
        title="Faça parte do maior grupo de oncologia da américa latina"
        src="/assets/images/oc-franquia/banner/image (3).png"
      />
    </PageLayout>
  );
}
