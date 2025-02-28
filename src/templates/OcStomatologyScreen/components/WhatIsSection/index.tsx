const WhatIsSection = (): JSX.Element => {
  return (
    <section>
      <h1 className="text-2xl text-primary md:text-[40px]">O que é?</h1>
      <ul className="ml-4 mt-4 list-outside list-disc md:mt-6 md:text-xl">
        <li>
          Especialidade odontológica essencial no cuidado de pacientes
          oncológicos.
        </li>
        <li>
          Atua na prevenção, diagnóstico, prognóstico e tratamento de possíveis
          alterações bucais.
        </li>
        <li>
          Aborda doenças sistêmicas e complicações ligadas ao câncer, tais como
          procedimentos cirúrgicos, transplantes de medula, quimioterapia e
          radioterapia.
        </li>
      </ul>
    </section>
  );
};
export default WhatIsSection;
