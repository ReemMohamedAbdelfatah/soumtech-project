import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/card";

export interface PropertyAttribute {
  label: string;
  value: string;
}

export interface DetailsTableProps {
  description: string;
  attributes: PropertyAttribute[];
}

export default async function DetailsTable({
  description,
  attributes,
}: DetailsTableProps) {
  const t = await getTranslations("propertyDetails");

  return (
    <Card className="gap-3 px-4">
      <h3 className="inline-block self-start border-b-2 border-secondary pb-1 text-sm font-bold text-foreground">
        {t("title")}
      </h3>

      {/* Figma: description 16px / 400 (#000) */}
      <p className="text-base leading-loose text-foreground">{description}</p>

      <dl className="grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
        {attributes.map((a, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-3 rounded-md bg-muted/40 px-4 py-3"
          >
            <dt className="text-sm text-muted-foreground">{a.label}</dt>
            <dd className="text-sm font-medium text-foreground">{a.value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
