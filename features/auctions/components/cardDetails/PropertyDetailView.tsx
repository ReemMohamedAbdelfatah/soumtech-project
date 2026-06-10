import { useTranslations } from 'next-intl';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export interface PropertyDetailsProps {
  propertyType?: string;
  city?: string;
  neighborhood?: string;
  northNeighbor?: string;
  southNeighbor?: string;
  eastNeighbor?: string;
  westNeighbor?: string;
  streetName?: string;
  deedNumber?: string;
}

interface DetailRowProps {
  label: string;
  value?: string;
}

function DetailRow({ label, value }: DetailRowProps) {
  if (!value) return null;
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center py-2 text-[#000000] gap-1 sm:gap-4">
      <span className="text-[16px] font-medium sm:py-[12px] shrink-0">
        {label}
      </span>
      <div className="bg-[#EAECF0] min-h-[48px] w-full sm:w-3/4 px-[12px] py-[10px] rounded-[8px] flex items-center">
        <span className="text-[14px] font-regular break-words">
          {value}
        </span>
      </div>
    </div>
  );
}

export default function PropertyDetails({
  propertyType,
  city,
  neighborhood,
  northNeighbor,
  southNeighbor,
  eastNeighbor,
  westNeighbor,
  streetName,
  deedNumber,
}: PropertyDetailsProps) {
  const t = useTranslations('propertyDetails');

  const rows = [
    { key: 'propertyType', value: propertyType },
    { key: 'city', value: city },
    { key: 'neighborhood', value: neighborhood },
    { key: 'northNeighbor', value: northNeighbor },
    { key: 'southNeighbor', value: southNeighbor },
    { key: 'eastNeighbor', value: eastNeighbor },
    { key: 'westNeighbor', value: westNeighbor },
    { key: 'streetName', value: streetName },
    { key: 'deedNumber', value: deedNumber },
  ] as const;

  const hasAnyField = rows.some((r) => r.value);
  if (!hasAnyField) return null;

  return (
    <Card className="w-full mt-4 rounded-[15px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border-gray-100 overflow-hidden gap-2">
      <CardHeader>
        <CardTitle className="text-[18px] text-[#000000] font-Medium">
          {t('title')}
          <div className="bg-[#DC5224] h-[3px] rounded-full w-[30px]"></div>
        </CardTitle>
      </CardHeader>

      {/*Replaced with description from API */}

      <p className="px-2 text-[14px] text-[#000000] font-regular">
        فيلا فاخرة في حي الزهور، الرياض. تصميم عصري ومرافق متطورة. حديقة خلابة ومسبح خاص. مؤجرة بقيمة 40 ألف ريال سنويًا، وانتهاء عقد الإيجار في تاريخ 14 نوفمبر 2023م. فرصة للاستثمار في فيلا فاخرة وتحقيق عائد استثماري. احجز الآن قبل انتهاء العقد.
      </p>

      <CardContent className="px-5 pb-4">
        {rows.map(({ key, value }) => (
          <DetailRow key={key} label={t(key)} value={value} />
        ))}
      </CardContent>
    </Card>
  );
}
