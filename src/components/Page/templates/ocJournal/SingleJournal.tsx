import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/Button";
import Image from "next/image";
import { RichText } from "@/components/Blocks/RichText";
import BaseSwiper from "@/components/BaseSwiper";
import BaseContainer from "@/components/Container";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/Blocks/ShareOptions/socialNetwork";
import BaseInput from "@/components/Input";
import BaseSelect from "@/components/Select";
import { useState } from "react";
import apiClient from "@/services/apiClient";
import { formatFullDate } from "../events/utils";
import { SingleJournalRootProps } from "./types";
import NewsPreviewCard from "../news/components/NewsPreviewCard";
import { validateEdition } from "./util";

export function SingleJournalRoot({
  data,
  breadcrumbs,
}: SingleJournalRootProps): JSX.Element {
  const { title, date, category, content, relatedArticles } = data;
  const { icon } = category;
  const { url, alt, width, height } = icon;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [crm, setCrm] = useState({ number: "", state: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [specialty, setSpecialty] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    crm: "",
    specialty: "",
    uf: "",
    success: "",
  });

  const handleSubmit = async (): Promise<void> => {
    const { isValid, errors: validationErrors } = validateEdition(
      name,
      email,
      crm,
      specialty,
    );

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await apiClient.post("/api/pages/action", {
        kind: "JOURNAL_ARTICLE",
        action: "SUBSCRIBE_TO_JOURNAL",
        payload: {
          name: name.trim(),
          email: email.trim(),
          crm: {
            number: crm.number.trim(),
            state: crm.state,
          },
          specialty: specialty.trim(),
        },
      });

      setName("");
      setEmail("");
      setCrm({ number: "", state: "" });
      setSpecialty("");

      setErrors({
        name: "",
        email: "",
        crm: "",
        specialty: "",
        uf: "",
        success: "Cadastro realizado com sucesso!",
      });
    } catch (err) {
      setErrors({
        name: "",
        email: "",
        crm: "",
        specialty: "",
        uf: "",
        success: "Erro ao enviar. Tente novamente mais tarde.",
      });

      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageLayout title={data.title} breadcrumbs={breadcrumbs}>
        <div className="mt-10 flex flex-col items-center">
          <h4 className="text-sm text-lightGray md:text-xl">
            {formatFullDate(date)}
          </h4>

          <Button
            className="mt-10 max-h-12 justify-center align-middle text-sm md:w-52"
            variant="outlined"
            color="secondary"
          >
            <Image
              src={url}
              width={width}
              height={height}
              alt={alt}
              className="size-5"
            />
            {category.name}
          </Button>

          <h1 className="mt-10 text-center text-xl font-light text-darkGray md:text-4xl md:text-primary lg:w-3/4 lg:text-5xl">
            {title}
          </h1>

          <RichText
            content={content}
            className="mt-10 text-sm font-bold text-lightGray md:text-base lg:text-2xl"
          />
        </div>

        <div className="my-10 flex flex-col justify-center gap-16 md:justify-start">
          <ShareOptions options={socialNetwork} />
        </div>

        <div className="my-12 flex flex-col items-center justify-center gap-12">
          <h1 className="text-center text-2xl text-primary md:w-3/5 md:text-title-lg lg:w-full">
            Para receber as próximas edições, cadastre-se aqui.
          </h1>

          <div className="flex w-full flex-col gap-4 md:max-w-[676px]">
            <div>
              <BaseInput
                placeholder="Nome"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <BaseInput
                placeholder="CRM"
                value={crm.number}
                onChange={(e) =>
                  setCrm((prev) => ({ ...prev, number: e.target.value }))
                }
              />

              {errors.crm && (
                <p className="mt-1 text-sm text-red-500">{errors.crm}</p>
              )}
            </div>

            <div>
              <BaseInput
                placeholder="Especialidade"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
              />

              {errors.specialty && (
                <p className="mt-1 text-sm text-red-500">{errors.specialty}</p>
              )}
            </div>

            <div>
              <BaseSelect
                options={[
                  { value: "SP", label: "SP" },
                  { value: "RJ", label: "RJ" },
                  { value: "MG", label: "MG" },
                ]}
                placeholder="UF"
                value={crm.state}
                onChange={(value) =>
                  setCrm((prev) => ({ ...prev, state: value }))
                }
              />

              {errors.uf && (
                <p className="mt-1 text-sm text-red-500">{errors.uf}</p>
              )}
            </div>
          </div>

          <Button
            className="w-[322px]"
            onClick={handleSubmit}
            loading={isSubmitting}
          >
            Cadastrar
          </Button>

          {errors.success && (
            <p className="mt-4 text-sm text-primary">{errors.success}</p>
          )}
        </div>
      </PageLayout>

      <div className="bg-gray-foreground py-20">
        <BaseContainer>
          <h1 className="mb-10 text-2xl font-light text-primary md:text-4xl lg:mb-14 lg:text-6xl">
            Itens relacionados
          </h1>

          <BaseSwiper
            data={relatedArticles}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 10 },
              1025: { slidesPerView: 4, spaceBetween: 10 },
            }}
            hasArrows={false}
            renderItem={(news) => (
              <NewsPreviewCard
                key={news.id}
                author={news.author}
                name={news.title}
                date={news.date}
                description={news.shortDescription}
                path={news.path}
                image={news.coverImage}
              />
            )}
            className="mx-auto flex"
          />
        </BaseContainer>
      </div>
    </>
  );
}
