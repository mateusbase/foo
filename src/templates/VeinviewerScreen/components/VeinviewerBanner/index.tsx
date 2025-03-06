const VeinviewerBanner = (): JSX.Element => {
  return (
    <div className="full-bleed flex flex-col lg:mt-8 lg:flex-row">
      <img
        src="/assets/images/veinviewer/banner-veinviewer-1.png"
        alt="Veinviewer"
        className="hidden rounded-bl-[80px] lg:block"
        fetchPriority="high"
      />
      <img
        src="/assets/images/veinviewer/banner-veinviewer-1.png"
        alt="Veinviewer"
        className="w-full lg:hidden"
        fetchPriority="high"
      />

      <div className="flex h-[375px] flex-col bg-custom-gradient-dark p-9 text-center text-white lg:h-[499px] lg:w-full">
        <p className="mx-auto mt-7 max-w-[30ch] font-lato-light text-3xl md:mt-20 md:text-4xl lg:mr-24 lg:mt-12 lg:max-w-[20ch] lg:pl-6 lg:text-left">
          Veinviewer é uma tecnologia de visualização venosa de última geração
          oferecida pela Oncoclínicas&Co.
        </p>
      </div>
    </div>
  );
};
export default VeinviewerBanner;
