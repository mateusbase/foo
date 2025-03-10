import BaseButton from "@/components/Button";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";

export default function General(): JSX.Element {
  const generalContent = `Dos primeiros sintomas à jornada do tratamento, passando pelo diagnóstico e pela definição dos melhores procedimentos para cada caso, o câncer é uma doença que pode deixar o paciente fragilizado (tanto física quanto psicologicamente) e impactar em questões práticas de sua vida e de seu dia a dia. 

Não é raro, por exemplo, uma pessoa precisar diminuir a carga de trabalho ou mesmo deixar de trabalhar para conseguir dar conta das consultas, dos eventuais efeitos adversos de medicamentos e da busca por equilíbrio emocional. Desta forma, a segurança financeira fica abalada e o paciente passa a precisar de uma ajuda para pagar contas e impostos que nem sempre sua família e sua rede de apoio conseguem oferecer.

A locomoção também pode ficar temporariamente prejudicada, seja por incapacidade física ou financeira (mais um efeito do impacto indireto da doença no orçamento), e todo auxílio será necessário e bem-vindo.

Diante das circunstâncias que fazem parte da realidade dos pacientes oncológicos, a legislação brasileira dispõe de normativos legais que auxiliam os cidadãos a passarem com mais tranquilidade pelo tratamento e pela reintegração à rotina após a alta médica. Eles estão alinhados com o artigo 196 da Constituição Federal, que declara: 

“A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação”.

Os benefícios e direitos podem ser de caráter municipal, estadual ou federal, e englobam direitos de saúde (acesso ao tratamento pelo SUS e por planos de saúde, direito à cirurgia de reconstrução mamária e de medicamentos gratuitos e auxílio financeiro para o transporte quando o tratamento precisa ser realizado em outro município), facilidades para o dia a dia (dispensa do rodízio de automóveis, quitação do financiamento da casa própria, transporte coletivo municipal e interestadual gratuito, prioridade processual e acesso ao BPC), benefícios tributários (isenção de imposto de renda, IOF, IPTU, IPVA, IPI e ICMS) e direitos do trabalhador (saque do FGTS e do PIS/Pasep, aposentadoria por invalidez, auxílio doença e proteção à dispensa discriminatória).

É importante destacar que têm direito a esses benefícios os pacientes de neoplasias malignas. São necessários laudos médicos e, em alguns casos, passar por uma perícia médica para comprovar essa condição. Todas as pessoas com câncer têm acesso à documentação, que pode conter prontuários, laudos, resultados de exames e relatórios médicos, entre outros.

Uma dica: deixar todos os documentos sempre em uma pasta e levá-la para todos os atendimentos relacionados a esses pedidos. Mesmo que alguns dos documentos não sejam necessários em um ou outro caso, é melhor não correr o risco de ficar com o benefício pendente por causa de um laudo ou resultado de exame que tenha sido deixado em casa.

Este material pertence ao Grupo Oncoclínicas e não possui o objetivo de fornecer aconselhamento jurídico a qualquer pessoa ou sobre qualquer assunto específico, tendo caráter meramente informativo nos termos da legislação vigente na ocasião de sua elaboração. Em caso de dúvidas, entre em contato com o Grupo Oncoclínicas para esclarecimentos. É vedada a reprodução, utilização, divulgação ou distribuição, parcial ou total, deste material sem o prévio consentimento do Grupo Oncoclínicas.`;
  const paragraphs = generalContent
    .trim()
    .replace(/\n+/g, "\n\n")
    .split("\n\n");

  return (
    <div>
      <h1 className="text-2xl leading-10 text-primary md:text-title-lg">
        Conheça seus direitos
      </h1>

      {paragraphs.map((paragraph) => (
        <p className="mt-3 text-lg text-darkGray md:mt-6">{paragraph}</p>
      ))}

      <div className="my-12 flex h-48 flex-col items-center rounded-xl border-3 border-purpleMedium p-6 md:w-1/2">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold text-darkGray">Material de Apoio</h2>
          <p className="my-2 text-center text-base text-darkGray lg:block">
            Faça o download da cartilha de Direitos e Deveres do Paciente em
            PDF.
          </p>
        </div>
        <div className="w-1/2">
          <BaseButton className="w-full bg-purpleMedium text-white">
            Download
          </BaseButton>
        </div>
      </div>

      <div className="mb-16">
        <ShareOptions options={socialNetwork} />
      </div>
    </div>
  );
}
