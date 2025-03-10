import { FaqHeaderProps } from "./types";

export const FaqHeader = ({ titleHeader }: FaqHeaderProps): JSX.Element => (
  <div className="mx-auto mb-8 w-full max-w-6xl text-center">
    <h1 className="text-2xl font-light text-primary md:text-title-lg md:leading-10">
      {titleHeader}
    </h1>
  </div>
);
