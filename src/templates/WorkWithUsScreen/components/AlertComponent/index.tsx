import { AlertTriangle, CircleChevronRight } from "lucide-react";

export default function AlertComponent(): JSX.Element {
  return (
    <div className="mt-20 w-full rounded-3xl border-5 bg-gray-50 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex w-full max-w-72 items-center space-x-4">
          <AlertTriangle size={55} color="red" />
          <h1 className="text-3xl font-semibold text-darkGray">Fique atento</h1>
        </div>

        <div className="max-w-5xl text-left text-base">
          Oncoclínicas&Co é o maior grupo dedicado ao tratamento do câncer na
          América Latina, com um modelo especializado e inovador focado em toda
          a jornada do tratamento oncológico, aliando eficiência operacional,
          atendimento humanizado e especialização por meio de um corpo clínico
          composto por mais de 2.700 médicos especialistas com ênfase em
          oncologia.
        </div>
        <CircleChevronRight />
      </div>
    </div>
  );
}
