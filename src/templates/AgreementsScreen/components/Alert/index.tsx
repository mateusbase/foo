import { AlertTriangleIcon } from "@/components/Icons";

export default function AlertComponent(): JSX.Element {
  return (
    <div className="my-10 w-full rounded-3xl border-5 bg-gray-50 p-4 md:px-8">
      <div className="flex flex-col items-center justify-between md:flex-row lg:flex-row">
        <div className="my-3 flex w-full max-w-72 items-center justify-center space-x-4">
          <AlertTriangleIcon size={1} color="red" />
          <h1 className="text-xl font-semibold text-darkGray lg:text-3xl">
            Fique atento
          </h1>
        </div>

        <div className="max-w-5xl text-center text-sm text-darkGray lg:text-left lg:text-xl">
          Para saber se o seu convênio e plano são aceitos na unidade onde
          deseja atendimento, entre em contato com a sua operadora de saúde ou
          com a nossa Central de Atendimento.
        </div>
      </div>
    </div>
  );
}
