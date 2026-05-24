import ThemeToggle from "@/features/theme/components/theme-toggle";
import { getTranslations } from "next-intl/server";

import TryPage from "./(routes)/try/page";
export default async function Home() {
  // const t = await getTranslations("Home");

  return (
    <div>
      <ThemeToggle />
      <TryPage />
      {/* <div>
        <nav className="flex justify-between mb-4">
          <p>left</p>
          <p>right</p>
        </nav>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
        <h3>{t("watermelon")}</h3>
        <h4 className="text-brand-950">Hello</h4> */}

      {/* </div> */}
    </div>
  );
}
