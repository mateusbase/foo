import Image from "next/image";

interface AlertComponentProps {
  shouldShowIcon?: boolean;
  title?: string;
  subtitle?: string;
}

export default function AlertComponent({
  shouldShowIcon = true,
  title = "Fique atento",
  subtitle = "Para saber se o seu convênio e plano são aceitos na unidade onde deseja atendimento, entre em contato com a sua operadora de saúde ou com a nossa Central de Atendimento.",
}: AlertComponentProps): JSX.Element {
  return (
    <div className="my-4 w-full rounded-3xl border-5 bg-gray-50 p-4 md:px-8 lg:my-10">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div
          className={`my-3 flex w-full max-w-72 items-center ${
            shouldShowIcon ? "space-x-4" : "justify-center"
          }`}
        >
          {shouldShowIcon && (
            <div className="size-8 shrink-0 lg:ml-12 lg:size-16">
              <Image
                src="/assets/images/AlertIcon/image 7.png"
                alt="Ícone alerta"
                width={64}
                height={64}
                className="size-8 lg:size-16"
              />
            </div>
          )}

          <h1 className="text-xl font-semibold text-darkGray lg:text-3xl xl:ml-10">
            {title}
          </h1>
        </div>

        <div className="max-w-5xl text-center text-sm text-darkGray lg:text-left lg:text-xl">
          {subtitle}
        </div>
      </div>
    </div>
  );
}
