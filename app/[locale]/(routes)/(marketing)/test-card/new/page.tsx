// app/sandbox/page.tsx (أو مسار صفحتك الحالي)
import PropertyDetailsCard2 from "@/app/[locale]/(routes)/(marketing)/PropertyDetailsCard2";

export default function SandboxPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <PropertyDetailsCard2 />
    </div>
  );
}