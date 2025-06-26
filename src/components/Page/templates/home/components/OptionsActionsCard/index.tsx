import Image from "next/image";
import Link from "next/link";

interface ActionItem {
  text: string;
  icon: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  link?: {
    url?: string;
    path?: string;
    external?: boolean;
  };
}

interface OptionsActionsCardProps {
  data: ActionItem[];
  rounded?: string;
}

export default function OptionsActionsCard({
  data,
  rounded = "",
}: OptionsActionsCardProps): JSX.Element {
  const mappedData = data?.map((item, index) => ({
    ...item,
    id: index + 1,
    href: item.link?.url || item.link?.path || "#",
  }));

  return (
    <div className="grid w-full grid-cols-2 gap-4 pb-4 pt-8 text-white md:grid-cols-4 lg:hidden">
      {mappedData?.map((option) => (
        <div
          key={option.id}
          className={`flex min-h-24 items-start px-4 py-3 ${rounded} ${
            option.id === 1 ? "bg-secondary" : "bg-primary"
          }`}
        >
          <Link
            href={option.href}
            target={option.link?.external ? "_blank" : "_self"}
            rel={option.link?.external ? "noopener noreferrer" : undefined}
          >
            <button type="button" className="flex flex-col items-start">
              <Image
                src={option.icon.url}
                alt={option.icon.alt}
                width={option.icon.width}
                height={option.icon.height}
              />

              <span className="mt-2 text-start text-sm">{option.text}</span>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
