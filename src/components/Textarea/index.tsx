import { cn } from "@/styles/classes";
import { forwardRef, useId } from "react";
import TextareaAutosize from "react-textarea-autosize";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  disableAutosize?: boolean;
  minRows?: number;
  maxRows?: number;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      disableAutosize = false,
      minRows = 3,
      maxRows = 8,
      id,
      className,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const textareaId = id || generatedId;

    return (
      <div className="flex flex-col rounded-xl border border-gray-300 bg-white p-2 focus-within:outline focus-within:outline-1 focus-within:outline-darkGray hover:outline hover:outline-1 hover:outline-darkGray">
        {label && (
          <label
            htmlFor={textareaId}
            className="px-3 py-0.5 text-sm font-medium text-darkGray"
          >
            {label}
          </label>
        )}
        {disableAutosize ? (
          <textarea
            id={textareaId}
            ref={ref}
            {...props}
            className={cn(
              "min-h-[100px] resize-none rounded-md px-3 py-2 outline-0",
              className,
            )}
          />
        ) : (
          <TextareaAutosize
            id={textareaId}
            ref={ref}
            minRows={minRows}
            maxRows={maxRows}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...(props as any)}
            className={cn(
              "resize-none rounded-md px-3 py-2 outline-0",
              className,
            )}
          />
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
