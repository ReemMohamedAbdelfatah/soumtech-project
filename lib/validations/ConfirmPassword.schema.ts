import { z } from "zod";

export const createConfirmPasswordSchema = (
  t: (key: string) => string
) =>
  z
    .object({
      password: z
        .string()
        .min(8, {
          message: t("PasswordMin"),
        }),

      confirmPassword: z
        .string()
        .min(1, {
          message: t("ConfirmPasswordRequired"),
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("PasswordsNotMatch"),
      path: ["confirmPassword"],
    });

export type ConfirmPasswordSchema = ReturnType<
  typeof createConfirmPasswordSchema
>;