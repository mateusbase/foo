import { Element } from "react-scroll";

const FirstParagraph = (): JSX.Element => {
  return (
    <Element
      className="mt-20 text-base text-darkGray md:text-xl lg:mt-0"
      name="section-1"
      id="section-1"
    >
      <h1 className="mb-4 text-2xl text-primary md:mb-11 md:text-4xl">
        O que é?
      </h1>

      <p>
        A terapia celular é um ramo da medicina que utiliza células humanas para
        tratar doenças e lesões no corpo, essa abordagem aproveita a habilidade
        das células para regenerar tecidos danificados, melhorar o funcionamento
        dos órgãos e tratar condições médicas, incluindo o câncer.
      </p>
      <br />
      <p>
        As células usadas na terapia celular podem ser obtidas do próprio
        paciente (Autólogas) ou de doadores compatíveis (Alogênicas). Essas
        células podem ser células-tronco, células do sistema imunológico ou
        outras especializadas, dependendo da condição médica em tratamento.
      </p>
      <br />
      <p>
        A terapia celular é uma área em constante desenvolvimento, trazendo
        novas perspectivas no tratamento de doenças hematológicas, cânceres,
        lesões musculoesqueléticas e doenças autoimunes. Consulte sempre um
        profissional especializado para entender melhor como a terapia celular
        pode ser aplicada no seu caso específico.
      </p>
    </Element>
  );
};

const SecondParagraph = (): JSX.Element => {
  return (
    <Element
      className="mt-20 text-base text-darkGray md:text-xl"
      name="section-2"
      id="section-2"
    >
      <h1 className="mb-4 text-2xl text-primary md:mb-11 md:text-4xl">
        TMO Autólogo
      </h1>
      <p>
        O transplante de medula óssea autólogo, também chamado de quimioterapia
        em altas doses com resgate de células-tronco hematopoiéticas, é uma
        opção de tratamento para pacientes que enfrentam doenças hematológicas,
        como o Mieloma Múltiplo, Linfoma e algumas doenças auto imunes.
      </p>
      <br />
      <p>O procedimento é dividido em quatro etapas:</p>
      <br />
      <ol className="list-outside list-decimal pl-5">
        <li>
          <span className="font-bold">Mobilização: </span>
          Nessa etapa, o paciente recebe medicações que estimulam o aumento das
          células-tronco e as fazem migrar para a corrente sanguínea.
        </li>
        <li>
          <span className="font-bold">Coleta: </span>
          Durante essa fase, o paciente passa por um processo semelhante a uma
          doação de sangue, e através de um acesso calibroso, o sangue é
          centrifugado por uma máquina capaz de separar as células-tronco
          hematopoiéticas, que são, então, armazenadas e congeladas para uso
          posterior.
        </li>
        <li>
          <span className="font-bold">Quimioterapia de Condicionamento: </span>
          Quimioterapia intensiva, que visa aprofundar a resposta e destruir
          células tumorais residuais. Tem como efeito colateral a destruição das
          células-tronco da medula óssea. É por isso que a coleta prévia e o
          armazenamento dessas células se faz necessária no processo.
        </li>
        <li>
          <span className="font-bold">
            Infusão de Células-Tronco Hematopoiéticas:{" "}
          </span>
          Após a quimioterapia de condicionamento, as células coletadas
          anteriormente são infundidas no paciente. A missão dessas células é
          repovoar a medula óssea que foi danificada pela quimioterapia.
        </li>
      </ol>
      <br />
      <p>
        O período desde a infusão até a restauração da produção das células
        sanguíneas pelas células recém-infundidas leva aproximadamente de 10 a
        14 dias. Durante esse período notamos diminuição das células do sangue
        (hemoglobina, leucócitos e plaquetas), o que pode aumentar o risco de
        infecções e sangramentos. Além disso, algumas complicações, como a
        mucosite, que se manifesta como úlceras na boca ou diarreia, podem
        ocorrer. Nessa fase, é crucial que os pacientes sejam acompanhados por
        uma equipe médica especializada, realizem exames regulares, recebam
        medidas preventivas contra infecções e suporte transfusional, se
        necessário.
      </p>
      <br />
      <p>
        Apesar da complexidade envolvida, esse tratamento está bem estabelecido
        na literatura médica há muitos anos e apresenta baixas taxas de
        mortalidade relacionadas ao procedimento. Oferece oportunidade de cura
        ou aumento da sobrevida sem doença para muitos pacientes que enfrentam
        doenças hematológicas desafiadoras.
      </p>
    </Element>
  );
};

const ThirdParagraph = (): JSX.Element => {
  return (
    <Element
      className="mt-20 text-base text-darkGray md:text-xl"
      name="section-3"
      id="section-3"
    >
      <h1 className="mb-4 text-2xl text-primary md:mb-11 md:text-4xl">
        TMO Alogênico
      </h1>
      <p>
        O transplante de medula óssea alogênico é uma opção de tratamento
        curativo para condições médicas graves, como Leucemias, Síndrome
        Mielodisplásica, Linfomas, falências medulares, imunodeficiências
        hereditárias e hemoglobinopatias.
      </p>
      <br />
      <p>
        Neste procedimento, a medula óssea doente do paciente é substituída pela
        medula saudável de um doador. O doador pode ser idêntico ou ter 50% de
        compatibilidade (haplo-idêntico), aparentado (familiar) ou não
        aparentado (banco de medula óssea ou cordão umbilical).
      </p>
      <br />
      <p>
        Antes de iniciar o tratamento, tanto o receptor quanto o doador passam
        por uma avaliação médica abrangente para avaliar e minimizar possíveis
        riscos e complicações.
      </p>
      <br />
      <p>
        Com base no status da doença, nas condições clínicas do receptor e no
        tipo de transplante (HLA idêntico ou haplo-idêntico), é selecionado o
        regime de preparação (condicionamento).
      </p>
      <br />
      <p>O tratamento é dividido em quatro etapas:</p>
      <br />
      <p>
        Seleção do Doador: Escolha cuidadosa do doador de acordo com
        compatibilidade, tipagem sanguínea e exames sorológicos.
        <br />
        Coleta de Células-Tronco Hematopoéticas: As células-tronco podem ser
        coletadas através do sangue periférico, após o uso de medicamentos que
        estimulam a medula óssea a liberar essas células para o sangue, ou podem
        ser coletadas diretamente da medula óssea, localizada nos ossos da
        bacia, em um procedimento realizado no centro cirúrgico sob anestesia.
        <br />
        Regime de Condicionamento: Esta etapa envolve o preparo do receptor para
        receber a nova medula saudável. Geralmente, inclui quimioterapia e/ou
        radioterapia, com o objetivo de destruir a medula óssea doente e reduzir
        a imunidade do receptor afim de possibilitar boa enxertia e evitar a
        rejeição da nova medula.
        <br />
        Infusão de Células-Tronco Hematopoéticas: As células coletadas do doador
        são infundidas no receptor como uma transfusão sanguínea.
        <br />
        Após a infusão das células, o paciente pode apresentar efeitos
        colaterais relacionados à quimioterapia de condicionamento, como
        mucosite (úlceras na boca ou diarreia), queda nas células sanguíneas e a
        necessidade de suporte transfusional. Para evitar infecções, são
        administrados antibióticos e antifúngicos.
      </p>
      <br />
      <p>
        A adição de imunossupressores é fundamental nesta etapa para reduzir o
        risco de rejeição da medula recém-infundida. Em média, de 14 a 21 dias
        após a infusão das células, elas são capazes de repovoar a medula e
        iniciar a produção de células sanguíneas (enxertia).
      </p>
      <br />
      <p>
        Durante todo o processo, é essencial que o paciente seja acompanhado por
        uma equipe multiprofissional especializada, que esteja atenta a
        possíveis complicações, como a Doença do Enxerto Contra Hospedeiro
        (DECH) ou a Doença Veno-Oclusiva (VOD), para uma identificação rápida e
        manejo adequado.
      </p>
      <br />
      <p>
        O transplante de medula óssea alogênico é uma opção de tratamento
        curativo para algumas doenças graves, mas envolve potenciais
        complicações e toxicidades específicas, Consulte sempre um profissional
        especializado para entender melhor como a terapia celular pode ser
        aplicada no seu caso específico.sea autólogo, também chamado de
        quimioterapia em altas doses com resgate de células-tronco
        hematopoiéticas, é uma opção de tratamento para pacientes que enfrentam
        doenças hematológicas, como o Mieloma Múltiplo, Linfoma e algumas
        doenças auto imunes.
      </p>
      <br />
      <p>O procedimento é dividido em quatro etapas:</p>
      <br />
      <ol className="list-outside list-decimal pl-5">
        <li>
          <span className="font-bold">Mobilização: </span>
          Nessa etapa, o paciente recebe medicações que estimulam o aumento das
          células-tronco e as fazem migrar para a corrente sanguínea.
        </li>
        <li>
          <span className="font-bold">Coleta: </span>
          Durante essa fase, o paciente passa por um processo semelhante a uma
          doação de sangue, e através de um acesso calibroso, o sangue é
          centrifugado por uma máquina capaz de separar as células-tronco
          hematopoiéticas, que são, então, armazenadas e congeladas para uso
          posterior.
        </li>
        <li>
          <span className="font-bold">Quimioterapia de Condicionamento: </span>{" "}
          Quimioterapia intensiva, que visa aprofundar a resposta e destruir
          células tumorais residuais. Tem como efeito colateral a destruição das
          células-tronco da medula óssea. É por isso que a coleta prévia e o
          armazenamento dessas células se faz necessária no processo.
        </li>
        <li>
          <span className="font-bold">
            Infusão de Células-Tronco Hematopoiéticas:{" "}
          </span>
          Após a quimioterapia de condicionamento, as células coletadas
          anteriormente são infundidas no paciente. A missão dessas células é
          repovoar a medula óssea que foi danificada pela quimioterapia.
        </li>
      </ol>
      <br />
      <p>
        O período desde a infusão até a restauração da produção das células
        sanguíneas pelas células recém-infundidas leva aproximadamente de 10 a
        14 dias. Durante esse período notamos diminuição das células do sangue
        (hemoglobina, leucócitos e plaquetas), o que pode aumentar o risco de
        infecções e sangramentos. Além disso, algumas complicações, como a
        mucosite, que se manifesta como úlceras na boca ou diarreia, podem
        ocorrer. Nessa fase, é crucial que os pacientes sejam acompanhados por
        uma equipe médica especializada, realizem exames regulares, recebam
        medidas preventivas contra infecções e suporte transfusional, se
        necessário.
      </p>
      <br />
      <p>
        Apesar da complexidade envolvida, esse tratamento está bem estabelecido
        na literatura médica há muitos anos e apresenta baixas taxas de
        mortalidade relacionadas ao procedimento. Oferece oportunidade de cura
        ou aumento da sobrevida sem doença para muitos pacientes que enfrentam
        doenças hematológicas desafiadoras.
      </p>
    </Element>
  );
};

export { FirstParagraph, SecondParagraph, ThirdParagraph };
