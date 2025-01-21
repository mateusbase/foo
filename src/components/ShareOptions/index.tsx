import Link from "next/link";
import { ShareOptionsProps } from "./types";

export default function ShareOptions({
  options,
}: ShareOptionsProps): JSX.Element {
  return (
    <div>
      <h3 className="mb-4 text-center text-xl text-primary md:text-left lg:mt-3">
        Compartilhar
      </h3>

      <div className="flex flex-col items-center md:items-start">
        <div className="flex flex-row gap-6">
          {options.map((socialNetwork) => (
            <Link key={socialNetwork.id} href={socialNetwork.url}>
              <div
                key={socialNetwork.name}
                className="flex cursor-pointer flex-col items-center"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-gray-50 text-primary">
                  {socialNetwork.icon}
                </div>
                <span className="mt-2 text-xs font-bold text-darkGray">
                  {socialNetwork.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
