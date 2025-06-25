import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/Button";
import BaseInput from "@/components/Input";
import { useState } from "react";
import apiClient from "@/services/apiClient";
import BaseSwiper from "@/components/BaseSwiper";
import { Textarea } from "@/components/Textarea";
import CTACardGrid from "@/components/Blocks/CTACardGrid";
import { CTACardProps } from "@/components/Blocks/CTACard/types";
import { DeLifeRootProps } from "./types";
import FullBleedBanner from "./components/FullbleedBanner";
import { validate } from "./helpers";
import SimpleCard from "./components/SimpleCard";

export function DeLifeRoot({
  data,
  breadcrumbs,
}: DeLifeRootProps): JSX.Element {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    success: "",
  });

  const handleSubmit = async (): Promise<void> => {
    const { isValid, errors: validationErrors } = validate(
      name,
      phone,
      email,
      message,
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
          message: message.trim(),
        },
      });

      setIsLoading(false);

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      setErrors({
        name: "",
        email: "",
        phone: "",
        message: "",
        success: "Mensagem enviada com sucesso!",
      });
    } catch (err) {
      setIsLoading(false);

      setErrors({
        name: "",
        email: "",
        phone: "",
        message: "",
        success: "Erro ao enviar. Tente novamente mais tarde.",
      });
    }
  };

  const cardsWithId = data.cards.cards.map((card, index) => ({
    ...card,
    id: index,
  }));

  const ctaArray: CTACardProps[] = [
    {
      title: data.partnerCTA.title,
      description: data.partnerCTA.description,
      variant: "border",
      link: data.partnerCTA.link,
      text: data.partnerCTA.linkText,
    },
    {
      title: data.operatorCTA.title,
      description: data.operatorCTA.description,
      variant: "filled",
      link: data.operatorCTA.link,
      text: data.operatorCTA.linkText,
    },
  ];

  return (
    <main>
      <PageLayout
        title={data.header?.title}
        subtitle={data.header?.description}
        breadcrumbs={breadcrumbs}
      >
        <FullBleedBanner
          src={data.mainBanner.media.data.url}
          title={data.mainBanner.title}
          description={data.mainBanner.description}
        />

        <CTACardGrid columns="2" cards={ctaArray} />

        <div className="mt-10">
          <h1 className="mb-4 text-4xl text-primary md:text-title-lg">
            {data.cards.title}
          </h1>

          <p className="mb-9 text-xl text-darkGray md:mb-16 lg:mb-9">
            {data.cards.description}
          </p>
        </div>

        <div className="mb-10 hidden md:grid md:grid-cols-2 md:gap-8 lg:flex lg:flex-row">
          {cardsWithId.map((item) => (
            <SimpleCard
              key={item.id}
              title={item.title}
              description={item.description}
              textPrimary
            />
          ))}
        </div>

        <div className="my-10">
          <BaseSwiper
            data={cardsWithId}
            renderItem={(item) => (
              <SimpleCard
                title={item.title}
                description={item.description}
                textPrimary
              />
            )}
            className="mb-7 md:hidden"
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
              <Textarea
                name="Mensagem"
                placeholder="Mensagem"
                onChange={(e) => setMessage(e.target.value)}
                className="w-full"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
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
    </main>
  );
}
