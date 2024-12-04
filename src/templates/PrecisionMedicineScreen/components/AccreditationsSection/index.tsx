const AccreditationsSection = (): JSX.Element => {
  return (
    <section className="relative left-1/2 mt-20 flex h-[946px] w-screen -translate-x-1/2 flex-col items-center bg-gray-foreground text-center">
      <h1 className="mt-14 font-lato-bold text-2xl text-primary">
        Acreditações OC
      </h1>
      <h2 className="mb-11 font-lato-bold text-2xl text-primary">
        Medicina de Precisão
      </h2>

      <div className="mb-5 flex min-h-[220px] w-[300px] flex-col items-center justify-center rounded-3xl bg-white px-1 py-9">
        <img
          src="assets/images/image 16.png"
          alt="Ícone Programa ID Mama (PIK3CA/AKT1/PTEN)"
          className="mb-4"
        />
        <p className="text-center font-lato-thin text-base text-darkGray">
          Programa ID Mama (PIK3CA/AKT1/PTEN)
        </p>
      </div>

      <div className="mb-5 flex min-h-[220px] w-[300px] flex-col items-center justify-center rounded-3xl bg-white px-1 py-9">
        <img
          src="assets/images/image 19.png"
          alt="Ícone Anatomia BH Acreditação ONA ONA - nível 01 certificada em 2022"
          className="mb-4"
        />
        <p className="text-center font-lato-thin text-base text-darkGray">
          Anatomia BH Acreditação ONA
        </p>
        <p className="text-center font-lato-thin text-base text-darkGray">
          ONA - nível 01 certificada em 2022
        </p>
      </div>

      <div className="mb-5 flex min-h-[220px] w-[300px] flex-col items-center justify-center rounded-3xl bg-white px-1 py-9">
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
    </section>
  );
};

export default AccreditationsSection;
