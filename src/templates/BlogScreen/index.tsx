import BaseContainer from "@/components/Container";
import NewsInformationCard from "@/components/NewsInformationCard";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import { FaRunning } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { GiFlowerStar } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const options = [
  {
    title: "A Inteligência Artificial está presente em diversos exames para apoiar o médico no diagnóstico.",
    date: "22 de Setembro de 2024",
    description: "O ASCO Annual Meeting 2024, realizado em junho em Chicago, trouxe como tema central 'A arte e a ciência do tratamento do câncer: do conforto à cura'. Este tema reflete um dos valores essenciais da Oncoclínicas&Co: proporcionar um acolhimento na mesma proporção do tratamento para nossos pacientes. Acesse o artigo completo deste estudo.",
    image: "https://i.postimg.cc/VkpqZTR5/Captura-de-tela-2024-09-22-202935.png"
  },
  {
    title: "Novas Descobertas no Tratamento do Câncer de Mama",
    date: "15 de Outubro de 2024",
    description: "Pesquisadores descobriram um novo medicamento que aumenta a taxa de sobrevivência em pacientes com câncer de mama avançado. O estudo foi apresentado no congresso europeu de oncologia.",
    image: "https://i.postimg.cc/VkpqZTR5/Captura-de-tela-2024-09-22-202935.png"
  },
  {
    title: "Tecnologias de Saúde Digital Transformam o Atendimento ao Paciente",
    date: "30 de Setembro de 2024",
    description: "A adoção de tecnologias digitais na saúde está melhorando a eficiência do atendimento e a satisfação dos pacientes. Soluções como telemedicina e prontuários eletrônicos estão se tornando padrão.",
    image: "https://i.postimg.cc/VkpqZTR5/Captura-de-tela-2024-09-22-202935.png"
  },
  {
    title: "Campanha de Vacinação Contra a Gripe Começa em Todo o País",
    date: "5 de Outubro de 2024",
    description: "O Ministério da Saúde iniciou a campanha nacional de vacinação contra a gripe, com foco em grupos prioritários como idosos e profissionais de saúde. Veja onde se vacinar.",
    image: "https://i.postimg.cc/VkpqZTR5/Captura-de-tela-2024-09-22-202935.png"
  },
];


export default function BlogScreen(): JSX.Element {
  return (
    <BaseContainer className="px-0">
      <div className="flex h-[536px]">
        <div className="flex h-full w-1/2 flex-col items-start justify-center bg-gradient-to-r from-primary-foreground via-secondary-foreground to-secondary-foreground pl-[65px]">
          <Button
            color="primary"
            variant="bordered"
            radius="sm"
            startContent={<Plus />}
            className="mt-8 h-[71px] w-[297px] border-2 border-white pl-3 text-left text-[24px] font-black leading-[60px] text-white"
          >
            Prática de Esportes
          </Button>

          <h1 className="mt-4 text-left text-title-xl font-black leading-[60px] text-white">
            Benefícios da corrida
          </h1>
          <p className="mt-4 max-w-[625px] text-left text-white">
            Novas pesquisas mostram os benefícios da corrida para o apoio no
            pós-tratamento de câncer e na recuperação dos pacientes.
          </p>

          <div className="mt-4">
            <IoArrowForwardCircleOutline size={30} color="white" />
          </div>
        </div>
        <div className="h-full w-1/2">
          <img
            src="https://img.freepik.com/fotos-gratis/mulheres-correndo-juntos-na-floresta_23-2149486921.jpg?t=st=1724864618~exp=1724868218~hmac=27e18a9d0cb01ea11a2c4d3902108f29ec8223f907f52b280e236dc068320357&w=1380"
            alt="Imagem do lado direito"
            className="size-full object-cover"
          />
        </div>
      </div>

      <div className="flex h-[536px]">
        <div className="h-full w-1/2">
          <img
            src="https://img.freepik.com/fotos-gratis/mulheres-correndo-juntos-na-floresta_23-2149486921.jpg?t=st=1724864618~exp=1724868218~hmac=27e18a9d0cb01ea11a2c4d3902108f29ec8223f907f52b280e236dc068320357&w=1380"
            alt="Imagem do lado esquerdo"
            className="size-full object-cover"
          />
        </div>
        <div className="flex h-full w-1/2 flex-col items-start justify-center bg-gradient-to-r from-primary-foreground via-secondary-foreground to-secondary-foreground pl-[65px]">
          <Button
            color="primary"
            variant="bordered"
            radius="sm"
            startContent={<Plus />}
            className="mt-8 h-[71px] w-[297px] border-white pl-3 text-left text-[24px] font-black leading-[60px] text-white"
          >
            Saúde e Bem-Estar
          </Button>
          <h1 className="mt-4 text-left text-title-xl font-black leading-[60px] text-white">
            Título
          </h1>
          <p className="mt-4 max-w-[625px] text-left text-white">
            Novas pesquisas mostram os benefícios da corrida para o apoio no
            pós-tratamento de câncer e na recuperação dos pacientes.
          </p>

          <div className="mt-4">
            <IoArrowForwardCircleOutline size={30} color="white" />
          </div>
        </div>
      </div>

      <div className="mb-10 flex h-[536px]">
        <div className="flex h-full w-1/2 flex-col items-start justify-center rounded-bl-[80px] bg-darkGray pl-[65px]">
          <Button
            color="primary"
            variant="bordered"
            radius="sm"
            startContent={<Plus />}
            className="mt-8 h-[71px] w-[297px] border-white pl-3 text-left text-[24px] font-black leading-[60px] text-white"
          >
            Prática de Esportes
          </Button>
          <h1 className="mt-4 text-left text-title-xl font-black leading-[60px] text-white">
            Uso de IA na medicina
          </h1>
          <p className="mt-4 max-w-[625px] text-left text-white">
            Novas pesquisas mostram os benefícios da corrida para o apoio no
            pós-tratamento de câncer e na recuperação dos pacientes.
          </p>

          <div className="mt-4">
            <IoArrowForwardCircleOutline size={30} color="white" />
          </div>

        </div>
        <div className="h-full w-1/2">
          <img
            src="https://img.freepik.com/fotos-gratis/mulheres-correndo-juntos-na-floresta_23-2149486921.jpg?t=st=1724864618~exp=1724868218~hmac=27e18a9d0cb01ea11a2c4d3902108f29ec8223f907f52b280e236dc068320357&w=1380"
            alt="Imagem do lado direito"
            className="size-full object-cover"
          />
        </div>
      </div>

      <div className="h-full w-100 flex justify-between font-bold">
        <div className="gap-10 flex justify-around">

          <div className="flex items-center justify-center gap-1 text-primary">
            <RxHamburgerMenu size={20} />
            <span>Todos</span>
          </div>

          <div className="flex items-center justify-center gap-1">
            <FaRunning size={20} />
            <span>Prática de Esportes</span>
          </div>

          <div className="flex items-center justify-center gap-1">
            <GiFlowerStar size={20} />
            <span>Saúde e Bem-estar</span>
          </div>

          <div className="flex items-center justify-center gap-1">
            <MdArrowOutward size={20} />
            <span>Inovação & Oncologia</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-1">
          <span>Mais Relevantes</span>
          <IoIosArrowDown size={20} className="text-primary" />
        </div>
      </div>

      <div className="mt-10">
        {
          options.map((option, index) => (
            <div className="mt-10">
              <NewsInformationCard
                key={index}
                options={option}
              />
            </div>
          ))
        }
      </div>

    </BaseContainer>
  );
}
