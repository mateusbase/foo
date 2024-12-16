import { AlertTriangle, CircleChevronRight } from "lucide-react";

export default function AlertComponent(): JSX.Element {
  return (
    <div className="my-10 w-full rounded-3xl border-5 bg-gray-50 p-4 md:px-8">
      <div className="flex flex-col items-center justify-between md:flex-row lg:flex-row">
        <div className="my-3 flex w-full max-w-72 items-center justify-center space-x-4">
          <AlertTriangle size={55} color="red" />
          <h1 className="text-xl font-semibold text-darkGray lg:text-3xl">
            Fique atento
          </h1>
        </div>

        <div className="max-w-5xl text-center text-sm text-darkGray lg:text-left lg:text-base">
          Oncoclínicas&Co é o maior grupo dedicado ao tratamento do câncer na
          América Latina, com um modelo especializado e inovador focado em toda
          a jornada do tratamento oncológico, aliando eficiência operacional,
          atendimento humanizado e especialização por meio de um corpo clínico
          composto por mais de 2.700 médicos especialistas com ênfase em
          oncologia.
        </div>
        <CircleChevronRight className="hidden xl:flex" />
      </div>
    </div>
  );
}
