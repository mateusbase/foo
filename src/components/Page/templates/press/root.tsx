import PageLayout from "@/components/PageLayout";
import DynamicBanner from "@/components/Blocks/DynamicBanner";
import BaseInput from "@/components/Input";
import { Button } from "@/components/Button";
import { useState } from "react";
import apiClient from "@/services/apiClient";
import { Textarea } from "@/components/Textarea";
import { PressRootProps } from "./types";
import { validate } from "./helpers";

export function PressRoot({ data, breadcrumbs }: PressRootProps): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    success: "",
  });

  const handleSubmit = async (): Promise<void> => {
    const { isValid, errors: validationErrors } = validate(
      name,
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
        kind: "OC_PRESS",
        action: "CONTACT_FORM",
        payload: {
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        },
      });

      setIsLoading(false);

      setName("");

      setEmail("");

      setMessage("");

      setErrors({
        name: "",
        email: "",
        message: "",
        success: "Mensagem enviada com sucesso!",
      });
    } catch (err) {
      err;

      setIsLoading(false);

      setErrors({
        name: "",
        email: "",
        message: "",
        success: "Erro ao enviar. Tente novamente mais tarde.",
      });
    }
  };

  return (
    <main>
      <PageLayout
        title={data.header?.title}
        subtitle={data.header?.description}
        breadcrumbs={breadcrumbs}
      >
        <div className="mb-10 mt-6 flex flex-col gap-5 md:mt-6 md:flex-row lg:mt-0">
          <div>
            <DynamicBanner
              image={data.mediaLink.image}
              layout="vertical"
              imagePosition="top"
              theme="gradient"
              textAlign="left"
              roundedPosition="br"
              subtitle={data.mediaLink.subTitle}
              title={data.mediaLink.title}
              description={data.mediaLink.description}
              press
              actionLink="/imprensa/oc-na-midia"
              shouldShowButton
            />
          </div>

          <div>
            <DynamicBanner
              image={data.release.image}
              layout="vertical"
              imagePosition="top"
              theme="gradient"
              textAlign="left"
              roundedPosition="br"
              subtitle={data.release.subTitle}
              title={data.release.title}
              description={data.release.description}
              press
              actionLink="/imprensa/releases"
              shouldShowButton
            />
          </div>
        </div>
      </PageLayout>

      <div className="w-full bg-gray-200 py-20">
        <div className="mx-auto w-full max-w-screen-lg px-4 text-center">
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
                placeholder="Seu nome"
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
                placeholder="Seu email"
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
                label="Mensagem"
                placeholder="Escreva sua mensagem aqui..."
                className="w-full rounded-xl bg-white"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <div className="mt-10 space-y-6 text-center">
              <Button
                className="w-[322px] font-bold"
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
