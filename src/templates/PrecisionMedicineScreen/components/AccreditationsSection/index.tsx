const AccreditationsSection = (): JSX.Element => {
  return (
    <section className="full-bleed-lg mt-20 flex min-h-[400px] max-w-screen-2xl flex-col items-center bg-gray-foreground text-center md:-mb-7 md:mt-20 md:h-auto lg:-mb-16">
      <div className="flex flex-col md:mt-8 md:flex-row md:items-center md:gap-2 lg:mt-14">
        <h1 className="mt-14 font-lato-black text-2xl text-primary md:mt-0 lg:text-6xl">
          Acreditações OC
        </h1>
        <h2 className="mb-11 font-lato-black text-2xl text-primary md:mb-0 lg:text-6xl">
          Medicina de Precisão
        </h2>
      </div>

      <div className="mb-9 mt-14 flex flex-col items-center gap-6 md:mb-10 md:w-[90%] md:flex-row lg:mb-24 lg:justify-center lg:align-middle">
        <div className="flex min-h-[250px] w-[300px] flex-col items-center justify-center rounded-3xl bg-white px-1 py-9">
          <img
            src="assets/images/image 16.png"
            alt="Ícone ONA - nível 3"
            className="mb-4"
          />
          <p className="text-center font-lato-thin text-base text-darkGray">
            ONA - nível 3
          </p>
        </div>
        <div className="flex min-h-[250px] w-[300px] flex-col items-center justify-center rounded-3xl bg-white px-1 py-9">
          <img
            src="assets/images/image 19.png"
            alt="Ícone Anatomia BH Acreditação ONA ONA - nível 01 certificada em 2022"
            className="mb-4"
          />
          <p className="text-center font-lato-thin text-base text-darkGray md:text-xs">
            Anatomia BH Acreditação ONA
          </p>
          <p className="text-center font-lato-thin text-base text-darkGray md:text-xs">
            ONA - nível 01 certificada em 2022
          </p>
        </div>
        <div className="flex min-h-[250px] w-[300px] flex-col items-center justify-center rounded-3xl bg-white px-1 py-9">
          <img
            src="assets/images/image 18.png"
            alt="Ícone Programa ID Mama (PIK3CA/AKT1/PTEN)"
            className="mb-4"
          />
          <p className="text-center font-lato-thin text-base text-darkGray">
            Genômica (Idengene)
          </p>
          <p className="text-center font-lato-thin text-base text-darkGray">
            PALC
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccreditationsSection;
