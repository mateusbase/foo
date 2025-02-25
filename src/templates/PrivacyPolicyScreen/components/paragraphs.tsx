import Link from "next/link";
import { Element } from "react-scroll";

const FirstParagraph = (): JSX.Element => {
  return (
    <Element
      className="mt-20 text-base text-darkGray md:text-xl lg:mt-0"
      name="section-1"
      id="section-1"
    >
      <h1 className="mb-4 text-2xl text-primary md:mb-11 md:text-4xl">
        Introdução
      </h1>
      <p>
        A presente Política de Privacidade e Tratamento de Dados tem por
        finalidade demonstrar o compromisso da Oncoclínicas do Brasil Serviços
        Médicos S.A., em seu nome e em nome de todas as suas empresas
        subsidiárias, controladas, coligadas ou que de alguma forma integrem sua
        estrutura (“Oncoclínicas”), com sede na Av. Pres. Juscelino Kubitschek,
        n° 510, 2º segundo andar, no bairro Vila Nova Conceição, na cidade de
        São Paulo, no estado de São Paulo, CEP 13571-410 (“Nós”), com a sua
        privacidade e a proteção dos seus Dados, de forma clara e de acordo com
        as leis em vigor.
      </p>
      <p className="mt-8">
        Esta Política descreve as principais regras sobre o Tratamento dos seus
        Dados Pessoais quando atendemos Você por meio de nosso ambiente virtual
        (“Oncoclínicas por Você”).
      </p>
      <p className="mt-8">
        Para acessar e utilizar das funcionalidades ofertadas no Oncoclínicas
        por Você, Você declara que fez a leitura completa e atenta desta
        Política, estando plenamente ciente dos termos aqui dispostos e
        conferindo a sua livre e expressa concordância para o Tratamento dos
        Dados Pessoais de acordo com as condições abaixo especificadas.
      </p>
      <p className="mt-8">
        Buscamos oferecer-lhe os serviços com a maior eficiência possível e,
        para isso, nos atualizamos constantemente. Por esse motivo, esta
        Política poderá sofrer ajustes a qualquer tempo, cabendo a Você
        verificá-la sempre que possível através deste endereço eletrônico.
      </p>
      <p className="mt-8">
        Havendo qualquer alteração relevante na forma em que tratamos os seus
        dados pessoais, informaremos a Você as novas condições adicionais
        através dos meios de contato por Você fornecidos.
      </p>
    </Element>
  );
};

const SecondParagraph = (): JSX.Element => {
  return (
    <Element
      className="mt-20 text-base text-darkGray md:text-xl lg:mt-0"
      name="section-2"
      id="section-2"
    >
      <h1 className="mb-4 text-2xl text-primary md:my-11 md:text-4xl">
        Coleta de Dados
      </h1>
      <p>
        2.1. Como coletamos Dados. Os Dados poderão ser coletados quando Você os
        submete, ou quando Você interage com Nossos Ambientes e serviços, o que
        inclui:
      </p>
      <div className="mt-8">
        <span className="text-black">Dados Cadastrais</span> <br />
        Dados: <br />
        Nome completo; CPF; Telefone/celular; Endereço residencial; Foto;
        Registro no Conselho Profissional; Data de nascimento; Idade; Gênero;
        Profissão; Naturalidade; Nacionalidade; E-mail; Número do cartão do
        plano de saúde; Número do beneficiário do plano de saúde;
      </div>
      <div className="mt-8">
        <span className="text-black">Finalidade</span> <br />
        <ul className="ml-0 list-inside list-[lower-roman] pl-0">
          <li>Identificar e autenticar Você.</li>
          <li>
            Cumprir com as obrigações decorrentes do uso dos nossos serviços e
            exigidas por obrigação legal e/ou regulatória;
          </li>
          <li>
            Ampliar nosso relacionamento, informando Você sobre novidades,
            funcionalidades, conteúdos, notícias e demais eventos que
            consideramos relevantes para Você;
          </li>
          <li>
            Prestação de serviços adequados às suas necessidades; iv. Garantir a
            portabilidade dos Dados cadastrais para outro Controlador do mesmo
            ramo de nossa atuação, caso solicitado por Você, cumprindo com
            obrigação do artigo 18 da Lei Geral de Proteção de Dados Pessoais.
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <span className="text-black">Dados de imagem</span> <br />
        Dados: <br />
        Laudos médicos; Resultados de exames; Requisições de consultas/exames;
        Históricos de consultas/exames; Resumo do caso médico; Protocolo de
        tratamento; CID; e Dados de prontuário; Cartão do plano de saúde;
        Documentos de identificação do paciente.
        <br />
        Formatos:
        <br />
        PNG; JPG, PDF.
        <br />
        Finalidade:
        <ul className="ml-0 list-inside list-[lower-roman] pl-0">
          <li>
            Cumprir com as obrigações decorrentes do uso dos nossos serviços e
            exigidas por obrigação legal e/ou regulatória;
          </li>
          <li>Emissão de receita médica;</li>
          <li>
            Acompanhar todo o seu histórico como paciente, em relação aos seus
            dados que constam em prontuário; e
          </li>
          <li>Apoio ao profissional da saúde.</li>
        </ul>
      </div>
      <div className="mt-8">
        <span className="text-black">Dados de imagem</span> <br />
        Dados: <br />
        Laudos médicos; Resultados de exames; Requisições de consultas/exames;
        Históricos de consultas/exames; Resumo do caso médico; Protocolo de
        tratamento; CID; e Dados de prontuário.
        <br />
        Finalidade:
        <ul className="ml-0 list-inside list-[lower-roman] pl-0">
          <li>
            Cumprir com as obrigações decorrentes do uso dos nossos serviços e
            exigidas por obrigação legal e/ou regulatória;
          </li>
          <li>Emissão de receita médica;</li>
          <li>
            Acompanhar todo o seu histórico como paciente, em relação aos seus
            dados que constam em prontuário; e
          </li>
          <li>Apoio ao profissional da saúde.</li>
        </ul>
      </div>
      <div className="mt-8">
        <span className="text-black">Dados de Identificação Digital</span>{" "}
        <br />
        Dados: <br />
        Endereço IP e Porta Lógica de Origem; Dispositivo (versão do sistema
        operacional); Geolocalização; Login; Senha; Registros de data e horário
        de cada ação que Você realizar; Quais telas Você acessou; ID da sessão.
        <br />
        <ul className="ml-0 list-inside list-[lower-roman] pl-0">
          <li>Identificar e autenticar Você;</li>
          <li>
            {" "}
            Cumprir com obrigações legais de manutenção de registros
            estabelecidas pela Lei n.º 12.965/2014 (“Marco Civil da Internet”);
          </li>
          <li>
            Mapeamento e melhorias para versões futuras do aplicativo, bem como
            consulta, para suporte em caso de bugs.
          </li>
        </ul>
        2.1.1. Você declara-se ciente que dados adicionais podem ser coletados
        quando Você faz uso do Oncoclínicas por Você no qual são oferecidos
        serviços e funcionalidades para os usuários.
        <br />
        2.2. Dados necessários e Dados Pessoais Sensíveis. Muitos de nossos
        serviços dependem diretamente de alguns Dados informados na tabela
        acima, principalmente Dados Cadastrais. Caso Você opte por não fornecer
        alguns desses Dados, podemos ficar impossibilitados de prestar total ou
        parcialmente nossos serviços à Você.
        <br />
        2.3. Atualização e Veracidade dos Dados. Você é o único responsável pela
        precisão, veracidade ou falta dela em relação aos Dados que Você fornece
        ou pela sua desatualização. Fique atento pois é de sua responsabilidade
        garantir a exatidão ou mantê-los atualizados.
        <br />
        2.3.1. Você poderá, a qualquer momento, solicitar a alteração e/ou
        atualização de seus dados cadastrais, através de nossas Centrais de
        Relacionamento.
        <br />
        2.3.2. Da mesma forma, Nós não somos obrigados a tratar quaisquer dos
        seus Dados se houver razões para crermos que tal tratamento possa nos
        imputar qualquer infração de qualquer lei aplicável, ou se o
        Oncoclínicas por Você estiver sendo utilizados para quaisquer fins
        ilegais, ilícitos ou contrários à moralidade.
        <br />
        2.4. Base de Dados. A base de dados formada por meio da coleta de Dados
        é de nossa propriedade e está sob nossa responsabilidade, sendo que seu
        uso, acesso e compartilhamento, quando necessários, serão feitos dentro
        dos limites e propósitos dos negócios descritos nesta Política.
        <br />
      </div>
    </Element>
  );
};
const ThirdParagraph = (): JSX.Element => {
  return (
    <Element
      className="mt-20 text-base text-darkGray md:text-xl lg:mt-0"
      name="section-3"
      id="section-3"
    >
      <h1 className="mb-4 text-2xl text-primary md:my-11 md:text-4xl">
        Compartilhamento de Dados
      </h1>
      <div className="mt-8">
        3.1. Hipóteses de compartilhamento dos Dados. Os Dados e as imagens
        coletadas e as atividades registradas podem ser compartilhados, sempre
        respeitando o envio do mínimo de informações necessárias para atingir as
        finalidades:
        <ul className="ml-0 list-inside list-[lower-alpha] pl-0">
          <li>
            Com empresas parceiras e prestadores de serviços necessários à
            execução dos nossos serviços, sempre exigido o cumprimento por tais
            empresas das diretrizes de segurança e proteção de dados;
          </li>
          <li>
            Visualização do prontuário pelos Profissionais da Saúde. O acesso e
            uso desses dados será limitado para a finalidade de assistência à
            saúde do paciente;
          </li>
          <li>
            Com autoridades judiciais, administrativas ou governamentais
            competentes, sempre que houver determinação legal, requerimento,
            requisição ou ordem judicial; e
          </li>
          <li>
            De forma automática, em caso de movimentações societárias, como
            fusão, aquisição e incorporação.
          </li>
        </ul>
        <p className="mt-8">
          3.2. Anonimização de Dados. Para as finalidades estatísticas relativas
          às características qualitativas e quantitativas gerais do Oncoclínicas
          por Você, os dados fornecidos por Você poderão ser compartilhados de
          forma anonimizada, isto é, de forma que não possibilite a sua
          identificação.
        </p>
        <p className="mt-8">
          3.3. Monitoramento. O Oncoclínicas por Você não coleta e nem monitora
          as informações trocadas entre Médicos e Pacientes por meio da
          Plataforma (“Comunicação Médico-Paciente”). A Comunicação
          Médico-Paciente é composta de informações protegidas por sigilo
          profissional dos Médicos, constantes de normas de ética médica
          emitidas pelo Conselho Federal de Medicina e pelo sigilo das
          comunicações, nos termos da Constituição Federal.
        </p>
        <p className="mt-8">
          3.4. Respostas mensagens de correio. A Oncoclínicas por Você
          reserva-se o direito de responder às mensagens de correio eletrônico
          recebidas de Você e usar as informações lá contidas para enviar a Você
          comunicações subsequentes relativas à plataforma, como por exemplo,
          envio do Token Você deve estar ciente de que terceiros podem ler os
          e-mails enviados, por isso o Oncoclínicas por Você sugere que não
          sejam enviadas por correio eletrônico quaisquer informações que Você
          gostariam de manter confidenciais.
        </p>
      </div>
    </Element>
  );
};
const FourthParagraph = (): JSX.Element => {
  return (
    <Element
      className="mt-20 text-base text-darkGray md:text-xl lg:mt-0"
      name="section-4"
      id="section-4"
    >
      <h1 className="mb-4 text-2xl text-primary md:my-11 md:text-4xl">
        Como protegemos seus dados e como você também poderá protegê-los
      </h1>
      <div className="mt-8">
        4.1. Medidas implementadas. Nós empregamos os melhores esforços para
        manter a privacidade e a segurança das informações por meio da adoção de
        medidas de segurança técnicas, físicas e administrativas:
        <ul className="ml-0 list-inside list-[lower-roman] pl-0">
          <li>
            medidas técnicas, como por exemplo transmissão de dados pessoais por
            meio de página de internet segura, armazenamento de dados em meios
            eletrônicos que mantêm altos padrões de segurança, utilização de
            sistema cujo acesso é controlado;
          </li>
          <li>
            medidas técnicas relacionadas ao arquivamento de imagens, como por
            exemplo, armazenamento de dados em meios eletrônicos que mantêm
            altos padrões de segurança, utilização de sistema cujo acesso é
            controlado e criptografado;
          </li>
          <li>
            medidas administrativas, incluindo a adoção de Políticas e Normas de
            Segurança, treinamentos/conscientização de colaboradores, acordos de
            confidencialidade.
          </li>
        </ul>
        <p className="mt-8">
          4.2. Compartilhamento de senhas. Você também é responsável pelo sigilo
          de seus Dados e deve ter sempre ciência de que o compartilhamento de
          senhas e dados de acesso viola esta Política e pode comprometer a
          segurança dos seus Dados e do Oncoclínicas por Você.
        </p>
        <p className="mt-8">
          4.3. Cuidados que Você dever tomar. É muito importante que Você
          proteja seus Dados contra acesso não autorizado ao seu computador ou
          celular, conta ou senha quando utilizar o Oncoclínicas por Você.
        </p>
        <p className="mt-8">
          4.4. Acesso aos Dados Pessoais, proporcionalidade e relevância.
          Internamente, os Dados coletados são acessados somente por
          profissionais devidamente autorizados, respeitando os princípios de
          proporcionalidade, necessidade e relevância para os objetivos do nosso
          negócio, além do compromisso de confidencialidade e preservação da sua
          privacidade nos termos desta Política.
        </p>
        <p className="mt-8">
          4.5. Links externos. Quando Você utilizar Nossos Ambientes, Você
          poderá ser conduzido, via link a outros portais ou plataformas, que
          poderão coletar suas informações e ter sua própria Política de
          Privacidade e Tratamento de Dados.
        </p>
        <p className="mt-8">
          4.5.1. Caberá a Você ler a Políticas de Privacidade e Tratamento de
          Dados de tais portais ou plataformas fora do nosso ambiente, sendo de
          sua responsabilidade aceitá-la ou rejeitá-la. Nós não somos
          responsáveis pelas Políticas de Privacidade e Tratamento de Dados de
          terceiros e nem pelo conteúdo de quaisquer websites ou serviços
          ligados à ambientes que não os nossos.
        </p>
        <p className="mt-8">
          4.6. Processamento por terceiros sob nossa diretriz. Caso empresas
          terceirizadas realizem o Tratamento em nosso nome de quaisquer Dados
          que coletamos, as mesmas respeitarão as condições aqui estipuladas e
          as normas de segurança da informação, obrigatoriamente.
        </p>
      </div>
    </Element>
  );
};
const FifthParagraph = (): JSX.Element => {
  return (
    <Element
      className="mt-20 text-base text-darkGray md:text-xl lg:mt-0"
      name="section-5"
      id="section-5"
    >
      <h1 className="mb-4 text-2xl text-primary md:my-11 md:text-4xl">
        Armazenamento de dados pessoais e o registro de atividades
      </h1>
      <div className="mt-8">
        5.1. Os Dados coletados e os registros de atividades são armazenados em
        ambiente seguro e controlado por um prazo mínimo que segue a tabela
        abaixo: <br />
        <p>Prazo de armazenamento e fundamento legal</p>
        <ul className="ml-3 list-outside list-disc pl-5">
          <li>
            Enquanto durar a relação e não houver pedido de exclusão, conforme
            Art. 9ª, inciso II, da Lei Geral de Proteção de Dados Pessoais
          </li>
          <li>
            5 anos após o término da relação, conforme Arts. 12 e 34 do Código
            de Defesa do Consumidor
          </li>
          <li>
            6 meses para os Dados de Identificação Digital, conforme Art. 15 do
            Marco Civil da Internet
          </li>
        </ul>
        <p className="mt-8">
          5.2. Prazos de armazenamento superiores. Poderemos permanecer com o
          histórico de registro de seus Dados por prazo maior nas hipóteses em
          que a lei ou norma regulatória assim estabelecer ou para preservação
          de direitos.
        </p>
        <p className="mt-8">
          5.3. Transferência Internacional. Os Dados coletados serão armazenados
          em ambiente de uso de recursos ou servidores na nuvem (cloud
          computing), o que poderá exigir uma transferência destes Dados fora do
          Brasil.
        </p>
      </div>
    </Element>
  );
};

const SixthParagraph = (): JSX.Element => {
  return (
    <Element
      className="mt-20 text-base text-darkGray md:text-xl lg:mt-0"
      name="section-6"
      id="section-6"
    >
      <h1 className="mb-4 text-2xl text-primary md:my-11 md:text-4xl">
        Direitos dos titulares
      </h1>
      <div className="mt-8">
        6.1. Seus Direitos básicos. Você poderá solicitar a confirmação da
        existência tratamento de Dados, além da exibição ou retificação de seus
        Dados, por meio do Canal de Comunicação:{" "}
        <Link href="mailto:dpo@oncoclinicas.com">dpo@oncoclinicas.com.</Link>
        <div className="mt-8">
          6.2. Limitação, oposição, portabilidade e exclusão de dados. Pelo
          Canal de Comunicação, Você poderá também requerer:
          <ul className="ml-0 list-inside list-[lower-alpha] pl-0">
            <li>A limitação do uso de seus Dados Pessoais;</li>
            <li>
              Manifestar sua oposição e/ou revogar o consentimento quanto ao uso
              de seus Dados Pessoais;
            </li>
            <li>
              A portabilidade dos Dados cadastrais para outro Controlador do
              mesmo ramo de nossa atuação; ou
            </li>
            <li>
              Solicitar a exclusão de seus Dados Pessoais que tenham sidos
              coletados por Nós.
            </li>
          </ul>
        </div>
        <p className="mt-8">
          6.2.1. Caso Você solicite a exclusão de seus Dados Pessoais, pode
          ocorrer que os Dados precisem ser mantidos por período superior ao
          pedido de exclusão, nos termos do artigo 16 da Lei Geral de Proteção
          de Dados Pessoais, para (i) cumprimento de obrigação legal ou
          regulatória, (ii) estudo por órgão de pesquisa, e (iii) transferência
          a terceiro (respeitados os requisitos de tratamento de dados dispostos
          na mesma Lei). Em todos os casos mediante a anonimização dos Dados
          Pessoais, desde que possível.
        </p>
        <p className="mt-8">
          6.2.2. Findos o prazo de manutenção e a necessidade legal, os Dados
          Pessoais serão excluídos com uso de métodos de descarte seguro, ou
          utilizados de forma anonimizada para fins estatísticos.
        </p>
        <p className="mt-8">
          6.2.3. Representantes Legais. Os usuários menores de 18 anos não
          poderão estar registrados no Oncoclínicas por Você por conta própria,
          devendo o cadastro ser realizado por seus responsáveis legais. O
          Representante Legal poderá comunicar a Nós caso queira exercer seus
          direitos trazidos no presente capítulo.
        </p>
      </div>
    </Element>
  );
};

const SeventhParagraph = (): JSX.Element => {
  return (
    <Element
      className="mt-20 text-base text-darkGray md:text-xl lg:my-11"
      name="section-7"
      id="section-7"
    >
      <h1 className="mb-4 text-2xl text-primary md:mb-11 md:text-4xl">
        Informações sobre essa política
      </h1>
      <p>
        7.1. Inaplicabilidade. Caso algum ponto desta Política seja considerado
        inaplicável por Autoridade Nacional de Proteção de Dados ou judicial, as
        demais condições permanecerão em pleno vigor e efeito.
      </p>
      <p className="mt-8">
        7.2 Canais de Comunicação. Em caso de qualquer dúvida com relação às
        disposições constantes nesta Política, Você poderá entrar em contato por
        meio do endereço de e-mail{" "}
        <Link href="mailto:dpo@oncoclinicas.com">dpo@oncoclinicas.com.</Link>
      </p>
      <p className="mt-8">
        7.3 Lei aplicável e foro. Essa Política será interpretada segundo a
        legislação brasileira, no idioma português, sendo eleito o foro do seu
        domicílio para dirimir qualquer controvérsia que envolva este documento,
        salvo ressalva específica de competência pessoal, territorial ou
        funcional pela legislação aplicável.
      </p>
    </Element>
  );
};

const EighthParagraph = (): JSX.Element => {
  return (
    <Element
      className="mt-20 text-base text-darkGray md:text-xl lg:my-11"
      name="section-8"
      id="section-8"
    >
      <h1 className="mb-4 text-2xl text-primary md:mb-11 md:text-4xl">
        Glossário
      </h1>
      <div className="mt-8">
        8.1. Para os fins desta Política, devem se considerar as seguintes
        definições e descrições para seu melhor entendimento:
        <ul className="ml-0 list-inside list-[lower-alpha] pl-0">
          <li>
            Anonimização: Utilização de meios técnicos razoáveis e disponíveis
            no momento do Tratamento, por meio dos quais um dado perde a
            possibilidade de associação, direta ou indireta, a um indivíduo.
          </li>
          <li>
            Autoridade Nacional de Proteção de Dados: órgão do Governo
            responsável por zelar e fiscalizar o cumprimento da Lei Geral de
            Proteção de Dados Pessoais.
          </li>
          <li>
            Centrais de Relacionamento: Médico{" "}
            <Link href="https://api.whatsapp.com/send/?phone=%2B5511972709897&text&type=phone_number&app_absent=0">
              (+55 11 97270-9897)
            </Link>{" "}
            , Paciente{" "}
            <Link href="https://api.whatsapp.com/send/?phone=%2B553130039855&text&type=phone_number&app_absent=0">
              (+55 31 30039855)
            </Link>{" "}
          </li>
          <li>
            Cloud Computing: Ou computação em nuvem, é tecnologia de
            virtualização de serviços construída a partir da interligação de
            mais de um servidor por meio de uma rede de informação comum (p.ex.
            a Internet), com objetivo de reduzir custos e aumentar a
            disponibilidade dos serviços sustentados.
          </li>
          <li>
            Conta de Acesso: Credencial necessária para utilizar ou acessar as
            funcionalidades do Oncoclínicas por Você.
          </li>
          <li>
            Dados: Quaisquer informações inseridas, tratadas ou transmitidas
            através do Oncoclínicas por Você.
          </li>
          <li>
            Dados Pessoais: Dados relacionados a pessoa natural identificada ou
            identificável.
          </li>
          <li>
            Dados Pessoais Sensíveis: Dados pessoais sobre origem racial ou
            étnica, convicção religiosa, opinião política, filiação a sindicato
            ou a organização de caráter religioso, filosófico ou político, dados
            referentes à saúde ou à vida sexual, dados genéticos ou biométricos,
            quando vinculados a uma pessoa natural.
          </li>
          <li>
            Encarregado (Data Protection Officer - DPO): Pessoa indicada por Nós
            para atuar como canal de comunicação entre o controlador, os
            titulares dos dados e a Autoridade Nacional de Proteção de Dados
            (ANPD).
          </li>
          <li>
            ID de Sessão: Identificação da sessão de usuários quando é efetuado
            o acesso aos Nossos Ambientes.
          </li>
          <li>
            IP: Abreviatura de Internet Protocol. É conjunto alfanumérico que
            identifica os dispositivos dos usuários na Internet.
          </li>
          <li>
            Médicos: pessoas físicas prévia e regularmente cadastradas no
            Oncoclínicas por Você e que estejam devidamente cadastradas perante
            o respectivo Conselho Regional de Medicina para fins de exercício
            legal da medicina.
          </li>
          <li>
            Profissionais de Saúde: Profissionais de saúde são todos os Nossos
            colaboradores que atuam na assistência ao paciente (como por exemplo
            os médicos, enfermeiros, dentistas, fisioterapeutas).
          </li>
          <li>
            Titular dos Dados: pessoa física a quem se referem os Dados Pessoais
            que são objeto de Tratamento.
          </li>
          <li>
            Tratamento: Toda operação realizada com Dados Pessoais e Dados
            Pessoais Sensíveis, como as que se referem a coleta, produção,
            recepção, classificação, utilização, acesso, reprodução,
            transmissão, distribuição, processamento, arquivamento,
            armazenamento, eliminação, avaliação ou controle da informação,
            modificação, comunicação, transferência, difusão ou extração.
          </li>
          <li>
            Você: aquele que é o Titular do dado pessoal, ou seja, usuário do
            Oncoclínicas por Você.
          </li>
        </ul>
      </div>
    </Element>
  );
};

export {
  FirstParagraph,
  SecondParagraph,
  ThirdParagraph,
  FourthParagraph,
  FifthParagraph,
  SixthParagraph,
  SeventhParagraph,
  EighthParagraph,
};
