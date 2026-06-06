"use client";

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

//--------------------------------------
const issueOptions = [
  { value: "technical", label: "مشكلة تقنية" },
  { value: "payment", label: "مشكلة دفع" },
  { value: "other", label: "أخرى" },
];

//--------------------------------------
const schema = z.object({
  name: z.string().min(3, "الاسم يجب أن يكون 3 أحرف على الأقل"),

  email: z
    .string()
    .min(1, "البريد الإلكتروني مطلوب")
    .email("البريد الإلكتروني غير صالح"),

  subject: z.string().min(3, "الموضوع مطلوب"),

  issueType: z.string().min(1, "اختر نوع المشكلة"),

  description: z.string().min(10, "الوصف يجب أن يكون 10 أحرف على الأقل"),
});

//--------------------------------------
type FormValues = z.infer<typeof schema>;

//--------------------------------------
export default function ContactFormView() {
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
          label="الاسم"
          type="text"
          placeholder="أدخل الاسم"
          register={register("name")}
          error={errors.name?.message}
        />

        <FormField
          id="email"
          label="البريد الإلكتروني"
          type="email"
          placeholder="أدخل البريد الإلكتروني"
          register={register("email")}
          error={errors.email?.message}
        />

        <FormField
          id="subject"
          label="الموضوع"
          type="text"
          placeholder="أدخل الموضوع"
          register={register("subject")}
          error={errors.subject?.message}
        />

        {/* نوع المشكلة */}
        <div>
          <div className="mb-2 flex items-start  flex-col md:flex-row gap-2">
            <label className=" block text-md md:text-lg font-medium">
              نوع المشكلة
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
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="اختر نوع المشكلة" />
                </SelectTrigger>

                <SelectContent>
                  {issueOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
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
        label="الرسالة"
        type="textarea"
        placeholder="أدخل الرسالة"
        register={register("description")}
        error={errors.description?.message}
      />

      <div className="flex justify-center">
        <Button
          type="submit"
          className="w-1/2 md:w-1/3 h-12 bg-secondary text-white text-lg"
        >
          إرسال
        </Button>
      </div>
    </form>
  );
}
