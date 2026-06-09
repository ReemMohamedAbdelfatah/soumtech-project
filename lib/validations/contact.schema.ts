import { z } from "zod";

export const createContactSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(3, {
      message: t("nameMin"),
    }),

    email: z
      .string()
      .min(1, {
        message: t("emailRequired"),
      })
      .email({
        message: t("emailInvalid"),
      }),

    subject: z.string().min(3, {
      message: t("subjectRequired"),
    }),

    issueType: z.string().min(1, {
      message: t("issueTypeRequired"),
    }),

    description: z.string().min(10, {
      message: t("descriptionMin"),
    }),
  });