import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowRightSLine } from "react-icons/ri";
import { Button } from "@/components/Button";
import { MarkerCircleIcon } from "@/components/Icons";
import { useDeviceType } from "@/hooks/useDeviceType";
import { useRouter } from "next/router";
import { memo } from "react";
import { UnitsCardProps } from "./types";

function UnitsCard(props: UnitsCardProps): JSX.Element {
  const router = useRouter();

  const deviceType = useDeviceType();

  const isMobile = deviceType === "mobile" || deviceType === "tablet";

  const {
    name,
    address,
    path,
    segmentation,
    actionButtonText,
    infoButtonText,
    isSmallCard,
    workingHours = [],
    entities: { physicianSpecialties } = { physicianSpecialties: [] },
  } = props;

  if (isMobile && isSmallCard) {
    return (
      <Link href={path}>
        <div className="border-1 relative flex min-h-24 w-full flex-col justify-between gap-2 rounded-xl border border-primary p-4">
          {segmentation?.isPartner && (
            <div className="max-w-40">
              <p className="flex items-center justify-center rounded-full bg-purpleDark px-3 py-1 text-center text-xs text-white">
                UNIDADE PARCEIRA
              </p>
            </div>
          )}

          <div className="mt-4 flex items-center gap-1">
            <FaLocationDot
              className="-ml-2 text-primary-foreground"
              size={30}
            />

            <h1 className="text-sm font-bold uppercase text-primary">{name}</h1>
          </div>

          <section className="flex flex-col text-sm text-zinc-600">
            <p>{`${address.street}, ${address.number} - $`}</p>

            <p>{`${address.city} - ${address.state}`}</p>
          </section>
        </div>
      </Link>
    );
  }

  return (
    <main className="mb-16 flex flex-col justify-between gap-8 pl-4 lg:mb-10">
      <section>
        {segmentation?.isPartner && (
          <p className="mb-8 flex h-8 w-36 items-center justify-center rounded-[5px] bg-purpleDark text-center text-xs text-white">
            UNIDADE PARCEIRA
          </p>
        )}

        <section className="flex items-center gap-1">
          <MarkerCircleIcon className="text-secondary" />

          <h1 className="text-2xl font-bold uppercase text-primary">{name}</h1>
        </section>

        <section className="mt-8 flex flex-col text-base text-zinc-600">
          <span>{`${address.street}, ${address.number}`}</span>

          <span>{address.complement}</span>

          <span className="font-bold">{`${address.city} - ${address.state}`}</span>
        </section>

        <div className="mt-8">
          {workingHours?.map((workingHour) => (
            <span key={workingHour.day}>
              {`${workingHour.day} ${workingHour.hour}`}
            </span>
          ))}
        </div>

        {(physicianSpecialties ?? []).length > 0 && (
          <section className="mt-8 text-primary">
            {physicianSpecialties?.map((specialty) => (
              <div
                key={specialty.basicInfo?.name || "specialty-default-key"}
                className="flex items-center"
              >
                <RiArrowRightSLine />
                <span>{specialty.basicInfo?.name}</span>
              </div>
            ))}
          </section>
        )}
      </section>

      <section className="flex flex-col gap-2 lg:flex-row">
        <Button className="w-full text-white lg:w-64">
          {actionButtonText}
        </Button>

        <Button
          className="font-bold"
          variant="outlined"
          onClick={() => router.push(path)}
        >
          {infoButtonText}
        </Button>
      </section>
    </main>
  );
}

export default memo(UnitsCard);
