import { AlertTriangle, CircleChevronRight } from "lucide-react";

export default function AlertComponent(): JSX.Element {
  return (
    <div className="my-4 w-full rounded-3xl border-5 p-3 px-6">
      <div className="flex items-center justify-between">
        <div className="flex w-full max-w-60 items-center space-x-4">
          <AlertTriangle size={45} color="red" />
          <h1 className="text-3xl font-semibold text-darkGray">Fique atento</h1>
        </div>

        <div className="max-w-6xl text-left text-base">
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
