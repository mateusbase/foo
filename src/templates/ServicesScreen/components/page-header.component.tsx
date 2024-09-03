const PageHeader = (): JSX.Element => {
  return (
    <div className="relative h-[343px] w-full bg-gradient-to-r from-[#00B6AD] to-[#BA99E7]">
      <div className="absolute inset-0 flex justify-center">
        <div className="ml-24 flex w-full max-w-screen-2xl flex-col justify-center">
          <h1 className="text-[60px] font-bold leading-[72px] text-white">
            Serviços, diagnósticos e tratamentos
          </h1>
          <p className="mt-4 text-[18px] font-medium leading-[24px] text-white">
            Oncoclínicas
          </p>
        </div>
      </div>

      <div className="absolute bottom-[-56.5px] right-0 flex h-[113px] w-[753px] items-center justify-between rounded-l-[20px] bg-[#007D77] pl-6 pr-10 text-white">
        <div className="ml-[30px] flex items-center gap-8 text-[24px] font-medium">
          <a href="#" className="flex items-center gap-2 hover:underline">
            Serviços
          </a>
          <span>|</span>
          <a href="#" className="flex items-center gap-2 hover:underline">
            Diagnósticos
          </a>
          <span>|</span>
          <a href="#" className="flex items-center gap-2 hover:underline">
            Tratamentos
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
