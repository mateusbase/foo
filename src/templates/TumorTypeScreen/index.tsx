import MenuItem from "@/components/MenuItem";
import PageLayout from "@/components/PageLayout";
import BaseSelect from "@/components/Select";
import tumorTypes from "@/pages/medicina-de-precisao/tipos-tumorais/tumorMock";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const TumorTypeScreen = (): JSX.Element => {
  const [selectedTumorType, setSelectedTumorType] = useState<number | null>(
    tumorTypes[0].id,
  );

  const currentTumor = tumorTypes.find(
    (tumor) => tumor.id === selectedTumorType,
  );

  const renderMobileSelect = (): JSX.Element => (
    <BaseSelect
      options={tumorTypes}
      color="primary"
      startContent={<RxHamburgerMenu size={20} className="text-primary" />}
      className="mb-7 mt-11 w-[321px] self-center lg:hidden"
      variant="bordered"
      labelPlacement="outside-left"
      labelColor="primary"
      radius="full"
      defaultSelectedKey="1"
      size="lg"
      borderStyle="border-primary"
      optionsColor="primary"
      onChange={(value) => setSelectedTumorType(Number(value))}
    />
  );

  const renderDesktopMenu = (): JSX.Element => (
    <div className="hidden flex-col font-lato-regular text-2xl text-white lg:flex lg:w-1/4">
      {tumorTypes.map((tumor) => (
        <MenuItem
          key={tumor.id}
          id={tumor.id}
          isFirst={tumor.id === 1}
          isLast={tumor.id === tumorTypes.length}
          name={tumor.label}
          isActive={selectedTumorType === tumor.id}
          onClick={(value) => setSelectedTumorType(Number(value))}
        />
      ))}
    </div>
  );

  const renderTumorHeader = (): JSX.Element => (
    <div className="lg:flex lg:flex-col">
      <img
        src={currentTumor?.icon}
        alt="Ícone do tipo de tumor"
        className="size-14"
      />
      <h1 className="mt-4 text-2xl font-bold text-primary">
        {currentTumor?.title}
      </h1>
      <p className="mt-4 text-xl text-darkGray">{currentTumor?.description}</p>
    </div>
  );

  const renderMethodologies = (): JSX.Element => (
    <div className="mb-5 flex w-full flex-col border border-primary-foreground lg:h-[224px] lg:w-1/2">
      <h2 className="border-b bg-primary pb-2 text-xl font-bold text-white">
        Metodologias
      </h2>
      <div className="grow overflow-auto">
        {currentTumor?.metodologies?.map((metodology, index) => (
          <div
            className={`mb-3 mt-4 p-2 ${index === 0 ? "border-b" : ""} border-primary-foreground`}
            key={metodology}
          >
            <p className="text-primary">{metodology}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderExams = (): JSX.Element => (
    <div className="mb-5 flex w-full flex-col border border-primary-foreground lg:h-[224px] lg:w-1/2">
      <h2 className="border-b bg-primary pb-2 pl-2 text-xl font-bold text-white">
        Exames
      </h2>
      <div className="grow overflow-auto">
        {currentTumor?.examCategories.map((category, categoryIndex) => (
          <div
            key={category.category}
            className={`mt-4 p-2 text-darkGray ${
              categoryIndex < currentTumor.examCategories.length - 1
                ? "border-b border-primary-foreground"
                : ""
            }`}
          >
            {category.exams.map((exam) => (
              <p key={exam.id}>{exam.name}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  const renderRelatedTypes = (): JSX.Element => (
    <div className="my-8 self-center lg:self-start">
      <h2 className="text-2xl font-bold text-primary lg:mb-7">
        Tipos Tumorais Relacionados
      </h2>
      <div className="mt-4 flex flex-col items-center gap-4 lg:flex-row lg:flex-wrap">
        {currentTumor?.types.map((type) => (
          <div
            key={type.title}
            className="mx-auto flex h-20 w-[328px] items-center gap-4 rounded-lg border-1 border-primary px-4 py-3 lg:mx-0"
          >
            <img src={type.icon} alt="Ícone do tipo" className="size-10" />
            <span className="ml-2 text-2xl text-primary">{type.title}</span>
            <IoIosArrowForward className="ml-auto rounded-full border-3 border-primary text-2xl text-primary" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <PageLayout title="Tipos tumorais" showBreadcrumb>
      {renderMobileSelect()}

      <div className="flex flex-col lg:mt-12 lg:flex-row lg:gap-8">
        {renderDesktopMenu()}

        <div className="lg:w-3/4">
          {selectedTumorType && (
            <div className="flex flex-col items-start">
              <div className="flex flex-col items-start lg:flex-row">
                {renderTumorHeader()}
              </div>

              <div className="mt-7 flex w-full flex-col items-start justify-between gap-4 lg:w-[689px] lg:flex-row lg:gap-0">
                {renderMethodologies()}
                {renderExams()}
              </div>

              {renderRelatedTypes()}
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default TumorTypeScreen;
