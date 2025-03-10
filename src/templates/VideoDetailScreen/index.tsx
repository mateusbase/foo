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
      <h1 className="mt-10 text-title-lg text-primary">
        Marcelo Gleiser ministra palestra no 11º Congresso Internacional
        Oncoclínicas Dana-Farber
      </h1>

      {paragraphs.map((paragraph) => (
        <p className="mt-5 text-xl text-darkGray">{paragraph}</p>
      ))}

      <div className="mb-20">
        <div className="relative my-12 w-full overflow-hidden rounded-2xl">
          <iframe
            className="aspect-video w-full rounded-2xl"
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
