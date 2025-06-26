import Image from "next/image";
import Link from "next/link";

export default function NotFound(): JSX.Element {
  return (
    <div className="my-60 flex flex-col items-center justify-center bg-white px-6 text-darkGray">
      <div className="flex w-full max-w-6xl flex-col items-center justify-center text-center lg:flex-row lg:text-left">
        <div className="shrink-0">
          <Image
            src="/assets/images/404.png"
            alt="Erro 404"
            width={400}
            height={400}
            priority
          />
        </div>

        <div className="mt-8 lg:ml-12 lg:mt-0">
          <h1 className="text-4xl font-semibold text-primary lg:text-5xl">
            Desculpe, a página não está disponível
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            A página que você buscou não existe ou foi removida.
          </p>

          <Link
            href="/"
            className="hover:bg-primary-dark mt-6 inline-block rounded bg-primary px-6 py-3 text-white"
          >
            Voltar para a home
          </Link>
        </div>
      </div>
    </div>
  );
}
