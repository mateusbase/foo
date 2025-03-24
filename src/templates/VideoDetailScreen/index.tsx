import PageLayout from "@/components/PageLayout";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";

export default function VideoDetailScreen(): JSX.Element {
  const videoContent = `O 11º Congresso Internacional Oncoclínicas Dana-Farber convida o Dr. Marcelo Gleiser, físico e professor do Dartmouth College, para uma participação exclusiva. Gleiser vai explorar o tema da inteligência artificial e seu impacto no avanço da medicina e na sociedade como um todo.

Assista ao vídeo e confira um pouco do que será abordado pelo professor na abertura do nosso Congresso.

O evento acontecerá entre os dias 14 e 16 de setembro, nos formatos virtual e presencial.

Inscreva-se gratuitamente no link: https://bit.ly/45QknF5`;

  const paragraphs = videoContent.trim().replace(/\n+/g, "\n\n").split("\n\n");

  return (
    <PageLayout
      title="Galeria de vídeos"
      subtitle="Fique por dentro de todas as novidades da Oncoclínicas e acompanhe a cobertura dos nossos eventos."
    >
      <h1 className="mt-10 text-2xl text-primary md:text-title-lg md:leading-[45px] lg:leading-none">
        Marcelo Gleiser ministra palestra no 11º Congresso Internacional
        Oncoclínicas Dana-Farber
      </h1>

      {paragraphs.map((paragraph) => (
        <p className="mt-5 text-base text-darkGray md:text-xl">{paragraph}</p>
      ))}

      <div className="mb-20">
        <div className="relative my-12 w-full overflow-hidden rounded-2xl">
          <iframe
            className="aspect-video w-full rounded-2xl md:mx-auto md:h-[438px] md:w-[738px] lg:h-[939px] lg:w-[1583px]"
            title="Video player"
            src="https://www.youtube.com/embed/rLMq6NYcseM"
            allowFullScreen
          />
        </div>

        <ShareOptions options={socialNetwork} />
      </div>
    </PageLayout>
  );
}
