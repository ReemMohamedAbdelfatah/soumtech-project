import { z } from "zod";

export const createForgotPasswordSchema = (t: (key: string) => string) =>
  z.object({
    identifier: z.string().refine(
      (value) =>
        /^[0-9]{11}$/.test(value) ||
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      {
        message: t("invalidIdentifier"),
      }
    ),
  });

export type ForgotPasswordSchema = ReturnType<typeof createForgotPasswordSchema>;
  //validation schema for forgot password form