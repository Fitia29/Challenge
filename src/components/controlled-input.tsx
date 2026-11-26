import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { Field, FieldError } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "cn";

type ControlledInputProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  placeholder: string;
  children?: React.ReactNode;
  type?: "text-input" | "text-area";
  className?: string;
};

export default function ControlledInput<TFieldValues extends FieldValues>({
  control,
  name,
  placeholder,
  children,
  type = "text-input",
  className,
}: ControlledInputProps<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field className="flex flex-col gap-2">
          {type === "text-input" && (
            <InputGroup
              className={cn(
                "w-full rounded-[var(--radius)] p-[10px] h-[44px] bg-[#DDDFE633]/80 ",
              )}
            >
              <InputGroupInput
                {...field}
                placeholder={placeholder}
                className="text-paragraph!"
              />
              <InputGroupAddon>{children}</InputGroupAddon>
            </InputGroup>
          )}

          {type === "text-area" && (
            <Textarea
              {...field}
              placeholder={placeholder}
              className={cn(
                "w-full rounded-sm p-[30px] h-[178px] bg-[#DDDFE633]/80 border-[0.2px]",
              )}
            />
          )}

          {fieldState.error && (
            <FieldError className="text-destructive">
              {fieldState.error.message}
            </FieldError>
          )}
        </Field>
      )}
    />
  );
}
