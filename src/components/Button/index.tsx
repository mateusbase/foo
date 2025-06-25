/* eslint-disable @typescript-eslint/no-explicit-any */
import { VariantProps, cva } from "class-variance-authority";
import {
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
  forwardRef,
  useMemo,
} from "react";
import Link from "next/link";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/styles/classes";

type ButtonColor = "primary" | "secondary" | "border" | "gray";

const buttonVariants = cva(
  [
    `relative inline-flex items-center justify-center gap-2 whitespace-nowrap`,
    "border",
    "transition-colors disabled:pointer-events-none disabled:cursor-default",
    "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  ].join(" "),
  {
    variants: {
      size: {
        fit: "text-base",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      format: {
        rectangle: "",
        square: "",
      },
      variant: {
        filled: "border-transparent font-semibold",
        outlined: "font-semibold",
        ghost: "border-transparent font-medium",
        link: "border-transparent font-medium underline-offset-4 hover:underline",
      },
    },

    defaultVariants: {
      size: "md",
      format: "rectangle",
      variant: "filled",
    },

    compoundVariants: [
      {
        format: ["square"],
        size: ["fit"],
        className: "p-0",
      },
      {
        format: ["square"],
        size: ["sm"],
        className: "p-1",
      },
      {
        format: ["square"],
        size: ["md"],
        className: "p-2",
      },
      {
        format: ["square"],
        size: ["lg"],
        className: "p-3",
      },
      {
        format: ["rectangle"],
        size: ["fit"],
        variant: ["filled", "outlined", "ghost"],
        className: "h-auto px-2",
      },
      {
        format: ["rectangle"],
        size: ["sm"],
        variant: ["filled", "outlined", "ghost"],
        className: "h-8 px-3",
      },
      {
        format: ["rectangle"],
        size: ["md"],
        variant: ["filled", "outlined", "ghost"],
        className: "h-[54px] px-4 py-2",
      },
      {
        format: ["rectangle"],
        size: ["lg"],
        variant: ["filled", "outlined", "ghost"],
        className: "h-12 px-8",
      },
    ],
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonHTMLProps = Pick<
  HTMLAttributes<HTMLButtonElement>,
  "onClick" | "title" | "id" | "className" | "draggable"
>;

type ButtonLinkProps =
  | {
      type?: never;
      linkTarget?: string;
      href: string;
    }
  | {
      type?: HTMLButtonElement["type"];
      linkTarget?: never;
      href?: never;
    };

export type ButtonProps = ButtonHTMLProps &
  ButtonVariantProps &
  ButtonLinkProps & {
    children: ReactNode;

    color?: ButtonColor;
    round?: boolean;

    loading?: boolean;
    loadingSize?: number;

    disabled?: boolean;
  };

type VariantColorConfig = {
  [Variant in NonNullable<ButtonVariantProps["variant"]>]: {
    [VarCor in ButtonColor]: string;
  };
};

const variantColorConfig: VariantColorConfig = {
  filled: {
    primary:
      "bg-primary text-white focus-visible:ring-primary hover:bg-primary-dark",
    secondary:
      "bg-secondary text-secondary-foreground focus-visible:ring-secondary hover:bg-secondary-dark",
    border:
      "bg-border text-white focus-visible:ring-primary hover:bg-border-dark",
    gray: "bg-hover text-muted-foreground focus-visible:ring-hover",
  },

  outlined: {
    primary:
      "border-primary text-primary focus-visible:ring-primary hover:border-gray hover:bg-primary/5",

    secondary:
      "border-secondary text-secondary focus-visible:ring-secondary hover:border-secondary hover:bg-secondary/5",

    border:
      "border-border text-muted-foreground focus-visible:ring-primary hover:bg-hover",

    gray: "border-hover text-muted-foreground focus-visible:ring-hover hover:bg-hover",
  },

  ghost: {
    primary: "focus-visible-transparent hover:bg-hover text-primary",
    secondary: "focus-visible-transparent hover:bg-hover text-secondary",
    border: "focus-visible-transparent hover:bg-hover text-border",
    gray: "focus-visible-transparent hover:bg-hover text-muted-foreground",
  },

  link: {
    primary: "text-primary focus-visible:ring-transparent",
    secondary: "text-secondary focus-visible:ring-transparent",
    border: "text-foreground focus-visible:ring-transparent",
    gray: "text-muted-foreground focus-visible:ring-transparent",
  },
};

function resolveColorClasses(
  color: ButtonColor,
  variant: NonNullable<ButtonVariantProps["variant"]>,
): string {
  return variantColorConfig[variant]?.[color] ?? "";
}

export const Button = forwardRef(
  (
    {
      children,
      className,
      size,
      color = "primary",
      format = "rectangle",
      variant = "filled",
      round = false,
      type = "button",
      loading = false,
      disabled = false,

      href,
      linkTarget,

      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const typeProperties = useMemo(
      () => (href ? { href, target: linkTarget } : { type }),
      [href, linkTarget, type],
    );

    const Component = useMemo(() => (href ? Link : "button"), [href]);

    return (
      <Component
        {...(props as any)}
        {...typeProperties}
        type={type}
        ref={ref as any}
        disabled={loading || disabled}
        className={cn(
          round ? "rounded-full" : "rounded-lg",
          disabled && "cursor-default disabled:opacity-50",
          resolveColorClasses(color, variant!),
          buttonVariants({ className, size, format, variant }),
        )}
      >
        <span
          className={cn("w-full transition-opacity", loading && "opacity-0")}
          style={{
            alignItems: "inherit",
            justifyContent: "inherit",
            gap: "inherit",
            display: "inherit",
          }}
        >
          {children}
        </span>

        {loading && <LoaderCircle className="absolute size-5 animate-spin" />}
      </Component>
    );
  },
);

Button.displayName = "Button";
