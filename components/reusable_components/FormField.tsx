// Input + label reusable wrapper (Abanob)

import { UseFormRegisterReturn } from "react-hook-form";
import { FieldLabel } from "../ui/field";

//-----------------------------------
interface FormFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: string;
}
//-----------------------------------
export default function FormField({
  id,
  label,
  placeholder,
  type = "text",
  register,
  error,
}: FormFieldProps) {
  return (
    <div>
  <div className="mb-2 flex items-start  flex-col md:flex-row gap-2">
    <FieldLabel
      htmlFor={id}
      className="text-md md:text-lg font-medium"
    >
      {label}
    </FieldLabel>

    {error && (
      <span className="text-xs font-semibold text-red-600">
       {" * "}
       {error}
       {" * "} 
      </span>
    )}
  </div>

  {type === "textarea" ? (
    <textarea
      id={id}
      rows={5}
      placeholder={placeholder}
      {...register}
      className="w-full rounded-md border bg-white text-black focus:outline-none px-3 py-2"
    />
  ) : (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      {...register}
      className="w-full rounded-md border bg-white text-black focus:outline-none px-3 py-2"
    />
  )}
</div>
  );
}