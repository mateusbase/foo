import { WomanBenefitsMock } from "../../interfaces";

const BenefitsCards = (props: WomanBenefitsMock): JSX.Element => {
  const { title, description } = props;
  return (
    <div className="mx-auto my-12 h-[390px] w-[90%] rounded-xl border border-darkGray px-6 pb-20 pt-8 md:w-[98%]">
      <h2 className="mb-8 text-2xl text-primary">{title}</h2>
      <p className="text-base text-darkGray">{description}</p>
    </div>
  );
};

export default BenefitsCards;
