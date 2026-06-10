"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import FormField from "@/components/reusable_components/FormField";
import { Button } from "@/components/ui/button";


import { createConfirmPasswordSchema } from "@/lib/validations/ConfirmPassword.schema";

export default function ConfirmPasswordPage() {
  const t = useTranslations("ConfirmPasswordPage");

  const schema = createConfirmPasswordSchema(t);

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full"
    >
     <div className="text-center mt-2 mb-10">
        <h1 className="text-xl md:text-3xl font-bold mb-4">{t("title")}</h1>
        <p className="text-sm md:text-md text-muted-foreground mt-2">
          {t("description")}
        </p>
      </div>

      <FormField
        id="password"
        label={t("Password")}
        placeholder={t("PasswordPlaceholder")}
        type="password"
        register={register("password")}
        error={errors.password?.message}
      />

      <FormField
        id="confirmPassword"
        label={t("ConfirmPassword")}
        placeholder={t("ConfirmPasswordPlaceholder")}
        type="password"
        register={register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />

      <div className="w-full flex justify-around gap-2 mt-15">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 rounded-lg bg-secondary text-md text-white hover:bg-secondary/90"
        >
          {t("submit")}
        </Button>

      </div>
    </form>
  );
}