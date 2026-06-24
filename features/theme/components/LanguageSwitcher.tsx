'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = () => {
    const nextLocale = locale === 'ar' ? 'en' : 'ar';

    router.replace(pathname, {
      locale: nextLocale,
    });
  };

  return (
    <button
      type="button"
      onClick={handleLanguageChange}
      className="px-2 py-1 rounded-md border cursor-pointer hover:bg-primary/70 text-white"
    >
      {locale === 'ar' ? 'English' : 'العربية'}
    </button>
  );
}