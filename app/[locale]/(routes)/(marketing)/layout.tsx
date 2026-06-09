import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer/Footer";
import { getLocale } from "next-intl/server";

export default async function layout({ children }: { children: React.ReactNode }) {
     const locale = await getLocale();
  return (
    <>
      <Navbar locale={locale} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
