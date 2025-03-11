import BaseSwiper from "../BaseSwiper";
import ValuesFullbleedBanner from "./components/valores";
import ValuesCard from "./components/valores/ValuesCard";
import valuesCardMock from "./components/valores/ValuesCard/ValuesCardMock";
import ShareOptions from "../ShareOptions";
import socialNetwork from "../ShareOptions/socialNetwork";

const valores = (): JSX.Element => {
  return (
    <div>
      <div>
        <h1 className="text-2xl text-primary md:text-title-lg">
          Acolhimento e inovação
        </h1>
        <h1 className="text-2xl text-primary md:mt-2 md:text-title-lg">
          Atenção integral e personalizada
        </h1>
        <p className="mt-7 text-base text-darkGray md:text-xl">
          A Oncoclínicas&Co tem como pilares de atuação o acolhimento e a
          inovação no tratamento oncológico. A Oncoclínicas considera essencial
          que todos os profissionais envolvidos nos cuidados de cada paciente
          conheçam e compreendam sua história de vida, a fim de proporcionar uma
          atenção integral e interdisciplinar com{" "}
          <span className="text-black">tratamento personalizado.</span>
        </p>
        <p className="mt-7 text-base text-darkGray md:text-xl">
          Na Oncoclínicas, a excelência no atendimento reflete um olhar para o
          paciente que vai além da doença. Assim, a Oncoclínicas combina o mais
          alto nível de conforto, segurança e conveniência com os tratamentos
          mais avançados para o câncer.
        </p>
        <p className="mt-7 text-base text-darkGray md:text-xl">
          Essa <span className="text-black">filosofia de excelência</span> é
          praticada em todas as unidades da Oncoclínicas, por meio de um corpo
          clínico qualificado, equipes multidisciplinares e uma linha de
          cuidados que prioriza o calor humano, a empatia e, acima de tudo, a
          qualidade de vida dos pacientes.
        </p>
      </div>
      <h1 className="mb-4 mt-10 text-2xl text-primary lg:-mb-6 lg:text-title-lg">
        Nossa essência
      </h1>
      <ValuesFullbleedBanner
        title="Missão, Visão e Valores"
        description="Vencer o câncer, tendo como prioridade a vida e o bem estar do paciente, enquanto nos mantemos como referência mundial em excelência médica sem abandonar nossos valores, que incluem integridade, responsabilidade, profissionalismo, entre outros."
        src="/assets/images/values/values-page.png"
      />
      <div className="mb-10 mt-9 md:hidden">
        <BaseSwiper
          data={valuesCardMock}
          renderItem={(type) => (
            <ValuesCard
              key={type.id}
              title={type.title}
              description={type.description}
              icon={type.icon}
            />
          )}
          slidesPerView={1}
        />
      </div>
      <div className="mb-11 hidden grid-cols-1 items-stretch md:mt-8 md:grid md:grid-cols-3 md:gap-6">
        {valuesCardMock.map((type) => (
          <ValuesCard
            key={type.id}
            title={type.title}
            description={type.description}
            icon={type.icon}
          />
        ))}
      </div>
      <div className="mb-24">
        <ShareOptions options={socialNetwork} />
      </div>
    </div>
  );
};

export default valores;
