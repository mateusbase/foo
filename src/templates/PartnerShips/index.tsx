import PageLayout from "@/components/PageLayout";

export default function PartnerShipsScreen(): JSX.Element {
  return (
    <PageLayout title="Parcerias">
      <div className="full-bleed w-full lg:mt-10 lg:flex">
        <div className="w-full lg:max-w-[932px]">
          <img
            src="/assets/images/partner-ships-banner.png"
            alt="Banner de parcerias"
            className="size-full lg:rounded-bl-[100px]"
          />
        </div>
        <div className="w-full bg-gradient-to-b from-primary via-primary via-70% to-secondary lg:max-w-[604px]">
          <h1 className="px-10 py-14 text-center text-3xl text-white md:text-4xl lg:text-left">
            As parcerias da Oncoclínicas&Co com empresas pelo Brasil tem como
            principal objetivo ampliar a oferta de serviços em toda a linha de
            cuidado tendo o paciente sempre como centro de tudo.
          </h1>
        </div>
      </div>

      <div className="my-10 w-full lg:my-28">
        <p className="text-sm text-darkGray md:text-xl">
          As parcerias da Oncoclínicas&Co com empresas pelo Brasil tem como
          principal objetivo ampliar a oferta de serviços em toda a linha de
          cuidado, desde o diagnóstico. O foco é não apenas expandir
          geograficamente, mas também diversificar os tipos de tratamentos, as
          multidisciplinaridades e as novas tecnologias oferecidas.
        </p>

        <p className="mt-7 text-sm text-darkGray md:text-xl">
          Nesse sentido, o grupo está alinhado com empresas conectadas com os
          seus valores, tendo o paciente sempre como centro de tudo e a
          excelência no atendimento e nos serviços oferecidos como prioridades.
        </p>
        <p className="mt-7 text-sm text-darkGray md:text-xl">
          Nossas parcerias são feitas para chegar a regiões e áreas onde ainda
          não estamos presentes, mas também para fortalecer o compartilhamento
          de experiências e inovações. Assim, contribuímos para o fortalecimento
          e unicidade do sistema de saúde como um todo.
        </p>
      </div>
    </PageLayout>
  );
}
