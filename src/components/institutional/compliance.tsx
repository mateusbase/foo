import React from "react";
import ComplianceCards from "./components/compliance/ComplianceCards";
import complianceCardMock from "./components/compliance/ComplianceCards/ComplianceCardsMock";
import BaseButton from "../Button";
import ShareOptions from "../ShareOptions";
import socialNetwork from "../ShareOptions/socialNetwork";

const Compliance: React.FC = () => {
  return (
    <div>
      <div className="ml-8 mr-[23px] md:mr-8 lg:ml-[52px]">
        <h1 className="text-4xl text-primary lg:text-5xl">
          Princípios fundamentais de respeito à vida
        </h1>
        <p className="mt-11 text-sm text-darkGray md:mt-12 md:text-xl lg:mt-11">
          Para a <span className="text-black">Oncoclínicas&Co</span>, conduzir
          as atividades de forma ética, defendendo princípios fundamentais de
          respeito à vida, transparência e honestidade é parte imprescindível do
          trabalho e da forma de conduzir dia a dia.
        </p>
        <p className="mt-8 text-sm text-darkGray md:text-xl">
          Em consonância com esses princípios, empreendemos a implementação de
          um
          <span className="text-black"> programa de compliance</span> que
          estabelece diretrizes e orienta nossos colaboradores sobre as condutas
          esperadas, desenvolvendo e fortalecendo as condutas esperadas no
          exercício de suas funções.
        </p>
        <p className="mt-8 text-sm text-darkGray md:text-xl">
          Os{" "}
          <span className="text-black">pilares do programa de compliance</span>{" "}
          deste programa são a estrita observância das leis e de regulamentos
          aplicáveis às atividades do Grupo e a adoção fundamentado nos em
          princípios dos mais elevados padrões de ética empresarial.
        </p>
        <p className="mt-8 text-sm text-darkGray md:text-xl">
          A Oncoclínicas possui contratos com a Administração Pública, de forma
          direta e indireta para a prestação de serviços médicos por meio de
          contratos de credenciamento, que se enquadram na hipótese de dispensa
          de licitação prevista na Lei 14.133 de 1º de abril de 2021 (Lei de
          Licitações e Contratos Administrativos), Seção III. Para informações
          sobre os contratos em vigor, acesse o Portal Nacional de Contratações
          Públicas (para contratos de nível Federal) ou as bases
          disponibilizadas pelo seu Município ou Estado (para contratos de
          níveis municipais e estaduais).
        </p>
      </div>
      <div>
        <h1 className="mt-16 text-4xl text-primary md:mx-8 md:mt-11 lg:ml-[52px] lg:mt-12 lg:text-5xl">
          Conheca as políticas de compliance da Oncoclínicas
        </h1>
        <div className="mt-11 grid grid-cols-1 gap-4 md:mx-8 lg:ml-[52px]">
          {complianceCardMock.map((card) => (
            <ComplianceCards key={card.id} title={card.title} />
          ))}
        </div>
        <div className="full-bleed mb-10 mt-16 flex flex-col items-center bg-custom-gradient-dark-145deg pb-11 pl-[37px] pr-[29px] pt-[52px] text-white md:mb-16 md:mt-24 md:px-14 md:py-[130px] lg:mb-[141px] lg:h-[425px] lg:w-[1027px] lg:items-start lg:py-[50px] lg:pl-14 lg:pr-16">
          <h1 className="text-center text-4xl md:text-5xl lg:text-start">
            Sua contribuição é muito importante
          </h1>
          <p className="my-12 text-center text-xl md:text-2xl lg:my-6 lg:text-start">
            {" "}
            A Oncoclínicas&Co disponibiliza canais para que quaisquer pessoas
            possam fazer questionamentos sobre o seu programa de compliance ou
            relatar suspeitas de violação ao seu código de conduta e suas
            políticas. Você pode entrar em contato através do número
            0800-591-8829, e-mail oncoclinicas@canaldeintegridade.com.br ou no
            botão abaixo.
          </p>
          <BaseButton className="h-[54px] w-[330px] border border-white bg-transparent text-lg text-white md:w-[482px] lg:mt-6 lg:w-[300px]">
            Canal de Integridade
          </BaseButton>
        </div>
      </div>
      <div className="md:md-[139px] mb-20 md:ml-[45px] lg:mb-40">
        <ShareOptions options={socialNetwork} />
      </div>
    </div>
  );
};

export default Compliance;
