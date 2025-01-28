const YouthBanner = (): JSX.Element => {
  return (
    <div className="full-bleed flex flex-col lg:mt-8 lg:flex-row">
      <img
        src="/assets/images/campaigns_banner.png"
        alt="Diagnóstico precoce em crianças"
        className="w-full lg:hidden"
        fetchPriority="high"
      />
      <img
        src="/assets/images/lg_campaigns_banner.png"
        alt="Diagnóstico precoce em crianças"
        className="hidden w-1/2 lg:block"
        fetchPriority="high"
      />
      <div className="flex h-[375px] flex-col justify-around bg-custom-gradient-dark p-9 text-center text-white lg:h-[402px]">
        <h1 className="font-lato-bold text-4xl">Setembro Dourado</h1>
        <p className="font-lato-light text-xl">
          Com o diagnóstico precoce e preciso, as chances de cura do câncer
          infantojuvenil são de até 80%.
        </p>

        <button
          type="button"
          className="h-[54px] w-[330px] self-center rounded-md border border-white px-5 py-2 text-center font-lato-light text-base"
        >
          Saiba mais
        </button>
      </div>
    </div>
  );
};

export default YouthBanner;
