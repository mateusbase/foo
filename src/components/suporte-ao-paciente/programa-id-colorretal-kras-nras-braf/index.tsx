import Link from "next/link";

export default function ProgramaIDColorretal(): JSX.Element {
  return (
    <div className="font-lato-regular text-lg text-darkGray lg:w-3/5">
      <div>
        <h1 className="mb-5 text-2xl text-primary md:text-4xl">
          Programa ID Colorretal (KRAS, NRAS, BRAF)
        </h1>
        <div className="text-base md:text-xl">
          <p>
            O ID Colorretal (KRAS/NRAS/BRAF) é um Programa de Suporte ao
            Paciente da OC Medicina de Precisão em colaboração com a Merck para
            pacientes com câncer colorretal. Os pacientes elegíveis ao programa
            ID Colorretal (KRAS/NRAS/BRAF) terão acesso ao respectivo teste:
          </p>
          <ul className="ml-8 list-outside list-disc">
            <li>
              GS Focus (mutações em KRAS/NRAS/BRAF e outros 19 genes, DNAseq)
            </li>
          </ul>
          <p>
            Critérios de elegibilidade do programa ID Colorretal
            (KRAS/NRAS/BRAF):
          </p>
          <ul className="ml-8 list-outside list-disc">
            <li>Câncer colorretal metastático, KRAS/NRAS/BRAF positivo</li>
          </ul>
          <section className="mb-20">
            <p className="mt-9">Para mais informações: </p>
            <Link href="31) 9123-4567">
              Whatsapp: <span className="underline">(31) 9123-4567</span>
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
