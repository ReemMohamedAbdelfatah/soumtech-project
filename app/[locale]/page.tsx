import ThemeToggle from "@/features/theme/components/theme-toggle";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Home");

  return (
    <div>
      <ThemeToggle />
      <div>
        <nav className="flex justify-between mb-4">
          <p>left</p>
          <p>right</p>
        </nav>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
        <h3>{t("watermelon")}</h3>
      </div>
    </div>
  );
}
