import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MenuItem from "@/components/MenuItem";
import PageLayout from "@/components/PageLayout";
import BaseSelect from "@/components/Select";
import { IoMenu } from "react-icons/io5";

const menuItems = [
  { id: 1, name: "O que é a laserterapia" },
  { id: 2, name: "Quando é usada" },
  { id: 3, name: "Como é realizada" },
];

export default function ServiceScreen(): JSX.Element {
  const router = useRouter();
  const { servicos } = router.query;
  const [title, setTitle] = useState<string>("");
  const [activeItem, setActiveItem] = useState<number>(menuItems[0].id);

  const handleSelectChange = (value: string | number): void => {
    const selectedItem = menuItems.find((item) => item.id === Number(value));
    if (selectedItem) {
      setActiveItem(selectedItem.id);
    }
  };

  const capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  useEffect(() => {
    if (router.isReady && servicos) {
      setTitle(capitalizeFirstLetter(decodeURIComponent(servicos as string)));
    }
  }, [router.isReady, servicos]);

  return (
    <PageLayout title={title} subtitle="Serviço Oncoclínicas">
      <div className="mt-8 flex flex-col lg:flex-row">
        <div className="mb-10 block lg:hidden">
          <BaseSelect
            color="primary"
            variant="bordered"
            labelColor="primary"
            radius="full"
            size="lg"
            startContent={<IoMenu className="text-primary" size={28} />}
            defaultSelectedKey="1"
            labelPlacement="outside"
            options={menuItems.map((item) => ({
              key: item.id,
              value: item.id.toString(),
              label: item.name,
            }))}
            onChange={(value) => handleSelectChange(value)}
          />
        </div>

        <div className="hidden w-[398px] text-white lg:block">
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.id}
              id={item.id}
              name={item.name}
              isActive={activeItem === item.id}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
              onClick={setActiveItem}
            />
          ))}
        </div>

        <div className="flex-1 lg:ml-16">
          <h1 className="text-4xl font-bold leading-[48px] text-primary">
            O que é a laserterapia
          </h1>
          <p className="mt-6 text-[20px] font-normal leading-[26px] text-darkGray">
            A laserterapia é um tratamento realizado com laser de baixa potência
            que emite comprimento de onda vermelho e/ou infravermelho e não
            promove aumento de temperatura, atuando em nível celular. A luz
            emitida é absorvida no tecido e transformada em energia, promovendo
            a restauração da função celular e o reparo tecidual. Também acelera
            o processo de cicatrização, analgesia e ação anti-inflamatória,
            ajudando na prevenção e melhora na qualidade de vida dos pacientes.
            <br />
            <br />
          </p>

          <h1 className="text-4xl font-bold leading-[48px] text-primary">
            Quando é usada
          </h1>

          <p className="mt-6 text-[20px] font-normal leading-[26px] text-darkGray">
            Pacientes oncológicos submetidos a procedimentos cirúrgicos,
            transplante de medula óssea, quimioterapia, radioterapia em região
            da cabeça e do pescoço e ao uso de alguns medicamentos indicados
            para prevenção da perda óssea decorrente do tratamento
            antineoplásico ou da doença podem manifestar complicações
            significativas na cavidade oral. As principais manifestações são:
          </p>

          <ul className="mt-4 list-inside list-disc text-[20px] font-normal leading-[26px] text-darkGray">
            <li>Infecções dentárias e periodontais;</li>
            <li>Infecções oportunistas com candidíase oral;</li>
            <li>Herpes;</li>
            <li>Xerostomia (sensação de boca seca);</li>
            <li>Alteração no paladar;</li>
            <li>Dor e/ou dificuldade ao deglutir;</li>
            <li>Sangramentos gengivais;</li>
            <li>Limitação na abertura da boca;</li>
            <li>Necroses ósseas;</li>
            <li>
              Mucosites (lesões em cavidade oral induzidas pelo tratamento, são
              muito dolorosas e podem afetar a capacidade de alimentação,
              hidratação e fala do paciente, prejudicando seu estado geral).
            </li>
          </ul>

          <p className="mt-4 text-[20px] font-normal leading-[26px] text-darkGray">
            A laserterapia é usada para eliminar ou ao menos aliviar essas
            manifestações e, consequentemente, melhorar a qualidade de vida do
            paciente.
          </p>

          <br />
          <br />

          <h1 className="text-4xl font-bold leading-[48px] text-primary">
            Como é realizada
          </h1>

          <p className="mt-4 text-[20px] font-normal leading-[26px] text-darkGray">
            O Grupo Oncoclínicas dispõe de equipes capacitadas e de equipamentos
            para a realização do procedimento de forma segura e eficaz. O número
            de sessões de laserterapia varia de acordo com as lesões a serem
            tratadas e com o perfil de cada paciente. O tratamento é indolor,
            seguro e sem efeitos colaterais, desde que realizado seguindo os
            protocolos, e as aplicações têm duração curta.
          </p>

          <br />
          <br />
        </div>
      </div>
    </PageLayout>
  );
}
