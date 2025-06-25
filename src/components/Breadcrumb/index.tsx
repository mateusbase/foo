import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import BreadcrumbBackIcon from "../Icons/BreadcrumbBackIcon";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbProps {
  breadcrumbs?: BreadcrumbItem[];
}

const Breadcrumb = ({ breadcrumbs = [] }: BreadcrumbProps): JSX.Element => {
  const router = useRouter();

  return (
    <div className="z-10 max-w-full items-start justify-between break-words text-sm lg:flex">
      <div className="flex items-center justify-between text-left md:justify-start">
        <div className="mr-8 hidden items-center justify-center md:flex lg:hidden">
          <button
            type="button"
            aria-label="Voltar no breadcrumb"
            onClick={() => router.back()}
            className="flex items-center justify-center"
          >
            <BreadcrumbBackIcon />
          </button>
        </div>

        <div>
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <span className="text-darkGray" key={breadcrumb.path}>
                <Link href={breadcrumb.path}>
                  <span
                    className={clsx("cursor-pointer", {
                      "font-bold text-primary": isLast,
                      "text-darkGray hover:text-primary": !isLast,
                    })}
                  >
                    {breadcrumb.name}
                  </span>
                </Link>

                {!isLast && " > "}
              </span>
            );
          })}
        </div>

        <div className="flex items-center md:hidden">
          <button
            type="button"
            aria-label="Botão de voltar"
            onClick={() => router.back()}
          >
            <BreadcrumbBackIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
