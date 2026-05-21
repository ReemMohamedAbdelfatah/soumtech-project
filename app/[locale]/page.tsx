import ThemeToggle from "@/features/theme/components/theme-toggle";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Home");
  return (
    <div>
      <ThemeToggle />
      <div>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </div>
    </div>
  );
}
