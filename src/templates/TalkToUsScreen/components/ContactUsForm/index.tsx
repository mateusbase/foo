import BaseButton from "@/components/Button";
import BaseInput from "@/components/Input";
import BaseRadio from "@/components/Radio";
import { RadioGroup, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useState } from "react";

export default function ContactUsForm(): JSX.Element {
  const [selected, setSelected] = useState("no");

  return (
    <div className="w-full space-y-6 lg:mt-12">
      <div className="flex">
        <RadioGroup
          label="Você é paciente da Oncoclínicas?"
          orientation="horizontal"
          value={selected}
          onValueChange={setSelected}
          classNames={{
            label: "text-lg font-bold mb-2",
          }}
        >
          <BaseRadio value="yes" size="md">
            Sim
          </BaseRadio>
          <BaseRadio value="no" size="md">
            Não
          </BaseRadio>
        </RadioGroup>
      </div>

      <BaseInput className="" placeholder="Nome" />

      <div className="flex flex-col gap-6 md:flex-row lg:flex-row">
        <BaseInput placeholder="E-mail" />
        <BaseInput placeholder="Telefone" />
      </div>

      <div className="row flex flex-col gap-6 md:flex-row lg:flex-row">
        <Select
          variant="bordered"
          label="Selecione o estado"
          className="w-full"
          radius="full"
          size="sm"
        >
          <SelectItem key={1} value="1">
            SP
          </SelectItem>
          <SelectItem key={2} value="2">
            RJ
          </SelectItem>
        </Select>

        <Select
          variant="bordered"
          label="Selecione a cidade"
          className="w-full"
          radius="full"
          size="sm"
        >
          <SelectItem key={1} value="1">
            São Paulo
          </SelectItem>
          <SelectItem key={2} value="2">
            Rio de Janeiro
          </SelectItem>
        </Select>
      </div>

      <Select
        variant="bordered"
        label="Selecione a unidade"
        className="w-full"
        radius="full"
        size="sm"
      >
        <SelectItem key={1} value="1">
          OncoRJ
        </SelectItem>
        <SelectItem key={2} value="2">
          OncoSP
        </SelectItem>
      </Select>

      <Select
        variant="bordered"
        label="Selecione o assunto"
        className="w-full"
        radius="full"
        size="sm"
      >
        <SelectItem key={1} value="1">
          Assunto 1
        </SelectItem>
        <SelectItem key={2} value="2">
          Assunto 2
        </SelectItem>
      </Select>

      <BaseInput placeholder="Anexar arquivo (jpg, jpeg, png, pdf, doc, docx) " />

      <Textarea
        label="Mensagem"
        variant="bordered"
        className="w-full overflow-hidden bg-white"
        style={{ height: "230px" }}
        size="lg"
      />
      <div className="flex justify-center">
        <BaseButton
          className="w-full text-white md:w-80"
          color="primary"
          variant="solid"
        >
          Enviar
        </BaseButton>
      </div>
    </div>
  );
}
