import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer/Footer";
import { getLocale } from "next-intl/server";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
