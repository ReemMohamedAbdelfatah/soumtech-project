import { z } from "zod";

export const createLoginSchema = (t: (key: string) => string) =>
  z.object({
    identifier: z.string().refine(
      (value) =>
        /^[0-9]{11}$/.test(value) ||
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      {
        message: t("invalidIdentifier"),
      }
    ),

    password: z.string().min(6, {
      message: t("passwordMin"),
    }),
  });

export type LoginSchema = ReturnType<typeof createLoginSchema>;
  //validation schema for login form