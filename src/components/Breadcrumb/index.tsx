/* eslint-disable prettier/prettier */
import { useRouter } from "next/router";
import Link from "next/link";
import { useMemo } from "react";

const Breadcrumb = (): JSX.Element => {
  const router = useRouter();
  const { asPath } = router;

  const capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const breadcrumbs = useMemo(() => {
    const breadcrumbMap: { [key: string]: string } = {
      servico: "Serviços",
      diagnostico: "Diagnósticos",
      tratamento: "Tratamentos",
      "análise-patológica": "Análise Patológica",
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

    return [{ breadcrumbNameReplaced: "Home", breadcrumbUrl: "/" }, ...mappedSegments];
  }, [asPath]);

  return (
    <div className="z-10 max-w-full items-start justify-between break-words text-sm lg:flex">
      <div className="text-left">
        {breadcrumbs.map((breadcrumb, index) => (
          <span className="text-darkGray" key={breadcrumb.breadcrumbUrl}>
            <Link href={breadcrumb.breadcrumbUrl}>
              <span
                className={`cursor-pointer ${asPath === breadcrumb.breadcrumbUrl
                  ? "font-bold text-primary-foreground"
                  : "text-darkGray hover:text-primary-foreground"
                  }`}
              >
                {breadcrumb.breadcrumbNameReplaced}
              </span>
            </Link>
            {index < breadcrumbs.length - 1 && " > "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
