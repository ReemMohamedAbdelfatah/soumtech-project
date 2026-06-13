//(Abanob)
"use client";
import TextUnderLine from "@/components/reusable_components/TextUnderLine";
import ContactFormView from "@/features/contact/components/ContactFormView";
import FormLayout from "@/components/reusable_components/FormLayout";
//i18n
import { useTranslations } from "next-intl";
//-----------------------
export default function ContactPage() {
  const t = useTranslations("ContactPage");
  return (
    <div className="w-full h-full  px-3 md:px-20 py-3">
      <header className="mb-2 md:mb-5">
        <TextUnderLine
          text={t("title")}
          fontSize="text-2xl md:text-3xl font-bold"
        />
      </header>

      <FormLayout borderRadius={20} logoSize="w-[100px] md:w-[150px] pt-3">
        
          <ContactFormView />
       
      </FormLayout>
    </div>
  );
}
