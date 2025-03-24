import Link from "next/link";

export default function ProgramaIDPulmao(): JSX.Element {
  return (
    <div className="font-lato-regular text-lg text-darkGray lg:w-3/5">
      <div>
        <h1 className="mb-5 text-2xl text-primary md:text-4xl">
          Programa ID Pulmão (EGFR/ALK/ROS1)
        </h1>
        <div className="text-base md:text-xl">
          <p>
            O ID Pulmão (EGFR/ALK/ROS1) é um Programa de Suporte ao Paciente da
            OC Medicina de Precisão em colaboração com a Roche para pacientes
            com câncer de pulmão. Os pacientes elegíveis ao programa ID Pulmão
            (EGFR/ALK/ROS1) terão acesso ao respectivo teste:
          </p>
          <ul className="ml-8 list-outside list-disc">
            <li>
              GS Focus (mutações em EGFR/ALK/ROS1 e outros 20 genes, DNAseq)
            </li>
          </ul>
          <p>
            Critérios de elegibilidade do programa ID Pulmão (EGFR/ALK/ROS1):
          </p>
          <ul className="ml-8 list-outside list-disc">
            <li>
              Câncer de pulmão não pequenas células, EGFR positivo, ALK positivo
              ou ROS1 positivo
            </li>
          </ul>
          <section className="mb-20">
            <p className="mt-9">Para mais informações: </p>
            <Link href="31) 9123-4567">
              Whatsapp: <span className="underline">(21) 9876-5432</span>
            </Link>
            <br />
            <Link href="psp@ocpmedicine.com">
              Email: <span className="underline">psp@ocpmedicine.com</span>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
