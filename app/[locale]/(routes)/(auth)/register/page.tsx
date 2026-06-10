"use client";

import { useTranslations } from "next-intl";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import FormField from "@/components/reusable_components/FormField";
import { Button } from "@/components/ui/button";

import { createRegisterSchema } from "@/lib/validations/register.schema";
import Link from "next/link";
//-----------------------
export default function RegisterPage() {
  const t = useTranslations("RegisterPage");

  const schema = createRegisterSchema(t);

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full"
    >
      <div className="text-center mt-2 mb-12">
        <h1 className="text-xl md:text-3xl font-bold mb-4">{t("title")}</h1>
        <p className="text-sm md:text-md text-muted-foreground mt-2">
          {t("description")}
        </p>
      </div>

      <FormField
        id="IdentityNumber"
        label={t("IdentityNumber")}
        placeholder={t("IdentityNumberPlaceholder")}
        register={register("IdentityNumber")}
        error={errors.IdentityNumber?.message}
      />

     <div className="w-full flex justify-around gap-2 mt-15">
  <Button
    type="submit"
    disabled={isSubmitting}
    className="w-[50%] h-12 rounded-lg bg-secondary text-md text-white transition-colors duration-300 hover:bg-secondary/90"
  >
    {t("submit")}
  </Button>

  <Link
    href="/login"
    className="w-[50%] h-12 flex justify-center items-center  ">
   <span className="w-full h-full text-sm md:text-md font-medium border border-secondary text-secondary hover:text-secondary/70 hover:border-secondary/70  flex items-center justify-center rounded-lg transition-colors duration-300">
     {t("back")}
    </span>
  </Link>
</div>
    </form>
  );
}
