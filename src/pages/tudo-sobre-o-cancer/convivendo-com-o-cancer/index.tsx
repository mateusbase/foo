import Page from "@/components/Page";
import LivingWithCancerScreen from "@/templates/LivingWithCancerScreen";

const AllAboutCancer = (): JSX.Element => {
  return (
    <Page
      title="Convivendo com o câncer"
      description="A Oncoclínicas oferece suporte abrangente a pacientes com câncer, abordando diversas estratégias para melhorar a qualidade de vida e reduzir efeitos adversos que podem ocorrer durante o tratamento contra o câncer. "
    >
      <LivingWithCancerScreen />
    </Page>
  );
};

export default AllAboutCancer;
