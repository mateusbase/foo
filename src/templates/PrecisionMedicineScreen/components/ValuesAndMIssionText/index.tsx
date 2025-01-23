const ValuesAndMissionText = (): JSX.Element => {
  return (
    <div className="flex flex-col lg:mb-10 lg:mt-32 lg:flex-row">
      <div className="flex flex-col gap-5 lg:w-1/2 lg:flex-col lg:gap-12">
        <div className="flex flex-col lg:gap-3">
          <h3 className="mb-2 font-lato-regular text-4xl text-primary md:text-5xl">
            Nossa missão
          </h3>
          <span className="font-lato-regular text-lg text-darkGray md:mb-5 md:text-2xl">
            Vencer o câncer através da medicina de precisão
          </span>
        </div>
        <div className="flex flex-col lg:gap-3">
          <h3 className="mb-2 font-lato-regular text-4xl text-primary md:text-5xl">
            Nossos valores
          </h3>
          <span className="text-justify font-lato-regular text-lg text-darkGray md:text-2xl lg:w-[90%]">
            Combinar nossa capacidade única de recursos humanos globais,
            pacientes e experiência em oncologia clínica para criar uma
            referência mundial em medicina de precisão.
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:w-1/2">
        <p className="mt-4 w-full text-justify font-lato-regular text-darkGray md:text-2xl">
          Para respeitar e valorizar as individualidades dos pacientes com
          câncer, o Grupo Oncoclínicas inovou com a OC Medicina de Precisão, que
          engloba os laboratórios de Anatomia Patológica, Genômica e Big Data,
          todos focados em oncologia. Desde 2019, a OC Medicina de Precisão
          oferece um portfólio molecular completo, de alta relevância clínica,
          para fins diagnósticos, preditivos e prognósticos, contribuindo de
          maneira efetiva para a prevenção da doença e o tratamento dos
          pacientes.
        </p>
        <p className="mb-7 mt-4 w-full text-justify font-lato-regular text-darkGray md:text-2xl">
          O laboratório OC Medicina de Precisão recebe amostras de todo o país
          para diagnósticos, segundas opiniões e análises moleculares. É um
          centro integrado de medicina de precisão que oferece uma ampla gama de
          testes moleculares, desde imuno-histoquímica até sequenciamento, tanto
          testes de genes isolados quanto painéis multigenes de última geração,
          já comercialmente disponíveis.
        </p>
      </div>
    </div>
  );
};

export default ValuesAndMissionText;
