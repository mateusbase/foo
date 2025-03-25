import PageLayout from "@/components/PageLayout";
import { CalendarIcon, ClockIcon, PinIcon } from "@/components/Icons";
import BaseContainer from "@/components/Container";
import SignupForm from "./components/SignupForm";
import IncomingEventsSection from "./components/IncomingEventsSection";
import TopicsCoveredSection from "./components/TopicsCoveredSection";
import InvitedMedicsSection from "./components/InvitedMedicsSection";

export default function EventScreen(): JSX.Element {
  return (
    <>
      <PageLayout
        title="Eventos Oncoclínicas"
        subtitle="Congressos, palestras, simpósios e muito mais."
      >
        <div className="relative mt-14 md:block">
          <img
            src="https://vidavg.com.br/wp-content/uploads/2021/10/Diagnostico-precoce-aumenta-chances-de-cura-do-cancer-de-mama-reforca-o-mastologista-Luciano-Florisbelo.jpg"
            alt="Imagem descritiva"
            className="h-[466px] w-full object-cover"
          />
        </div>

        <div className="-mt-20 flex flex-col items-center justify-center md:mt-10 md:flex-row md:items-start md:justify-between">
          <div className="relative flex flex-col md:bottom-48 md:items-start">
            <div className="self-center md:self-start">
              <img
                src="https://www.clubenoticias.com/images/noticias/8693/7d3c47363b7ee2b12f9204895d4b369b.jpg"
                alt="Foto"
                className="ml-4 size-44 rounded-2xl object-cover md:h-[200px] md:w-[202px]"
              />
            </div>

            <h1 className="mt-10 block text-2xl font-medium leading-none text-primary md:hidden lg:text-[62px] lg:font-light">
              Novas tecnologias no combate ao câncer de mama
            </h1>

            <div className="mt-8 text-left">
              <div className="flex items-center text-lg text-darkGray">
                <CalendarIcon className="mr-2 text-primary" />
                <p>23/09/2023 a 07/10/2023</p>
              </div>

              <div className="mt-4 flex items-center text-lg text-darkGray">
                <PinIcon size={1} className="mr-2 text-primary" />
                <p>Evento Online</p>
              </div>

              <div className="mt-4 flex items-center text-lg text-darkGray">
                <ClockIcon size={1} className="mr-4 text-primary" />
                <p>Das 9h às 19h</p>
              </div>
            </div>

            <div className="mt-10 hidden w-full justify-center md:flex">
              <SignupForm />
            </div>
          </div>

          <div className="mt-8 text-center md:ml-11 md:mt-0 md:text-left lg:ml-14 lg:flex-1">
            <h1 className="hidden text-4xl font-medium leading-none text-primary md:block lg:text-[62px] lg:font-light">
              Novas tecnologias no combate ao câncer de mama
            </h1>
            <h1 className="block text-left text-2xl font-medium leading-none text-primary md:hidden">
              Sobre o evento
            </h1>

            <p className="my-6 text-left text-sm text-darkGray md:text-xl md:leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum pellentesque nunc lectus, vitae lacinia ex hendrerit
              in. Fusce id ex id sem ullamcorper. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vestibulum pellentesque nunc lectus,
              vitae lacinia ex hendrerit in. Fusce id ex id sem
              ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum pellentesque nunc lectus, vitae lacinia ex
              hendrerit in. Fusce id ex id sem ullamcorper.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vestibulum pellentesque nunc
              lectus, vitae lacinia ex hendrerit in. Fusce id ex id sem
              ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vestibulum pellentesque nunc lectus, vitae lacinia ex
              hendrerit in. Fusce id ex id sem ullamcorper.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vestibulum pellentesque nunc
              lectus, vitae lacinia ex hendrerit in. Fusce id ex id sem
              ullamcorper.
            </p>

            <div className="mt-10 hidden flex-col lg:flex">
              <InvitedMedicsSection />
            </div>
            <div className="hidden flex-col lg:flex">
              <TopicsCoveredSection />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:-mt-32 md:flex-row md:gap-8 lg:hidden">
          <section className="flex-1">
            <InvitedMedicsSection />
          </section>
          <section className="flex-1">
            <TopicsCoveredSection />
          </section>
        </div>

        <div className="hidden md:block">
          <IncomingEventsSection />
        </div>
      </PageLayout>

      <div className="mt-10 block w-full justify-center md:hidden">
        <SignupForm />
        <BaseContainer>
          <IncomingEventsSection />
        </BaseContainer>
      </div>
    </>
  );
}
