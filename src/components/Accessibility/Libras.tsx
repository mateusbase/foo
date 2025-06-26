import VLibras from "vlibras-nextjs";

export function Libras(): JSX.Element | null {
  return process.env.NODE_ENV === "production" ? <VLibras forceOnload /> : null;
}
