"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { cn } from "@/styles/classes";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    label?: string;
    labelClassname?: string;
    orientation?: "vertical" | "horizontal";
  }
>(
  (
    { className, label, labelClassname, orientation = "vertical", ...props },
    ref,
  ) => {
    return (
      <div className={cn("flex flex-col gap-1")}>
        {label && (
          <label className={cn("text-lightGray", labelClassname)}>
            {label}
          </label>
        )}

        <RadioGroupPrimitive.Root
          className={cn(
            "flex gap-4",
            orientation === "vertical" && "flex-col",
            className,
          )}
          {...props}
          ref={ref}
        />
      </div>
    );
  },
);

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "focus-visible:ring-ring aspect-square size-5 rounded-full border border-darkGray ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:text-primary",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="size-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
