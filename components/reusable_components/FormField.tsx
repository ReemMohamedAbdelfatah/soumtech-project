import { UseFormRegisterReturn } from "react-hook-form";

import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";

interface FormFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: string;
}

export default function FormField({
  id,
  label,
  placeholder,
  type = "text",
  register,
  error,
}: FormFieldProps) {
  return (
    <Field orientation="vertical">
      <FieldLabel htmlFor={id}>{label}</FieldLabel>

      <FieldContent>
        {type === "textarea" ? (
          <textarea
            id={id}
            rows={5}
            placeholder={placeholder}
            {...register}
            aria-invalid={!!error}
            className="w-full rounded-md border bg-white px-3 py-2 text-black focus:outline-none"
          />
        ) : (
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            {...register}
            aria-invalid={!!error}
            className="w-full h-13 rounded-md border bg-white px-3 py-2 text-black focus:outline-none"
          />
        )}

        <FieldError
          errors={
            error
              ? [{ message: error }]
              : undefined
          }
        />
      </FieldContent>
    </Field>
  );
}