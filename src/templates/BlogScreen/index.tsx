import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";

export default function BlogScreen(): JSX.Element {
  return (
    <main className="mx-auto max-w-3xl">
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

          <h1 className="mt-4 text-left text-[62px] font-black leading-[60px] text-white">
            Benefícios da corrida
          </h1>
          <p className="mt-4 max-w-[625px] text-left text-white">
            Novas pesquisas mostram os benefícios da corrida para o apoio no
            pós-tratamento de câncer e na recuperação dos pacientes.
          </p>
          <div className="mt-4 h-[50px] w-[50px] bg-white" />
        </div>
        <div className="h-full w-1/2">
          <img
            src="https://img.freepik.com/fotos-gratis/mulheres-correndo-juntos-na-floresta_23-2149486921.jpg?t=st=1724864618~exp=1724868218~hmac=27e18a9d0cb01ea11a2c4d3902108f29ec8223f907f52b280e236dc068320357&w=1380"
            alt="Imagem do lado direito"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="flex h-[536px]">
        <div className="h-full w-1/2">
          <img
            src="https://img.freepik.com/fotos-gratis/mulheres-correndo-juntos-na-floresta_23-2149486921.jpg?t=st=1724864618~exp=1724868218~hmac=27e18a9d0cb01ea11a2c4d3902108f29ec8223f907f52b280e236dc068320357&w=1380"
            alt="Imagem do lado esquerdo"
            className="h-full w-full object-cover"
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
          <h1 className="mt-4 text-left text-[62px] font-black leading-[60px] text-white">
            Título
          </h1>
          <p className="mt-4 max-w-[625px] text-left text-white">
            Novas pesquisas mostram os benefícios da corrida para o apoio no
            pós-tratamento de câncer e na recuperação dos pacientes.
          </p>
          <div className="mt-4 h-[50px] w-[50px] bg-white" />
        </div>
      </div>

      <div className="mb-10 flex h-[536px]">
        <div className="bg-darkGray flex h-full w-1/2 flex-col items-start justify-center rounded-bl-[80px] pl-[65px]">
          <Button
            color="primary"
            variant="bordered"
            radius="sm"
            startContent={<Plus />}
            className="mt-8 h-[71px] w-[297px] border-white pl-3 text-left text-[24px] font-black leading-[60px] text-white"
          >
            Prática de Esportes
          </Button>
          <h1 className="mt-4 text-left text-[62px] font-black leading-[60px] text-white">
            Uso de IA na medicina
          </h1>
          <p className="mt-4 max-w-[625px] text-left text-white">
            Novas pesquisas mostram os benefícios da corrida para o apoio no
            pós-tratamento de câncer e na recuperação dos pacientes.
          </p>
          <div className="mt-4 h-[50px] w-[50px] bg-white" />
        </div>
        <div className="h-full w-1/2">
          <img
            src="https://img.freepik.com/fotos-gratis/mulheres-correndo-juntos-na-floresta_23-2149486921.jpg?t=st=1724864618~exp=1724868218~hmac=27e18a9d0cb01ea11a2c4d3902108f29ec8223f907f52b280e236dc068320357&w=1380"
            alt="Imagem do lado direito"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
