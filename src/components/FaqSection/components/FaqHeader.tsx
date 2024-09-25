import { FaqHeaderProps } from "./types";

export const FaqHeader = ({ titleHeader }: FaqHeaderProps): JSX.Element => (
  <div className="mx-auto mb-8 w-full max-w-6xl text-center">
    <h1 className="text-2xl font-thin text-primary md:text-[40px]">
      {titleHeader}
    </h1>
  </div>
);
