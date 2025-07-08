import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/Button";
import ShareOptions from "@/components/Blocks/ShareOptions";
import socialNetwork from "@/components/Blocks/ShareOptions/socialNetwork";
import Image from "next/image";
import { RichText } from "@/components/Blocks/RichText";
import BaseInput from "@/components/Input";
import apiClient from "@/services/apiClient";
import { useState } from "react";
import BaseSelect from "@/components/Select";
import { Radio, RadioGroup } from "@/components/Radio";
import ResearchCenterCard from "./components/ResearchCenterCard";
import { SingleClinicalSearchStudyRootProps } from "./type";
import { validate } from "./utils";

export function SingleClinicalSearchStudyRoot({
  data,
  breadcrumbs,
}: SingleClinicalSearchStudyRootProps): JSX.Element {
  const { name, cancerTypes, shortDescription, execution, content, moreInfo } =
    data;

  const [userType, setUserType] = useState("");

  const [inputName, setInputName] = useState("");

  const [birthDate, setBirthDate] = useState("");

  const [birthDateInput, setBirthDateInput] = useState("");

  const [phone, setPhone] = useState("");

  const [location, setLocation] = useState("");

  const [cancerType, setCancerType] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    birthDate: "",
    phone: "",
    location: "",
    cancerType: "",
    success: "",
  });

  const formatPhoneNumber = (phoneNumber: string): string => {
    const cleaned = phoneNumber.replace(/\D/g, "");

    if (cleaned.length === 11) {
      return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }

    if (cleaned.length === 10) {
      return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    }

    return phoneNumber;
  };

  const handleSubmit = async (): Promise<void> => {
    const { isValid, errors: validationErrors } = validate(
      inputName,
      birthDate,
      phone,
      location,
      cancerType,
      userType,
    );

    if (!isValid) {
      setErrors(validationErrors);

      return;
    }

    setIsLoading(true);

    try {
      await apiClient.post("/api/pages/action", {
        kind: "CLINIC_RESEARCH_STUDY",
        action: "SEND_STUDY_REFERENCE",
        payload: {
          type: userType,
          name: inputName.trim(),
          birthdate: birthDate.trim(),
          phone: phone.trim(),
          city: location.trim(),
          cancer: cancerType.trim(),
          studyName: name,
          studyLocation: execution.unit.name,
        },
      });

      setIsLoading(false);

      setInputName("");
      setBirthDate("");
      setPhone("");
      setLocation("");
      setCancerType("");

      setErrors({
        name: "",
        birthDate: "",
        phone: "",
        location: "",
        cancerType: "",
        success: "Formulário enviado com sucesso.",
      });
    } catch (err) {
      setIsLoading(false);
      setErrors({
        name: "",
        birthDate: "",
        phone: "",
        location: "",
        cancerType: "",
        success: "Erro ao enviar. Por favor, tente novamente mais tarde.",
      });
    }
  };

  return (
    <>
      <PageLayout
        title={data.name}
        subtitle={data.shortDescription}
        breadcrumbs={breadcrumbs}
      >
        <div className="mt-10 flex flex-col items-start gap-2 lg:mt-0">
          <h1 className="text-2xl text-primary md:text-title-lg">{name}</h1>

          <span className="text-lightGray md:text-xl">
            {execution.unit.name}
          </span>
        </div>

        {cancerTypes?.map((cancer) => (
          <div
            className="mt-10 flex h-16 w-44 items-center gap-4 rounded-full"
            style={{ backgroundColor: cancer.color }}
          >
            <Image
              src={cancer.icon.url}
              width={cancer.icon.width}
              height={cancer.icon.height}
              alt={cancer.icon.alt}
              className="ml-6 size-9"
            />

            <span className="text-xl text-white">{cancer.cancerType.name}</span>
          </div>
        ))}

        <span className="mb-10 mt-6 text-sm text-lightGray md:text-xl lg:mt-12">
          {shortDescription}
        </span>

        <ResearchCenterCard
          centerName={execution.unit.name}
          email={execution.email}
          executor={execution.researcher}
          phone={execution.phone}
        />

        <RichText content={content} className="mt-10" />

        <div className="mb-7 mt-10 flex flex-col gap-7 md:mb-16">
          {moreInfo?.link?.url && (
            <a
              href={moreInfo.link.url}
              target={moreInfo.link.openOnNewTab ? "_blank" : "_self"}
              rel={moreInfo.link.external ? "noopener noreferrer" : undefined}
            >
              <Button className="text-white md:w-80">{moreInfo.text}</Button>
            </a>
          )}

          <ShareOptions options={socialNetwork} />
        </div>
      </PageLayout>

      <div className="w-full bg-gray-200 py-20">
        <div className="mx-auto w-full max-w-screen-lg px-4 text-center">
          <h2 className="text-4xl font-bold text-primary">
            Pacientes, inscrevam-se. Médicos, indiquem um paciente. Utilize o
            formulário abaixo para ambos os casos.
          </h2>

          <div className="mt-10 space-y-6 text-left">
            <BaseSelect
              placeholder="Você é:"
              className="bg-white"
              value={userType}
              onChange={(value) => setUserType(value)}
              options={[
                { value: "PATIENT", label: "Paciente" },
                { value: "PHYSICIAN", label: "Médico" },
              ]}
            />

            <div>
              <BaseInput
                placeholder="Nome completo"
                size="lg"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <BaseInput
                placeholder="Data de nascimento"
                size="lg"
                value={birthDateInput}
                onChange={(e) => {
                  const input = e.target.value;

                  const raw = input.replace(/\D/g, "");

                  let formatted = input;

                  if (raw.length <= 2) {
                    formatted = raw;
                  } else if (raw.length <= 4) {
                    formatted = `${raw.slice(0, 2)}/${raw.slice(2)}`;
                  } else if (raw.length <= 8) {
                    formatted = `${raw.slice(0, 2)}/${raw.slice(2, 4)}/${raw.slice(4)}`;
                  }

                  setBirthDateInput(formatted);

                  if (raw.length === 8) {
                    const dd = raw.slice(0, 2);

                    const mm = raw.slice(2, 4);

                    const yyyy = raw.slice(4, 8);

                    setBirthDate(`${yyyy}-${mm}-${dd}`);
                  } else {
                    setBirthDate("");
                  }
                }}
              />

              {errors.birthDate && (
                <p className="mt-1 text-sm text-red-500">{errors.birthDate}</p>
              )}
            </div>

            <div>
              <BaseInput
                placeholder="Telefone"
                size="lg"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            <div>
              <BaseInput
                placeholder="Localidade"
                size="lg"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />

              {errors.location && (
                <p className="mt-1 text-sm text-red-500">{errors.location}</p>
              )}
            </div>

            <div>
              <BaseInput
                placeholder="Tipo de câncer"
                size="lg"
                value={cancerType}
                onChange={(e) => setCancerType(e.target.value)}
              />

              {errors.cancerType && (
                <p className="mt-1 text-sm text-red-500">{errors.cancerType}</p>
              )}
            </div>

            <div>
              <BaseInput
                placeholder="Nome do estudo"
                size="lg"
                value={name}
                disabled
              />
            </div>

            <div>
              <BaseInput
                placeholder="Localidade do estudo"
                size="lg"
                value={execution.unit.name}
                disabled
              />
            </div>

            <RadioGroup>
              <Radio value="1" size="md" className="-mt-1">
                <p className="text-xs font-normal leading-5 md:text-[15px]">
                  Ao disparar este formulário, seus dados pessoais estarão sendo
                  compartilhados com terceiros, conforme Lei Geral de Proteção
                  de Dados n 13.709/2018. Faz-se necessário que você tenha
                  ciência deste compartilhamento e o autorize. Seus dados não
                  serão, em nenhum momento, tornados públicos pelo profissional
                  que o receber. A finalidade deste compartilhamento é apenas
                  para possibilitar que a coordenação de pesquisa consiga
                  informações para entrar em contato com o(a) senhor(a) para
                  melhor entender sua história e de sua doença e verificar se
                  temos alguma alternativa de tratamento através de alguma
                  pesquisa para o(a) senhor(a).
                </p>
              </Radio>
            </RadioGroup>

            <div className="mt-10 space-y-6 text-center">
              <Button
                className="w-[322px] font-bold"
                loading={isLoading}
                onClick={handleSubmit}
              >
                Enviar
              </Button>
            </div>

            <div className="mt-10 space-y-6 text-center">
              {errors.success && (
                <p
                  className={`mt-4 text-sm ${
                    errors.success.startsWith("Error")
                      ? "text-red-500"
                      : "text-primary-foreground"
                  }`}
                >
                  {errors.success}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
