import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import BaseInput from "@/components/Input";
import { useState } from "react";
import apiClient from "@/services/apiClient";
import { Button } from "@/components/Button";
import BaseSelect from "@/components/Select";
import { useDeviceType } from "@/hooks/useDeviceType";
import { FranchiseRootProps } from "./type";
import RightFullBleedBanner from "./components/RightFullbleedBanner";
import CountrySection from "./components/CountrySection";
import PurpleFullBleedBanner from "./components/PurpleFullBleedBanner";
import { validate } from "./helpers";

export function FranchiseRoot({
  data,
  breadcrumbs,
}: FranchiseRootProps): JSX.Element {
  const devieType = useDeviceType();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [cpf, setCpf] = useState("");

  const [city, setCity] = useState("");

  const [isDoctor, setIsDoctor] = useState<boolean | null>(null);

  const [hasClinic, setHasClinic] = useState<boolean | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    city: "",
    isDoctor: "",
    hasClinic: "",
    success: "",
  });

  const handleSubmit = async (): Promise<void> => {
    const { isValid, errors: validationErrors } = validate(
      name,
      email,
      phone,
      cpf,
      city,
      isDoctor ?? false,
      hasClinic ?? false,
    );

    if (!isValid) {
      setErrors(validationErrors);

      return;
    }

    setIsLoading(true);

    try {
      await apiClient.post("/api/pages/action", {
        kind: "FRANCHISE",
        action: "INTEREST_FORM",
        payload: {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          cpf: cpf.trim(),
          city: city.trim(),
          isPhysician: isDoctor === true,
          hasInfusionClinic: hasClinic === true,
        },
      });

      setIsLoading(false);

      setName("");

      setEmail("");

      setPhone("");

      setCpf("");

      setCity("");

      setIsDoctor(false);

      setHasClinic(false);

      setErrors({
        name: "",
        email: "",
        phone: "",
        cpf: "",
        city: "",
        isDoctor: "",
        hasClinic: "",
        success: "Mensagem enviada com sucesso!",
      });
    } catch (err) {
      setIsLoading(false);

      setErrors({
        name: "",
        email: "",
        phone: "",
        cpf: "",
        city: "",
        isDoctor: "",
        hasClinic: "",
        success: "Erro ao enviar. Tente novamente mais tarde.",
      });
    }
  };

  const symbol = devieType === "desktop" ? ">" : "v";

  return (
    <>
      <PageLayout
        title={data.header?.title}
        subtitle={data.header?.description}
        breadcrumbs={breadcrumbs}
      >
        <RightFullBleedBanner
          title={data.mainBanner.title}
          src={data.mainBanner.media.data.url}
        />

        <CountrySection location={data.location} cards={data.cards} />

        <PurpleFullBleedBanner
          title={data.secondaryBanner.title}
          description={data.secondaryBanner.description}
          src={data.secondaryBanner.media.data.url}
        />

        <div className="mb-8 flex flex-col items-center self-center lg:mb-16 lg:flex-row">
          <Image
            src={data.compareImages.left.url}
            alt={data.compareImages.left.alt}
            width={1920}
            height={1080}
            className="size-[311px] md:size-[480px] lg:mr-20 lg:size-[350px] xl:mr-[180px] xl:size-[480px]"
          />

          <span className="mt-16 bg-transparent text-6xl text-primary lg:my-auto lg:text-8xl xl:text-9xl">
            {symbol}
          </span>

          <Image
            src={data.compareImages.right.url}
            alt={data.compareImages.right.alt}
            width={1920}
            height={1080}
            className="h-325px w-[311px] md:h-[501px] md:w-[481px] lg:h-[450px] lg:w-[390px] xl:h-[501px] xl:w-[481px]"
          />
        </div>
      </PageLayout>

      <div className="w-full bg-gray-200 py-20">
        <div className="mx-auto w-full max-w-screen-md px-4 text-center">
          <h2 className="text-4xl font-bold text-primary">
            {data.form?.title}
          </h2>

          <div
            className="mt-4 text-xl font-medium text-darkGray"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: data.form?.description || "" }}
          />

          <div className="mt-10 space-y-6 text-left">
            <div>
              <BaseInput
                placeholder="Nome completo"
                size="lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <BaseInput
                placeholder="E-mail"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
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
                placeholder="CPF"
                size="lg"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />

              {errors.cpf && (
                <p className="mt-1 text-sm text-red-500">{errors.cpf}</p>
              )}
            </div>

            <div>
              <BaseInput
                placeholder="Cidade"
                size="lg"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              {errors.city && (
                <p className="mt-1 text-sm text-red-500">{errors.city}</p>
              )}
            </div>

            <div>
              <BaseSelect
                placeholder="É médico?"
                options={[
                  { label: "Sim", value: "true" },
                  { label: "Não", value: "false" },
                ]}
                onChange={(value) => setIsDoctor(value === "true")}
                className="w-full overflow-hidden rounded-full bg-white"
              />

              {errors.isDoctor && (
                <p className="mt-1 text-sm text-red-500">{errors.isDoctor}</p>
              )}
            </div>

            <div>
              <BaseSelect
                placeholder="Já possui clínica de infusão?"
                options={[
                  { label: "Sim", value: "true" },
                  { label: "Não", value: "false" },
                ]}
                onChange={(value) => setHasClinic(value === "true")}
                className="w-full overflow-hidden rounded-full bg-white text-lightGray"
              />

              {errors.hasClinic && (
                <p className="mt-1 text-sm text-red-500">{errors.hasClinic}</p>
              )}
            </div>

            <div className="mt-10 space-y-6 text-center">
              <Button
                className="w-[322px] font-bold text-white"
                loading={isLoading}
                onClick={handleSubmit}
              >
                {data.form?.buttonText || "Enviar"}
              </Button>
            </div>

            <div className="mt-10 space-y-6 text-center">
              {errors.success && (
                <p
                  className={`mt-4 text-sm ${
                    errors.success.startsWith("Erro")
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
