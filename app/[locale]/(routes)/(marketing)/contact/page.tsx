//(Abanob) 
"use client";
import TextUnderLine from "@/components/Layout/Footer/TextUnderLine";
import ContactFormView from "@/features/contact/components/ContactFormView";
import FormLayout from "@/components/reusable_components/FormLayout";
//-----------------------
export default function ContactPage() {
  return (
    <div className="w-full h-full  px-3 md:px-15 py-3">
      <header className="mb-2 md:mb-5">
    <TextUnderLine text="تواصل معنا" fontSize="text-2xl md:text-3xl font-semibold"/>
      </header>
    <FormLayout borderRadius={20}>
      <ContactFormView />
    </FormLayout>
    </div>
  );
}
