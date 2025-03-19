import PageLayout from "@/components/PageLayout";
import BaseSwiper from "@/components/BaseSwiper";
import VideoCard from "@/components/VideoRoundedCard";
import StoresContainer from "./components/StoresContainer";
import { practicityMock } from "./praticityMock";
import PracticityCard from "./components/PracticityCards";
import videoCardMocks, { VideoCardProps } from "./videoCards";

export default function OncoclinicasAppScreen(): JSX.Element {
  return (
    <PageLayout
      title="App Oncoclínicas por você"
      subtitle="Agora temos um aplicativo para os nossos pacientes e profissionais de saúde terem uma nova forma de se conectarem. O atendimento de qualidade e o cuidado que você precisa em um clique."
    >
      <StoresContainer />
      <div className="container mt-16">
        <h1 className="mb-20 text-center text-4xl text-primary">
          Uma novidade para você ter mais conforto e praticidade em todo o seu
          tratamento
        </h1>
        <div className="flex flex-col gap-7 lg:grid lg:grid-cols-2">
          {practicityMock.map((item) => (
            <PracticityCard
              key={item.id}
              title={item.titulo}
              description={item.descricao}
              icon={item.icone}
            />
          ))}
        </div>
      </div>

      <div className="mb-8 mt-16 flex flex-col items-center justify-center">
        <h1 className="mb-8 text-center text-3xl text-primary lg:mb-10 lg:w-4/5 lg:text-6xl">
          Assista o vídeo e veja como é fácil baixar e se cadastrar no
          aplicativo Oncoclínicas Por Você
        </h1>
        <video
          src=""
          controls
          className="w-full rounded-3xl lg:h-[500px] lg:w-[852px]"
        >
          <track kind="captions" srcLang="en" label="English captions" />
        </video>
      </div>

      <div className="mt-16">
        <h1 className="text-left text-3xl text-primary md:text-4xl">
          Para pacientes
        </h1>
        <p className="mb-8 mt-4 text-xl text-darkGray">
          Comunicação rápida e eficiente com os pacientes através de bate-papo e
          teleconsultas.
        </p>

        <BaseSwiper<VideoCardProps>
          data={videoCardMocks}
          renderItem={({ src, description }) => (
            <VideoCard videoId={src} description={description} />
          )}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        />
      </div>

      <div className="mt-16">
        <h1 className="text-left text-3xl text-primary md:text-4xl">
          Para médicos
        </h1>
        <p className="mb-8 mt-4 text-xl text-darkGray">
          Você com acesso direto aos médicos e equipe de cuidado.
        </p>

        <BaseSwiper<VideoCardProps>
          data={videoCardMocks}
          renderItem={({ src, description }) => (
            <VideoCard videoId={src} description={description} />
          )}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        />
      </div>
    </PageLayout>
  );
}
