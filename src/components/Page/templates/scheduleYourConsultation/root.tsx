import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import Image from "next/image";
import BaseSelect from "@/components/Select";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/Dialog";
import BaseInput from "@/components/Input";
import { Button } from "@/components/Button";
import apiClient from "@/services/apiClient";
import { getUrlTacks } from "@/utils/getUrlTracks";
import { isFormDataValid, isValidDate } from "@/utils/objectUtils";
import { AppointmentsScheduleRootProps } from "./types";
import { maskBirthday, maskCPF, maskPhone, sanitizeEmail } from "./helpers";

export function AppointmentsScheduleRoot({
  data,
  breadcrumbs,
}: AppointmentsScheduleRootProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedCard, setSelectedCard] = useState<null | any>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(null);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    cpf: "",
    birthday: "",
    optIn: false,
  });

  const states = Array.from(
    new Set(data.units.map((unit) => unit.address.state)),
  ).map((state) => ({ value: state, label: state }));

  const cities = selectedState
    ? Array.from(
        new Set(
          data.units
            .filter((unit) => unit.address.state === selectedState)
            .map((unit) => unit.address.city),
        ),
      ).map((city) => ({ value: city, label: city }))
    : [];

  const filteredUnits = data.units.filter(
    (unit) =>
      unit.address.state === selectedState &&
      unit.address.city === selectedCity,
  );

  const unitOptions = filteredUnits.map((unit) => ({
    value: unit.id,
    label: unit.name,
  }));

  const selectedUnit = data.units.find((unit) => unit.id === selectedUnitId);

  function formatPhone(phone: string): string {
    const digits = phone.replace(/\D/g, "");

    if (digits.length === 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }

    if (digits.length === 11) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }

    return phone;
  }

  const contactCards = [
    {
      id: "whatsapp",
      img: "https://assets-origin-dev.grupooncoclinicas.com/media/cdc32894-7752-4f40-8d4c-226f1e3ac450/2x5poBDIe5um6gybm2sx0UlbCjy",
      getTitle: () => `Fale com a gente pelo WhatsApp`,
      description:
        "Informe os dados abaixo para seguir com o atendimento via WhatsApp",
    },
    {
      id: "chat",
      img: "https://assets-origin-dev.grupooncoclinicas.com/media/b378f183-5f55-4200-8883-a4929fec38ac/2x5pwuCS6a4Ye5AhfpsXwLjbeCA",
      getTitle: () => "Iniciar atendimento pelo chat",
      description:
        "Informe os dados abaixo para seguir com o atendimento via Chat",
    },
    {
      id: "phone",
      img: "https://assets-origin-dev.grupooncoclinicas.com/media/da6a8eb9-db2e-4fa2-8964-45c4f95b53ef/2x5pyProC00GnC8DCqKQBdrXspI",
      getTitle: (unit: typeof selectedUnit) =>
        `Ligue para nossa unidade ${formatPhone(unit?.contact.phone || "")}`,
      description: "Ligue para o número informado para atendimento imediato.",
    },
  ];

  const isFormValid = isFormDataValid(formData);

  const onSubmit = async (): Promise<void> => {
    setIsLoading(true);

    const trackedParams = getUrlTacks(window.location.href);

    const rawPayload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      cpf: formData.cpf.trim(),
      birthday: formData.birthday.trim(),
      optIn: formData.optIn,
      phone: formData.phone.replace(/\D/g, ""),
      unitId: selectedUnit?.id,
      sector: "",
      utmSource: trackedParams.utm_source || "",
      utmMedium: trackedParams.utm_medium || "",
      utmId: trackedParams.utm_id || "",
      utmCampaign: trackedParams.utm_campaign || "",
      utmContent: trackedParams.utm_content || "",
      utmTerm: trackedParams.utm_term || "",
      GClid: trackedParams.GClid || "",
      FBClid: trackedParams.FBClid || "",
    };

    const payload = Object.fromEntries(
      Object.entries(rawPayload).filter(([key, value]) => {
        if (
          [
            "utmSource",
            "utmMedium",
            "utmId",
            "utmCampaign",
            "utmContent",
            "utmTerm",
            "GClid",
            "FBClid",
          ].includes(key)
        ) {
          return value !== "";
        }

        return true;
      }),
    );

    try {
      await apiClient.post("/api/pages/action", {
        kind: "APPOINTMENT_SCHEDULE",
        action: "WHATSAPP_SENT",
        payload,
      });

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      err;
    }
  };

  const handleContactSubmit = async (): Promise<void> => {
    if (!selectedCard || !selectedUnit) return;

    if (selectedCard.id === "chat" && typeof window !== "undefined") {
      const contextPayload = {
        name: formData.name,
        email: formData.email,
        telefone: formData.phone,
        cpf: formData.cpf,
        birthday: formData.birthday,
        unidade: selectedUnit.name || "",
        estado: selectedState,
        cidade: selectedCity,
        optIn: formData.optIn,
      };

      window.kloe?.updateContext(contextPayload);
      window.kloe?.show();
      window.kloe?.open();

      setSelectedCard(null);

      setFormData({
        name: "",
        phone: "",
        email: "",
        cpf: "",
        birthday: "",
        optIn: false,
      });

      return;
    }

    if (selectedCard.id === "whatsapp") {
      setIsLoading(true);

      try {
        await onSubmit();

        const phone = selectedUnit.contact.whatsapp || "";

        window.open(`https://wa.me/+55${phone.replace(/\D/g, "")}`, "_blank");

        setSelectedCard(null);

        setFormData({
          name: "",
          phone: "",
          email: "",
          cpf: "",
          birthday: "",
          optIn: false,
        });
      } catch (err) {
        err;
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <main>
      <PageLayout
        title={data.header?.title}
        subtitle={data.header?.description}
        breadcrumbs={breadcrumbs}
      >
        <div className="mb-10 mt-5 flex flex-col-reverse gap-10 lg:mb-6 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h1 className="text-title-lg text-primary">{data.form.title}</h1>

            <span className="mt-2 text-2xl text-primary">
              {data.form.description}
            </span>

            <div className="mt-6 flex gap-4">
              <BaseSelect
                placeholder="Selecione o estado"
                options={states}
                onChange={(value) => {
                  setSelectedState(value || null);
                  setSelectedCity(null);
                  setSelectedUnitId(null);
                }}
              />

              <BaseSelect
                placeholder="Selecione a cidade"
                options={cities}
                onChange={(value) => {
                  setSelectedCity(value || null);
                  setSelectedUnitId(null);
                }}
                disabled={!selectedState}
              />
            </div>

            <div className="mt-6">
              <BaseSelect
                placeholder="Selecione a unidade"
                options={unitOptions}
                onChange={(value) => setSelectedUnitId(value || null)}
                disabled={!selectedCity}
              />
            </div>

            {selectedUnit && (
              <div className="mt-10 flex flex-wrap justify-start gap-8">
                {contactCards
                  .filter((card) => {
                    if (!selectedUnit?.contact?.activeWhatsapp) {
                      return card.id !== "chat";
                    }

                    return true;
                  })
                  .map((card) => {
                    const title = card.getTitle(selectedUnit);

                    return (
                      <div
                        key={card.id}
                        onClick={() => {
                          if (card.id === "phone") {
                            setShowPhoneModal(true);
                          } else {
                            setSelectedCard({ ...card, title });
                          }
                        }}
                        className="flex h-48 w-32 cursor-pointer flex-col items-center justify-center rounded-2xl border border-primary px-2 py-4 text-center transition hover:shadow-md"
                      >
                        <div className="mb-3">
                          <img src={card.img} alt="" width={64} height={64} />
                        </div>

                        <p className="text-base font-medium text-darkGray">
                          {title}
                        </p>
                      </div>
                    );
                  })}
              </div>
            )}

            <Dialog
              open={!!selectedCard}
              onOpenChange={(open) => !open && setSelectedCard(null)}
            >
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{selectedCard?.title}</DialogTitle>

                  <DialogDescription>
                    {selectedCard?.description}
                  </DialogDescription>
                </DialogHeader>

                {(selectedCard?.id === "whatsapp" ||
                  selectedCard?.id === "chat") && (
                  <form className="mt-4 space-y-4 text-center">
                    <BaseInput
                      placeholder="Nome"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />

                    <div className="flex gap-4">
                      <BaseInput
                        placeholder="Celular"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            phone: maskPhone(e.target.value),
                          }))
                        }
                      />

                      <BaseInput
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: sanitizeEmail(e.target.value),
                          }))
                        }
                      />
                    </div>

                    <div className="flex gap-4">
                      <BaseInput
                        placeholder="CPF"
                        value={formData.cpf}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            cpf: maskCPF(e.target.value),
                          }))
                        }
                      />

                      <BaseInput
                        placeholder="Data de nascimento"
                        value={formData.birthday}
                        onChange={(e) => {
                          const masked = maskBirthday(e.target.value);

                          setFormData((prev) => ({
                            ...prev,
                            birthday: masked,
                          }));
                        }}
                        error={
                          formData.birthday !== "" &&
                          !isValidDate(formData.birthday)
                            ? "Data inválida"
                            : undefined
                        }
                      />
                    </div>

                    <div className="flex items-start space-x-3 pt-4">
                      <input
                        type="checkbox"
                        id="terms"
                        className="size-8 accent-primary"
                        checked={formData.optIn}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            optIn: e.target.checked,
                          }))
                        }
                      />

                      <label
                        htmlFor="terms"
                        className="-mt-1 text-left text-[14px] leading-[18px] text-lightGray"
                      >
                        Gostaria de receber comunicações sobre produtos,
                        serviços e novidades da Oncoclínicas? Ao continuar você
                        concorda com a{" "}
                        <Link
                          href="/app/termos-de-uso"
                          className="cursor-pointer font-semibold underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Política de Privacidade e Tratamento de Dados.
                        </Link>
                      </label>
                    </div>

                    <div className="pt-5">
                      <Button
                        disabled={!isFormValid || isLoading}
                        onClick={handleContactSubmit}
                      >
                        {selectedCard?.id === "whatsapp"
                          ? "ABRIR WHATSAPP"
                          : "INICIAR CHAT"}
                      </Button>
                    </div>
                  </form>
                )}
              </DialogContent>
            </Dialog>

            <Dialog
              open={showPhoneModal}
              onOpenChange={(open) => setShowPhoneModal(open)}
            >
              <DialogContent className="max-w-md text-left">
                <DialogHeader />

                {selectedUnit && (
                  <div className="space-y-4">
                    <div>
                      <p className="text-2xl text-darkGray">
                        Informações de contato
                      </p>

                      <span className="text-md text-gray-600">
                        {selectedUnit.address.street},{" "}
                        {selectedUnit.address.number} -{" "}
                        {selectedUnit.address.city} -{" "}
                        {selectedUnit.address.state}
                      </span>
                    </div>

                    <div>
                      <p className="text-2xl text-darkGray">
                        Horário de funcionamento
                      </p>

                      {selectedUnit?.workingHours?.map((item) => (
                        <p key={item.day} className="text-darkGray">
                          {item.day}:{" "}
                          <span className="text-primary">{item.hour}</span>
                        </p>
                      ))}
                    </div>

                    <div>
                      <p className="text-2xl text-darkGray">
                        Telefones de contato
                      </p>

                      <p className="text-sm text-darkGray">
                        Telefone:{" "}
                        <span className="text-primary">
                          {formatPhone(selectedUnit.contact.phone)}
                        </span>
                      </p>

                      <p className="text-sm text-darkGray">
                        WhatsApp:{" "}
                        <span className="text-primary">
                          {formatPhone(selectedUnit.contact.whatsapp)}
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>

          <div className="w-full flex-col items-center lg:flex lg:w-1/2">
            <img
              src={data.image.image.url}
              alt={data.image.image.alt}
              className="w-full object-cover"
            />

            <p className="mb-5 mt-4 text-left text-lightGray">
              {data.image.legend}
            </p>

            <div className="mt-6 flex flex-col gap-4 md:flex-row">
              {data.cards.cards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-1 flex-col items-center justify-between gap-5 rounded-2xl border border-primary p-8 shadow-sm"
                >
                  <div>
                    <div className="mb-3 flex items-center justify-center gap-4 text-primary">
                      <Image
                        src={card.icon.url}
                        alt={card.icon.alt}
                        width={card.icon.width}
                        height={card.icon.height}
                      />
                      <h3 className="text-4xl font-semibold text-primary">
                        {card.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-lg text-zinc-600">
                      {card.description}
                    </p>
                  </div>

                  <Link
                    href={card.link?.path || "#"}
                    target={card.link?.openOnNewTab ? "_blank" : "_self"}
                    rel={
                      card.link?.openOnNewTab
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="w-full"
                  >
                    <Button className="w-full">{card.linkText}</Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageLayout>
    </main>
  );
}
