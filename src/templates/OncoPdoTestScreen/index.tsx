import PageLayout from "@/components/PageLayout";

export default function OncoPdoTestScreen(): JSX.Element {
  const testContent = `
    Criado para auxiliar na tomada de decisão dos tratamentos oncológicos, este teste permite analisar a resposta do tumor a diferentes combinações de quimioterápicos e terapias-alvo moleculares, auxiliando na determinação de um tratamento 100% personalizado, muito mais eficaz e assertivo.

O Teste Onco-PDO™️ é realizado a partir de material tumoral, extraído por biópsia ou punção. As células coletadas passam por cultivo e tratamento, gerando aglomerados geneticamente idênticos ao tumor, chamados de PDOs (Patient-Derived Organoids).

A partir disso, são criados modelos in-vitro em 3D aos quais são aplicadas as possibilidades de tratamento escolhidas pelo médico. A resposta tumoral é quantificada e analisada para cada combinação de medicamentos e terapias, possibilitando identificar qual será mais assertiva para aquele paciente, individualmente.`;

  const paragraphs = testContent.trim().replace(/\n+/g, "\n\n").split("\n\n");

  return (
    <PageLayout
      title="Teste ONCO-PDO™️"
      subtitle="Teste in-vitro que, a partir de modelos 3D obtidos do próprio tumor do paciente, avalia e quantifica a resposta das células tumorais a diferentes combinações de agentes quimioterápicos e terapias-alvo moleculares."
    >
      <div className="mt-10">
        <h1 className="text-[40px] text-primary">
          Onco-PDO™️ é o que há de mais moderno em Oncologia de Precisão
        </h1>

        <div className="my-10 w-full" />
        {paragraphs.map((paragraph) => (
          <p className="mt-5 text-xl text-darkGray">{paragraph}</p>
        ))}
      </div>
    </PageLayout>
  );
}
