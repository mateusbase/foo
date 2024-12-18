import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import BreadcrumbBackIcon from "../Icons/BreadcrumbBackIcon";

const Breadcrumb = (): JSX.Element => {
  const router = useRouter();
  const { asPath } = router;

  const capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const breadcrumbs = useMemo(() => {
    const breadcrumbMap: { [key: string]: string } = {
      servicos: "Serviços, diagnósticos e tratamentos",
      diagnostico: "Diagnósticos",
      tratamento: "Tratamentos",
      "analise-patologica": "Análise Patológica",
      laserterapia: "Laserterapia",
    };

    const pathSegments = asPath.split("/").filter((segment) => segment);

    const mappedSegments = pathSegments.map((segment, index) => {
      const cleanSegment = segment.split("?")[0];
      const decodedSegment = decodeURIComponent(cleanSegment);

      const breadcrumbName = capitalizeFirstLetter(
        breadcrumbMap[decodedSegment] || decodedSegment,
      );

      const breadcrumbNameReplaced = breadcrumbName.replaceAll("-", " ");

      const breadcrumbUrl = `/${pathSegments.slice(0, index + 1).join("/")}`;

      return { breadcrumbNameReplaced, breadcrumbUrl };
    });

    return [
      { breadcrumbNameReplaced: "Home", breadcrumbUrl: "/" },
      ...mappedSegments,
    ];
  }, [asPath]);

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
          {breadcrumbs.map((breadcrumb, index) => (
            <span className="text-darkGray" key={breadcrumb.breadcrumbUrl}>
              <Link href={breadcrumb.breadcrumbUrl}>
                <span
                  className={clsx("cursor-pointer", {
                    "font-bold text-primary-foreground":
                      asPath === breadcrumb.breadcrumbUrl,
                    "text-darkGray hover:text-primary-foreground":
                      asPath !== breadcrumb.breadcrumbUrl,
                  })}
                >
                  {breadcrumb.breadcrumbNameReplaced}
                </span>
              </Link>
              {index < breadcrumbs.length - 1 && " > "}
            </span>
          ))}
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
