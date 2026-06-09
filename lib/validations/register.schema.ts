import { z } from "zod";

export const createRegisterSchema = (t: (key: string) => string) =>
  z.object({
    IdentityNumber: z
      .string()
      .regex(/^\d{10}$/, {
        message: t("IdentityNumberMin"),
      }),
  });

export type RegisterSchema = ReturnType<typeof createRegisterSchema>;