import React from "react";
import LoginForm from "../../../../../features/auth/components/LoginForm";
import { getTranslations } from "next-intl/server";
export default async function LoginPage() {
  const t = await getTranslations("LoginPage");
  return (
    <div>
      <div>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </div>
    </div>
  );
}
