"use client";

import { useTranslations } from "next-intl";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import FormField from "@/components/reusable_components/FormField";
import { Button } from "@/components/ui/button";

import { createLoginSchema } from "@/lib/validations/login.schema";
import Link from "next/link";
//-----------------------
export default function LoginPage() {
  const t = useTranslations("LoginPage");

  const schema = createLoginSchema(t);

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
      <div className="text-center mt-2 mb-15">
        <h1 className="text-xl md:text-3xl font-bold">{t("title")}</h1>
      </div>

      <FormField
        id="identifier"
        label={t("identifier")}
        placeholder={t("identifierPlaceholder")}
        register={register("identifier")}
        error={errors.identifier?.message}
      />

      <FormField
        id="password"
        label={t("password")}
        type="password"
        placeholder={t("passwordPlaceholder")}
        register={register("password")}
        error={errors.password?.message}
      />
      <Link href="/forgot-password">
        <p className="text-sm text-blue-600 hover:underline">
          {t("forgotPassword")}
        </p>
      </Link>
     <div className="w-full flex justify-around gap-2 mt-7">
  <Button
    type="submit"
    disabled={isSubmitting}
    className="w-[50%] h-12 rounded-lg bg-secondary text-md text-white transition-colors duration-300 hover:bg-secondary/90"
  >
    {t("submit")}
  </Button>

  <Link
    href="/register"
    className="w-[50%] h-12 flex justify-center items-center  ">
   <span className="w-full h-full text-sm md:text-md font-medium border border-secondary text-secondary hover:text-secondary/70 hover:border-secondary/70  flex items-center justify-center rounded-lg transition-colors duration-300">
     {t("register")}
    </span>
  </Link>
</div>
    </form>
  );
}
