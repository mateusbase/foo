import BaseButton from "@/components/Button";
import EmailInput from "@/components/EmailInput";
import BaseInput from "@/components/Input";
import PhoneInput from "@/components/PhoneInput";
import React from "react";

export default function SignupForm(): JSX.Element {
  return (
    <div className="flex h-auto flex-col justify-between bg-primary p-6 md:w-[328px] md:rounded-[20px] lg:w-[493px] lg:p-16">
      <h2 className="text-left text-title-lg text-white">Inscreva-se</h2>

      <div className="mt-10 flex grow flex-col justify-between">
        <div className="space-y-4">
          <p className="font-medium text-white">Nome completo</p>
          <BaseInput
            placeholder="Preencha seu nome"
            className="rounded-full bg-white"
            radius="full"
          />
          <p className="font-medium text-white">E-mail</p>

          <EmailInput className="rounded-full bg-white" />
          <p className="font-medium text-white">Telefone</p>

          <PhoneInput className="rounded-full bg-white" />

          <p className="font-medium text-white">CRM</p>

          <BaseInput
            placeholder="Preencha seu CRM"
            className="rounded-full bg-white"
            radius="full"
          />
        </div>

        <BaseButton
          color="primary"
          size="lg"
          variant="solid"
          width="100%"
          className="mt-6 w-full border border-white text-lg text-white"
        >
          Confirmar
        </BaseButton>

        <div className="mt-16 flex items-start space-x-3">
          <input
            type="checkbox"
            id="terms"
            className="after:mask-checkbox after:mask-size-contain relative size-7 shrink-0 appearance-none rounded border-2 border-white bg-transparent after:absolute after:left-1/2 after:top-1/2 after:hidden after:size-4 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-white after:content-[''] checked:bg-transparent checked:after:block focus:ring-0 focus:ring-offset-0"
          />
          <label
            htmlFor="terms"
            className="-mt-1 text-left text-[14px] leading-[18px] text-white"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            pellentesque nunc lectus, vitae lacinia ex hendrerit in. Fusce id ex
            id sem ullamcorper. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </label>
        </div>
      </div>
    </div>
  );
}
