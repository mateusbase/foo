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
      const decodedSegment = decodeURIComponent(segment);
      const breadcrumbName = capitalizeFirstLetter(
        breadcrumbMap[decodedSegment] || decodedSegment,
      );

      const breadcrumbUrl = `/${pathSegments.slice(0, index + 1).join("/")}`;

      return { breadcrumbName, breadcrumbUrl };
    });

    return [{ breadcrumbName: "Home", breadcrumbUrl: "/" }, ...mappedSegments];
  }, [asPath]);

  return (
    <div className="font-mono z-10 items-start justify-between text-sm lg:flex">
      <h1 className="text-left">
        {breadcrumbs.map((breadcrumb, index) => (
          <span key={breadcrumb.breadcrumbUrl}>
            <Link href={breadcrumb.breadcrumbUrl}>
              <span
                className={`cursor-pointer ${asPath === breadcrumb.breadcrumbUrl
                  ? "text-[#00B6AD] font-bold"
                  : "text-black hover:text-[#00B6AD]"
                  }`}
              >
                {breadcrumb.breadcrumbName}
              </span>
            </Link>
            {index < breadcrumbs.length - 1 && " > "}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Breadcrumb;
