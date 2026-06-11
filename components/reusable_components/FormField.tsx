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
  
    <FieldLabel
      htmlFor={id}
      className="text-md md:text-md font-medium mb-2"
    >
      {label}
    </FieldLabel>

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
   {error && (
      <span className="text-xs font-semibold text-red-600">
       {" * "}
       {error}
       {" * "} 
      </span>
    )}
</div>
  );
}