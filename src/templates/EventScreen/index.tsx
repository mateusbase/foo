import { IoIosMap, IoIosTime } from "react-icons/io";
import PageLayout from "@/components/PageLayout";
import { CalendarIcon } from "@/components/Icons";
import { events } from "@/components/UpcomingEvents/eventMocks";
import EventCard from "@/components/EventsCard";
import BaseContainer from "@/components/Container";
import SignupForm from "./components/SignupForm";
import { listMedics } from "./medicsMock";
import InvitedMedicCard from "./components/InvitedMedicCard";
import { topicsCovered } from "./topicsMock";
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
        <div className="mt-14 hidden md:block">
          <img
            src="https://vidavg.com.br/wp-content/uploads/2021/10/Diagnostico-precoce-aumenta-chances-de-cura-do-cancer-de-mama-reforca-o-mastologista-Luciano-Florisbelo.jpg"
            alt="Imagem descritiva"
            className="h-[466px] w-full object-cover"
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between">
          <div className="relative flex flex-col items-start md:bottom-48 md:left-5">
            <img
              src="https://www.clubenoticias.com/images/noticias/8693/7d3c47363b7ee2b12f9204895d4b369b.jpg"
              alt="Foto"
              className="h-[316px] w-[320px] rounded-2xl object-cover"
            />

            <div className="mt-8 text-left">
              <div className="flex items-center text-lg text-darkGray">
                <CalendarIcon className="mr-2" />
                <p className="font-bold">23/09/2023 a 07/10/2023</p>
              </div>

              <div className="mt-4 flex items-center text-lg text-darkGray">
                <IoIosMap size={24} className="mr-2" />
                <p className="font-bold">Evento Online</p>
              </div>

              <div className="mt-4 flex items-center text-lg text-darkGray">
                <IoIosTime size={24} className="mr-2" />
                <p className="font-bold">Das 9h às 19h</p>
              </div>
            </div>

            <div className="mt-10 hidden w-full justify-center md:flex">
              <SignupForm />
            </div>
          </div>

          <div className="ml-20 mt-8 text-center md:mt-0 md:text-left lg:ml-24 lg:flex-1">
            <h1 className="text-4xl font-medium leading-none text-primary lg:text-[62px] lg:font-light">
              Novas tecnologias no combate ao câncer de mama
            </h1>

            <p className="mt-6 text-xl leading-[28px] text-darkGray">
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

        <div className="flex flex-col gap-6 md:flex-row md:gap-8 lg:hidden">
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
