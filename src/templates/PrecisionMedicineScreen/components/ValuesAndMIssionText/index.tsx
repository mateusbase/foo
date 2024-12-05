const ValuesAndMissionText = (): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="mb-5 gap-2">
        <h3 className="mb-2 font-lato-regular text-4xl text-primary md:text-5xl">
          Nossa missão
        </h3>
        <span className="font-lato-regular text-lg text-darkGray md:text-2xl">
          Vencer o câncer através da medicina de precisão
        </span>
      </div>
      <div>
        <h3 className="mb-2 font-lato-regular text-4xl text-primary md:text-5xl">
          Nossos valores
        </h3>
        <span className="justify-center text-justify font-lato-regular text-lg text-darkGray md:text-2xl">
          Combinar nossa capacidade única de recursos humanos globais, pacientes
          e experiência em oncologia clínica para criar uma referência mundial
          em medicina de precisão.
        </span>
      </div>

      <p className="mt-4 w-[95%] text-justify font-lato-regular text-darkGray md:text-2xl">
        Para respeitar e valorizar as individualidades dos pacientes com câncer,
        o Grupo Oncoclínicas inovou com a OC Medicina de Precisão, que engloba
        os laboratórios de Anatomia Patológica, Genômica e Big Data, todos
        focados em oncologia. Desde 2019, a OC Medicina de Precisão oferece um
        portfólio molecular completo, de alta relevância clínica, para fins
        diagnósticos, preditivos e prognósticos, contribuindo de maneira efetiva
        para a prevenção da doença e o tratamento dos pacientes.
      </p>
      <p className="mb-7 mt-4 w-[95%] text-justify font-lato-regular text-darkGray md:text-2xl">
        O laboratório OC Medicina de Precisão recebe amostras de todo o país
        para diagnósticos, segundas opiniões e análises moleculares. É um centro
        integrado de medicina de precisão que oferece uma ampla gama de testes
        moleculares, desde imuno-histoquímica até sequenciamento, tanto testes
        de genes isolados quanto painéis multigenes de última geração, já
        comercialmente disponíveis.
      </p>
    </div>
  );
};

export default ValuesAndMissionText;
