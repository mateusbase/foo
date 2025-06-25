import { useRouter } from "next/router";
import clsx from "clsx";
import Link from "next/link";
import { NavLinkProps } from "./types";

export default function NavLink({ route }: NavLinkProps): JSX.Element {
  const router = useRouter();
  const isSelected = router.pathname === route.pathname;

  return (
    <Link
      color="success"
      href={route.pathname}
      className={clsx(
        "whitespace-nowrap font-lato font-medium leading-snug tracking-normal text-primary antialiased lg:text-sm xl:text-base",
        isSelected && "font-bold",
      )}
    >
      {route.label}
    </Link>
  );
}
