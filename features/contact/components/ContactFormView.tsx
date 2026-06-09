"use client";

// i18n
import { useTranslations } from "next-intl";

// libs
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// components
import { Button } from "@/components/ui/button";
import FormField from "@/components/reusable_components/FormField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// schema
import { createContactSchema } from "@/lib/validations/contact.schema";

//--------------------------------------
export default function ContactFormView() {
  const t = useTranslations("ContactPage");

  const schema = createContactSchema(t);

  type FormValues = z.infer<typeof schema>;

  const issueOptions = [
    { value: "technical", label: t("technical") },
    { value: "payment", label: t("payment") },
    { value: "other", label: t("other") },
  ];

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      issueType: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full md:w-xl lg:w-3xl xl:w-4xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
        
        <FormField
          id="name"
          label={t("name")}
          type="text"
          placeholder={t("namePlaceholder")}
          register={register("name")}
          error={errors.name?.message}
        />

        <FormField
          id="email"
          label={t("email")}
          type="email"
          placeholder={t("emailPlaceholder")}
          register={register("email")}
          error={errors.email?.message}
        />

        <FormField
          id="subject"
          label={t("subject")}
          type="text"
          placeholder={t("subjectPlaceholder")}
          register={register("subject")}
          error={errors.subject?.message}
        />

        <div>
          <div className="mb-2 flex items-start flex-col md:flex-row gap-2">
            <label className="block text-md md:text-lg font-medium">
              {t("issueType")}
            </label>

            {errors.issueType && (
              <span className="text-xs font-semibold text-red-600">
                {" * "}
                {errors.issueType.message}
                {" * "}
              </span>
            )}
          </div>

          <Controller
            name="issueType"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={t("issueTypePlaceholder")}
                  />
                </SelectTrigger>

                <SelectContent>
                  {issueOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>

      <FormField
        id="description"
        label={t("description")}
        type="textarea"
        placeholder={t("descriptionPlaceholder")}
        register={register("description")}
        error={errors.description?.message}
      />

      <div className="flex justify-center">
        <Button
          type="submit"
          className="w-1/2 md:w-1/3 h-12 bg-secondary text-white text-lg"
        >
          {t("submit")}
        </Button>
      </div>
    </form>
  );
}