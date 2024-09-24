import { FaqHeaderProps } from "./types";

export const FaqHeader = ({ titleHeader }: FaqHeaderProps): JSX.Element => (
  <div className="mx-auto mb-8 w-full max-w-6xl text-center">
    <h1 className="text-[40px] font-thin text-primary">{titleHeader}</h1>
  </div>
);
