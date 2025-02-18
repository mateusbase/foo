import PageLayout from "@/components/PageLayout";
import livingWithCancerMocks from "./livingWithCancerMcok";
import RoundedCard from "./components/RoundedCard";
import PreventionSection from "./components/PreventionSection";

export default function LivingWithCancerScreen(): JSX.Element {
  return (
    <PageLayout
      title="Convivendo com o câncer"
      subtitle="A Oncoclínicas oferece suporte abrangente a pacientes com câncer, abordando diversas estratégias para melhorar a qualidade de vida e reduzir efeitos adversos que podem ocorrer durante o tratamento contra o câncer. "
    >
      <div className="my-14 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {livingWithCancerMocks.map((item) => (
          <RoundedCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>

      <PreventionSection />
    </PageLayout>
  );
}
