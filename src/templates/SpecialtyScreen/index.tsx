import PageLayout from "@/components/PageLayout";
import { useRouter } from "next/router";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";
import BaseButton from "@/components/Button";

export default function SpecialtyScreen(): JSX.Element {
  const router = useRouter();
  const { especialidades } = router.query;

  const cleanSpecialtyName = (): string => {
    return router.isReady && especialidades
      ? especialidades.toString().replace("-", " ")
      : "";
  };

  const specialtyContent = `A oncologia, também conhecida como cancerologia clínica, é a área da medicina que estuda e trata os tumores malignos. Embora existam muitos tipos de câncer, todos eles começam devido ao crescimento anormal e fora de controle das células, o que é conhecido como neoplasia. A oncologia aborda a forma como cada câncer se desenvolve no organismo e o tipo de tratamento mais adequado para cada um deles.

O oncologista é o médico especializado a quem cabe diagnosticar e acompanhar o paciente e sua família, durante e após o tratamento oncológico, procurando sempre a melhor terapêutica com o máximo de qualidade de vida.

Mas aqui, no Grupo Oncoclínicas, ele não trabalha sozinho. Numa abordagem mais contemporânea, atua em conjunto e integrado a equipes multidisciplinares, que contam com a colaboração de cirurgiões, radioterapeutas, patologistas, radiologistas e de enfermeiros, psicólogos, nutricionistas, fisioterapeutas, biomédicos, dentistas e muitos outros profissionais.

A partir do envolvimento e do compartilhamento das ações integradas dessas equipes, buscamos uma assistência individualizada e segura, respeitando as necessidades e a história de vida de cada paciente, para quem serão indicados os tratamentos mais adequados entre cirurgia, radioterapia, quimioterapia, hormonioterapia, terapia biológica e outras inúmeras possibilidades.

Independentemente da escolha do melhor tratamento, o fato é que uma grande mudança ocorreu nos últimos 20 anos: a melhoria na qualidade de vida dos portadores de câncer. Mesmo quando a doença não está mais localizada, o paciente pode passar períodos muito longos com a doença controlada, recebendo remédios de baixa toxicidade e preservando seu estilo e qualidade de vida.

Como o câncer é uma desafio mundial da humanidade, haverá sempre novos estudos, pesquisas e tratamentos. Haverá sempre avanços e esperança para quem, como nós, se une pela vida dos nossos pacientes.`;

  const paragraphs = specialtyContent
    .trim()
    .replace(/\n+/g, "\n\n")
    .split("\n\n");

  return (
    <PageLayout title={cleanSpecialtyName()}>
      <div className="full-bleed flex flex-col lg:mt-14 lg:flex-row">
        <div className="overflow-hidden lg:h-[499px] lg:w-5/6">
          <img
            src="/assets/images/specialties/oncology.png"
            alt="Imagem banner de especialidade"
            className="size-full object-cover lg:rounded-bl-[100px]"
          />
        </div>

        <div className="flex max-h-[604px] items-center bg-custom-gradient-dark p-12 lg:w-3/6 lg:p-12">
          <p className="text-center leading-tight text-white md:text-[32px] lg:text-left xl:text-4xl">
            A oncologia é a especialidade responsável pelo tratamento clínico e
            medicamentoso do câncer em adultos. É esse especialista que indicará
            a melhor forma de combater o tumor.
          </p>
        </div>
      </div>

      <div className="mt-10 lg:mt-20">
        {paragraphs.map((content) => (
          <p key={content} className="mt-5 text-sm text-darkGray md:text-xl">
            {content}
          </p>
        ))}
      </div>

      <div className="my-6 md:my-10">
        <BaseButton
          variant="bordered"
          className="w-full text-sm md:w-1/2 lg:h-16 lg:w-1/3 lg:max-w-[417px] lg:text-xl"
        >
          [+] Ver todas as especialidades
        </BaseButton>
      </div>
      <div className="my-10">
        <ShareOptions options={socialNetwork} />
      </div>
    </PageLayout>
  );
}
