import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";

export default function DataProtectionScreen(): JSX.Element {
  return (
    <PageLayout
      title="Proteção de Dados"
      subtitle="Todas as práticas de tratamento de dados pessoais realizadas pela Oncoclínicas respeitam à Lei 13.709/2018 (“Lei Geral de Proteção de Dados Pessoais” ou “LGPD”)."
    >
      <div className="mb-10 ml-11 mr-9 flex-1 text-darkGray md:ml-9 md:mr-16 lg:ml-16 lg:mt-4">
        <p className="text-base md:text-xl">
          {" "}
          A Oncoclínicas do Brasil Serviços Médicos S.A., em seu nome e em nome
          de todas as suas empresas subsidiárias, controladas, coligadas ou que
          de alguma forma integrem sua estrutura (“Oncoclínicas”), atendendo aos
          requisitos de transparência preconizados na Lei 13.709/2018 (“Lei
          Geral de Proteção de Dados Pessoais” ou “LGPD”), vem, por meio deste
          Aviso de Privacidade e Proteção/ Tratamento de Dados (“Aviso”),
          explicar como são coletados, tratados e compartilhados os dados
          pessoais e dados pessoais sensíveis (em conjunto, “dados pessoais”)
          dos seus clientes, colaboradores, terceirizados e/ou prestadores de
          serviços que, em conjunto, serão denominados “Usuários”.
        </p>
        <p className="mt-8 text-base md:text-xl">
          Todas as práticas de tratamento de dados pessoais realizadas pelas
          Oncoclínicas estão sujeitas às leis aplicáveis nos locais em que atua
          no Brasil ou no exterior e seguem o objetivo da LGPD.
        </p>
        <p className="mt-8 text-base md:text-xl">
          Em caso de dúvidas quanto ao conteúdo deste Aviso, contate a área
          responsável da Oncoclínicas pela proteção de dados pessoais por meio
          do e-mail dpo@oncoclinicas.com.
        </p>
        <h1 className="mt-10 text-2xl text-primary md:text-4xl">
          I. Como são coletados os dados pessoais do Usuário?
        </h1>
        <p className="mt-8 text-base md:text-xl">
          Seguindo o protocolo LGPD A coleta de dados pessoais pela Oncoclínicas
          ocorre normalmente durante a interação com a empresa, como: em
          contratações e processos seletivos; no cadastro do Usuário nas
          clínicas ou no centro de serviços compartilhados; por meio de cadastro
          em nosso website{" "}
          <Link href="https://grupooncoclinicas.com">
            {" "}
            https://grupooncoclinicas.com
          </Link>
          ; durante a prestação de serviços pela/para a Oncoclínicas; no canal
          de compliance da empresa; entre outras situações, como durante a
          relação de negócios com terceiros em que há transferência de dados
          pessoais.
        </p>
        <p className="mt-8 text-base md:text-xl">
          Os dados obtidos por meio do acesso ao website da Oncoclínicas, como
          endereço de IP e cookies, são informações anonimizadas e agregadas
          para fins que incluem: teste de sistemas de TI, criação de modelos de
          marketing e promoção e melhorar, aprimorar e desenvolver os serviços
          desempenhados pela Oncoclínicas.
        </p>
        <h1 className="mt-10 text-2xl text-primary md:text-4xl">
          II. Como são tratados os dados pessoais do Usuário?
        </h1>
        <p className="mt-8 text-base md:text-xl">
          O tratamento dos dados pessoais pela Oncoclínicas ocorre, em
          determinados casos, com o consentimento do Usuário de acordo com nosso
          missão, visão e valores. Entretanto, este consentimento não é
          necessário quando estes dados forem tratados para tutela da saúde do
          Usuário; ou por interesse legítimo da empresa; ou para cumprimento de
          obrigações legais ou regulatórias; e/ou quando necessários para a
          execução de contrato no qual o Usuário é parte.
        </p>
        <p className="mt-8 text-base md:text-xl">
          Além disso, a Oncoclínicas utiliza os dados pessoais coletados
          conforme o princípio da transparência lgpd para: (i) suporte ao
          Usuário; (ii) pesquisa e desenvolvimento de serviços; (iii)
          estabelecimento de vínculo contratual ou a gestão, administração,
          prestação, ampliação e melhoramento dos serviços ao Usuário; e (iv)
          lidar com denúncia lgpd ou quaisquer outras reclamações/sugestões dos
          Usuários.
        </p>
        <p className="mt-8 text-base md:text-xl">
          Todas as informações coletadas poderão ser utilizadas para fins de
          relacionamento com o Usuário, como para o envio de informações de
          novos serviços e especialidades oferecidos pela Oncoclínicas, a
          divulgação de eventos ou para a realização de pesquisa de satisfação.
        </p>
        <p className="mt-8 text-base md:text-xl">
          Além disso, a Oncoclínicas poderá subcontratar um terceiro para
          tratamento de dados, nos moldes da legislação aplicável, garantindo
          que este seja submetido às obrigações deste Aviso.
        </p>
        <h1 className="mt-10 text-2xl text-primary md:text-4xl">
          III. Em quais situações os dados dos Usuários podem ser
          compartilhados?
        </h1>
        <p className="mt-8 text-base md:text-xl">
          Os dados pessoais só serão compartilhados em caso de autorização
          expressa do Usuário quanto a anonimização e/ou compartilhamento dos
          dados pessoais; e/ou nos casos em que o consentimento não é
          necessário, conforme definido na legislação aplicável. Caso atendidas
          estas condições, estes dados poderão ser compartilhados:
        </p>
        <ul className="ml-8 list-disc text-base md:text-xl">
          <li>
            Com as subsidiárias, controladas, coligadas e empresas que de alguma
            forma integrem a estrutura da Oncoclínicas, assim como suas
            respectivas sucessoras;
          </li>
          <li>
            Com terceiros, para desenvolvimento de serviços voltados ao Usuário;
          </li>
          <li>
            Com autoridades ou entidades governamentais, para cumprir obrigação
            legal ou no âmbito de qualquer inquérito ou processo
            judicial/administrativo; e
          </li>
          <li>
            Com quaisquer outras pessoas, físicas ou jurídicas, para quaisquer
            outras finalidades expressamente consentidas pelo Usuário.
          </li>
        </ul>
        <h1 className="mt-10 text-2xl text-primary md:text-4xl">
          IV. Quais são os direitos dos Usuários em relação aos dados coletados?
        </h1>
        <p className="mt-8 text-base md:text-xl">
          Conforme previsto na legislação aplicável e salvo se limitados por
          esta, são direitos dos Usuários em relação a seus dados pessoais:
        </p>
        <ul className="ml-8 list-disc text-base md:text-xl">
          <li>Direito de confirmação da existência de tratamento de dados;</li>
          <li>Direito de acesso aos dados;</li>
          <li>
            Direito de correção de dados incompletos, inexatos ou
            desatualizados;
          </li>
          <li>
            Direito à anonimização, bloqueio ou eliminação de dados
            desnecessários, excessivos ou tratados em desconformidade com a
            legislação aplicável;
          </li>
          <li>
            Direito à portabilidade dos dados a outro fornecedor de serviço ou
            produto, resguardando os segredos comerciais da Oncoclínicas;
          </li>
          <li>
            Direito à eliminação dos dados pessoais tratados com o consentimento
            do titular, exceto nas hipóteses de guarda legal e outras dispostas
            na legislação aplicável;
          </li>
          <li>
            Direito à informação das entidades públicas e privadas com as quais
            a Oncoclínicas realizou uso compartilhado de Dados;
          </li>
          <li>
            Direito à informação sobre a possibilidade de não fornecer o
            consentimento e sobre as consequências da negativa; e
          </li>
          <li>Direito à revogação do consentimento.</li>
        </ul>
        <h1 className="mt-10 text-2xl text-primary md:text-4xl">
          V. Segurança da Informação
        </h1>
        <p className="mt-8 text-base md:text-xl">
          A Oncoclínicas está empenhada em proteger os dados pessoais dos
          Usuários conforme os termos LGPD. São envidados todos os esforços para
          proteger os seus dados pessoais de uso indevido, interferência, perda,
          acesso não autorizado, modificação ou divulgação.
        </p>
        <p className="mt-8 text-base md:text-xl">
          Para tanto, a Oncoclínicas conta com atualizadas ferramentas de
          segurança da informação. Além disso, todas as políticas e diretrizes
          internas foram atualizadas para assegurar a segurança dos dados
          pessoais dos Usuários, assim como todos os colaboradores e prestadores
          de serviços médicos da Oncoclínicas foram instruídos a realizar um
          treinamento obrigatório sobre como devem ser tratados os dados
          pessoais aos quais eles têm acesso.
        </p>
        <p className="mt-8 text-base md:text-xl">
          Apesar das medidas adotadas, nenhum sistema é completamente seguro.
          Nesse sentido, a Oncoclínicas se compromete a informar o Usuário em
          caso de qualquer incidente com seus dados pessoais, nos termos da lei
          nº 13.709/2018.”).
        </p>
        <h1 className="mt-10 text-2xl text-primary md:text-4xl">
          VI. Retenção de dados
        </h1>
        <p className="mt-8 text-base md:text-xl">
          Nós do{" "}
          <Link href="https://grupooncoclinicas.com/a-oncoclinicas">
            <span className="underline underline-offset-4">
              grupo Oncoclínicas
            </span>
          </Link>{" "}
          mantemos seus dados pessoais dos Usuários sob a sua guarda durante o
          tempo necessário para cumprir a finalidade para a qual estes são
          tratados, ou pelo tempo legalmente exigido, quando houver prazo de
          guarda definido em lei ou qualquer outra regulamentação aplicável.
        </p>
        <p className="mt-8 text-base md:text-xl">
          Em caso de dúvidas quanto ao conteúdo deste Aviso, contate a área
          responsável da Oncoclínicas pela proteção de dados pessoais, pelo
          e-mail dpo@oncoclinicas.com.
        </p>
        <p className="text-base md:text-xl">
          Saiba mais sobre o tratamento dos seus dados em nosso conteúdo{" "}
          <Link href="https://grupooncoclinicas.com/app/politica-de-privacidade-e-tratamento-de-dados-do-oncoclinicas-por-voce-politica">
            <span className="underline underline-offset-4">
              Política de privacidade e tratamento de dados do Oncoclínicas Por
              Você (“política”).
            </span>
          </Link>{" "}
        </p>
        <h1 className="mt-10 text-2xl text-primary md:text-4xl">
          VII. Dúvidas e Esclarecimentos
        </h1>
        <p className="mt-8 text-base md:text-xl">
          Em caso de dúvidas quanto ao conteúdo deste Aviso, contate a área
          responsável da Oncoclínicas pela proteção de dados pessoais, pelo
          e-mail dpo@oncoclinicas.com.
        </p>
        <p className="text-base md:text-xl">
          Saiba mais sobre o tratamento dos seus dados em nosso conteúdo{" "}
          <Link href="https://grupooncoclinicas.com/app/politica-de-privacidade-e-tratamento-de-dados-do-oncoclinicas-por-voce-politica">
            <span className="underline underline-offset-4">
              Política de privacidade e tratamento de dados do Oncoclínicas Por
              Você (“política”).
            </span>
          </Link>{" "}
        </p>
        <div className="mb-10 mt-16">
          <ShareOptions options={socialNetwork} />
        </div>
      </div>
    </PageLayout>
  );
}
