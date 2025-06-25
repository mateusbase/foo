import { GetPageByPathResult } from "@/types/page";
import Footer from "../Footer";
import Header from "../Header";
import { RenderTemplate } from "./templates";

type RenderPageProps = Omit<GetPageByPathResult, "meta">;

export function RenderPage({
  id,
  data,
  header,
  footer,
  type,
  breadcrumbs,
}: RenderPageProps): JSX.Element {
  return (
    <>
      {header && <Header data={header} />}

      <RenderTemplate
        type={type}
        id={id}
        data={data}
        breadcrumbs={breadcrumbs}
      />

      {footer && <Footer data={footer} />}
    </>
  );
}
