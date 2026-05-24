import { getTranslations } from "next-intl/server";
export default async function LoginPage() {
  const t = await getTranslations("LoginPage");
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </div>
    </div>
  );
}
