import Link from "next/link";

export default function ProgramaIDMama(): JSX.Element {
  return (
    <div className="font-lato-regular text-lg text-darkGray lg:w-3/5">
      <div>
        <h1 className="mb-5 text-2xl text-primary md:text-4xl">
          Programa ID Mama (PIK3CA, AKT1, PTEN)
        </h1>
        <div className="text-base md:text-xl">
          <p>
            O ID Mama (PIK3CA/AKT1/PTEN) é Programa de Suporte ao Paciente da OC
            Medicina de Precisão em colaboração com a AstraZeneca para pacientes
            com câncer de mama. Os pacientes elegíveis ao programa ID Mama
            (PIK3CA/AKT1/PTEN) terão acesso ao respectivo teste:
          </p>
          <ul className="ml-8 list-outside list-disc">
            <li>
              GS Focus (mutações em PIK3CA/AKT1/PTEN e outros 21 genes, DNAseq)
            </li>
          </ul>
          <p>
            Critérios de elegibilidade do programa ID Mama (PIK3CA/AKT1/PTEN):
          </p>
          <ul className="ml-8 list-outside list-disc">
            <li>
              Câncer de mama metastático, RH positivo, HER2 negativo após uso de
              terapia endócrino + inibidor CDK4/6
            </li>
          </ul>
          <section className="mb-20">
            <p className="mt-9">Para mais informações: </p>
            <Link href="31) 9123-4567">
              Whatsapp: <span className="underline">(11) 2847-5900</span>
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
