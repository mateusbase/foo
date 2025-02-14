import BaseButton from "@/components/Button";
import Image from "next/image";

const ContactBanner = (): JSX.Element => {
  return (
    <div className="full-bleed mb-28 lg:mt-12 lg:flex lg:flex-row lg:items-stretch">
      <div className="lg:w-[55%] lg:shrink-0 lg:overflow-hidden">
        <div className="size-full lg:h-full">
          <Image
            src="/assets/images/ocMulher/oc_mulher_banner_2.png"
            alt="OC Mulher"
            width={1920}
            height={1080}
            className="size-full object-cover lg:rounded-bl-[100px]"
            style={{ objectPosition: "center" }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-12 bg-custom-gradient-light px-10 pb-40 pt-12 font-lato-regular text-white md:pb-[99px] md:pl-[138px] md:pr-[140px] md:pt-[90px] lg:h-auto lg:w-[45%] lg:shrink-0 lg:gap-6 lg:pb-[111px] lg:pl-11 lg:pr-10 lg:pt-[118px]">
        <h1 className="text-center text-4xl md:text-5xl lg:text-start">
          Ficou interessada em saber mais sobre o OC Mulher?
        </h1>
        <p className="text-center text-xl md:text-2xl lg:text-start">
          Entre em contato para tirar dúvidas e entender como médicos e
          pacientes acessam o programa com nossos especialistas na prevenção e
          tratamento de tumores femininos.
        </p>
        <BaseButton className="mx-auto border border-white bg-transparent text-white md:w-3/5 lg:ml-0">
          <span className="text-lg">Conversar pelo WhatsApp</span>
        </BaseButton>
      </div>
    </div>
  );
};
export default ContactBanner;
