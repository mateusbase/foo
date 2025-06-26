import { Button } from "@/components/Button";
import { useDeviceType } from "@/hooks/useDeviceType";
import { RichText } from "@/components/Blocks/RichText";
import { SpecialistCardProps } from "./types";

const SpecialistCard = ({
  date,
  signupButtonText,
  signupOverText,
  signupUrl,
  documentUrl,
  values,
}: SpecialistCardProps): JSX.Element => {
  const deviceType = useDeviceType();

  const firstValueSpan = values[0].description;
  const firstValueImage = values[0].image;
  const remainingValues = values.slice(1);

  const formatDate = (rawDate: string): string => {
    const parsedDate = new Date(`${rawDate}T00:00:00`);

    const day = parsedDate.getDate();
    const dayFormatted = day === 1 ? "1º" : day.toString();

    const month = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
      parsedDate,
    );

    const year = parsedDate.getFullYear();

    return `${dayFormatted} de ${month} de ${year}`;
  };

  const isDatePast = (rawDate: string): boolean => {
    const today = new Date();
    const deadline = new Date(`${rawDate}T23:59:59`);
    return today > deadline;
  };

  const registrationClosed = isDatePast(date);

  return (
    <div className="mb-8 text-xl text-darkGray lg:text-base xl:text-xl">
      <section className="flex h-[144px] flex-row items-center gap-4">
        <img
          src={firstValueImage.url}
          alt={firstValueImage.alt}
          width={firstValueImage.width}
          height={firstValueImage.height}
          className="size-[29.5px] shrink-0"
        />

        <div className="mt-4 flex flex-col gap-4">
          <p>Inscrições até {formatDate(date)}</p>

          <RichText content={firstValueSpan} />
        </div>
      </section>

      {remainingValues.map((value) => (
        <section className="flex h-[144px] flex-row items-center gap-4">
          <img
            src={value.image.url}
            alt={value.image.alt}
            width={value.image.width}
            height={value.image.height}
            className="size-[29.5px] shrink-0"
          />

          <div className="mt-4 flex flex-col gap-6">
            <RichText content={value.description} />
          </div>
        </section>
      ))}

      <div className="mt-6 flex flex-col gap-3 md:w-3/5 md:flex-row lg:w-full">
        <Button
          onClick={() => {
            if (!registrationClosed && signupUrl) {
              window.open(signupUrl, "_blank");
            }
          }}
          disabled={registrationClosed}
          className={`text-white md:w-[229px] xl:w-[229px] ${deviceType !== "desktop" ? "bg-primary" : "bg-darkGray"}`}
        >
          {registrationClosed ? signupOverText : signupButtonText}
        </Button>

        <Button
          className="border border-primary bg-white text-primary md:w-[215px] xl:w-[215px]"
          onClick={() => {
            if (documentUrl) {
              window.open(documentUrl, "_blank");
            }
          }}
        >
          Ler o edital completo
        </Button>
      </div>
    </div>
  );
};

export default SpecialistCard;
