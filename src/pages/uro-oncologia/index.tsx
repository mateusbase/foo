import Page from "@/components/Page";
import UroOncology from "@/templates/UroOncologyScreen";

export default function Urooncology(): JSX.Element {
  return (
    <Page
      title="Uro-Oncologia"
      description="Com uma equipe médica altamente especializada e serviços de qualidade, a Oncoclínicas oferece tratamentos completos e especializados para tumores urológicos, incluindo câncer de próstata, bexiga, rins, ureteres, testículos e pênis."
    >
      <UroOncology />
    </Page>
  );
}
