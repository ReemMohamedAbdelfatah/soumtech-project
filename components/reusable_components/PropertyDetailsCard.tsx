// components/reusable_components/PropertyDetailsCard.tsx
"use client";

import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, FileSpreadsheet, MapPin, Phone, Mail } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Bidder {
  name: string;
  amount: string;
  time: string;
}

interface RegisteredUser {
  name: string;
  idNumber: string;
  phone: string;
  hasBalance: string;
}

interface SpecItem {
  label: string;
  value: string;
}

const highestBidders: Bidder[] = [
  { name: "عبدالله محمد حسن", amount: "34,239.20 ر.س", time: "منذ 12 يوماً" },
  { name: "عبدالله محمد حسن", amount: "34,239.20 ر.س", time: "منذ 9 أيام" },
  { name: "عبدالله محمد حسن", amount: "34,239.20 ر.س", time: "منذ 9 أيام" },
];

const registeredUsers: RegisteredUser[] = Array(10).fill({
  name: "omar abdulrhman",
  idNumber: "1030764169",
  phone: "+966303245323",
  hasBalance: "نعم",
});

const propertySpecs: SpecItem[] = [
  { label: "نوع العقار", value: "فيلا سكنية جديدة" },
  { label: "نوع الصفقة", value: "للبيع" },
  { label: "المدينة", value: "الرياض" },
  { label: "الحي", value: "حي النسيم الغربي" },
  { label: "شمالاً", value: "فيلا رقم 8 بطول 320 م" },
  { label: "جنوباً", value: "فيلا رقم 8 بطول 320 م" },
  { label: "شرقاً", value: "رصيف حديقة بطول 320 م" },
  { label: "غرباً", value: "فيلا رقم 2 بطول 653 م" },
  { label: "مساحة العقار", value: "3420 متر مربع" },
  { label: "رقم الصك", value: "320 443 563" },
  { label: "هل يوجد جراج", value: "لا يوجد" },
  { label: "هل يوجد مكيف", value: "لا يوجد" },
  { label: "عدد دورات المياه", value: "فيلا رقم 8 بطول 320 م" },
  { label: "اسم الشارع", value: "شارع الاخلاص" },
];

export default function PropertyDetailsCard() {
  
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);
  };

  return (
    <div dir="rtl" className="w-full bg-slate-50/30 font-sans text-right select-none flex flex-col min-h-screen">
      
      {/* محتوى الصفحة الرئيسي */}
  <header className="force-top z-[9999] w-full bg-[#1e1b4b] text-white py-4 px-6 shadow-md">
  <div className="mx-auto flex max-w-7xl items-center justify-between">
    <div className="text-xl font-black tracking-tighter">سومتك</div>
    
    <nav className="flex gap-8 text-sm font-bold">
      <a href="#" className="transition hover:text-amber-400">الرئيسية</a>
      <a href="#" className="border-b-2 border-amber-400 pb-1 transition hover:text-amber-400">المزادات</a>
      <a href="#" className="transition hover:text-amber-400">تواصل معنا</a>
    </nav>

    <div className="flex cursor-pointer items-center gap-2 transition hover:text-amber-400">
      <span className="text-sm font-bold">تسجيل الدخول</span>
    </div>
  </div>
</header>
      <div className="w-full max-w-7xl mx-auto p-4 lg:p-6 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* =========================================================================
              الجانب الأيمن: كارت العقار والصورة والتفاصيل المالية (6 أعمدة)
              ========================================================================= */}
          <div className="lg:col-span-6 order-1 lg:sticky lg:top-6 w-full flex flex-col gap-4">
            
            <div className="px-1 flex flex-col gap-1">
              <div className="flex items-center gap-1.5 justify-between">
                <div className="flex items-baseline gap-1">
                  <h1 className="text-xl font-bold text-slate-900">فيلا حي الروضة</h1>
                  <span className="text-xs text-slate-400 font-medium">( الرياض )</span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 border-b border-slate-100 pb-2">
                <span className="text-xs text-slate-800 font-bold border-b-2 border-[#e45a2b] pb-2 cursor-pointer">
                  معرض الصور
                </span>
              </div>
            </div>

            <Card className="w-full rounded-2xl overflow-hidden shadow-xs border border-slate-100 bg-white p-4 flex flex-col gap-4">
              
              <div className="relative h-72 w-full rounded-xl overflow-hidden group">
                <img 
                  src="/soum9.jpeg" 
                  alt="فيلا حي الروضة"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2 py-1 rounded-md shadow-xs max-w-[70px]">
                  <img src="/soum5.jpeg" alt="infath" className="w-full h-auto object-contain" />
                </div>

                <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-xs text-slate-700 text-xs font-bold transition">‹</button>
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-xs text-slate-700 text-xs font-bold transition">›</button>
                
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  {Array(6).fill(0).map((_, i) => <span key={i} className="w-1.5 h-1.5 rounded-full bg-white/40"></span>)}
                </div>
              </div>

              {/* زر المزاد المنتهي */}
              <div>
                <Button className="w-full h-16 bg-[#e45a2b] hover:bg-[#d34e22] text-white text-center justify-center rounded-xl font-bold text-base border-none pointer-events-none shadow-xs tracking-wide">
                  مزاد منتهي
                </Button>
              </div>

              {/* التوزيع المالي */}
              <div className="grid grid-cols-12 gap-2 items-center py-1">
                <div className="col-span-5 flex flex-col items-start justify-center border-l border-slate-100 pl-4 h-full">
                  <span className="text-slate-800 font-bold text-xs mb-1">سعر السوم الحالي</span>
                  <span className="text-[#e7ab21] font-black text-xl tracking-tight flex items-baseline gap-1 tabular-nums">
                    {formatNumber(4623240.00)} <span className="text-[10px] font-bold text-[#e7ab21]">ر.س</span>
                  </span>
                </div>

                <div className="col-span-7 grid grid-cols-12 gap-1 items-center pr-4">
                  <div className="col-span-6 flex flex-col gap-2.5 text-slate-400 font-medium text-right">
                    <span>سعر المتر</span>
                    <span>الاجمالي</span>
                    <span>ضريبة السعي</span>
                    <span>السعي</span>
                  </div>
                  <div className="col-span-6 flex flex-col gap-2.5 text-slate-800 font-bold text-left tabular-nums">
                    <span>200 ريال</span>
                    <span>2049 ريال</span>
                    <span>75.5 ريال</span>
                    <span>2.5 ريال</span>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="grid grid-cols-3 bg-slate-50/80 rounded-xl border border-slate-100/60 py-2.5 text-center">
                  <div className="flex flex-col justify-center px-1">
                    <span className="text-[10px] text-slate-400 font-medium">عربون الدخول</span>
                    <span className="text-slate-800 font-bold text-xs mt-1 tabular-nums">450 ر.س</span>
                  </div>
                  <div className="flex flex-col justify-center border-r border-slate-200/60 px-1">
                    <span className="text-[10px] text-slate-400 font-medium">فرق السوم</span>
                    <span className="text-slate-800 font-bold text-xs mt-1 tabular-nums">30 ر.س</span>
                  </div>
                  <div className="flex flex-col justify-center border-r border-slate-200/60 px-1">
                    <span className="text-[10px] text-slate-400 font-medium">عدد السومات</span>
                    <span className="text-slate-900 font-black text-sm mt-0.5 tabular-nums">22</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button className="w-full h-10 bg-[#e7ab21] hover:bg-[#d69d1b] text-white font-bold rounded-lg shadow-2xs text-xs border-none">
                  الملف التعريفي
                </Button>
                <Button className="w-full h-10 bg-[#e7ab21] hover:bg-[#d69d1b] text-white font-bold rounded-lg shadow-2xs text-xs border-none">
                  الموقع
                </Button>
              </div>

            </Card>
          </div>

          {/* =========================================================================
              الجانب الأيسر: الجداول التفصيلية والبيانات والمواصفات (6 أعمدة)
              ========================================================================= */}
          <div className="lg:col-span-6 order-2 flex flex-col gap-4 w-full">
            
            <div className="bg-white rounded-2xl p-4 shadow-3xs border border-slate-100">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-1.5">
                  <h2 className="text-xs font-bold text-slate-800">اعلي المزايدين</h2>
                  <span className="text-amber-600 font-bold text-[10px]">(3)</span>
                </div>
                <div className="flex gap-1.5">
                  <button className="text-red-500 hover:opacity-80 transition p-0.5"><FileText size={14} /></button>
                  <button className="text-emerald-600 hover:opacity-80 transition p-0.5"><FileSpreadsheet size={14} /></button>
                </div>
              </div>

              <div className="w-full overflow-hidden rounded-lg border border-slate-100/80">
                <Table>
                  <TableHeader className="bg-slate-50/60 h-8">
                    <TableRow className="border-b border-slate-100">
                      <TableHead className="text-right text-slate-400 font-medium p-2 text-[10px]">الاسم</TableHead>
                      <TableHead className="text-right text-slate-400 font-medium p-2 text-[10px]">سعر السوم</TableHead>
                      <TableHead className="text-right text-slate-400 font-medium p-2 text-[10px]">الوقت</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-slate-700 text-[10px] font-medium">
                    {highestBidders.map((bid, idx) => (
                      <TableRow key={idx} className="border-b border-slate-50 hover:bg-slate-50/40 h-8">
                        <TableCell className="p-2">{bid.name}</TableCell>
                        <TableCell className="p-2 font-bold tabular-nums text-slate-900">{bid.amount}</TableCell>
                        <TableCell className="p-2 text-slate-400">{bid.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-3xs border border-slate-100">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-1.5">
                  <h2 className="text-xs font-bold text-slate-800">المسجلين في المزاد</h2>
                  <span className="text-amber-600 font-bold text-[10px]">(53)</span>
                </div>
                <div className="flex gap-1.5">
                  <button className="text-red-500 hover:opacity-80 transition p-0.5"><FileText size={14} /></button>
                  <button className="text-emerald-600 hover:opacity-80 transition p-0.5"><FileSpreadsheet size={14} /></button>
                </div>
              </div>

              <div className="w-full overflow-hidden rounded-lg border border-slate-100 mb-3">
                <Table>
                  <TableHeader className="bg-slate-50/60 h-8">
                    <TableRow className="border-b border-slate-100">
                      <TableHead className="text-right text-slate-400 font-medium p-2 text-[10px]">الاسم</TableHead>
                      <TableHead className="text-right text-slate-400 font-medium p-2 text-[10px]">رقم الهوية</TableHead>
                      <TableHead className="text-right text-slate-400 font-medium p-2 text-[10px]">الهاتف</TableHead>
                      <TableHead className="text-right text-slate-400 font-medium p-2 text-[10px]">لدية رصيد</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-slate-700 text-[10px] font-medium tabular-nums">
                    {registeredUsers.map((user, idx) => (
                      <TableRow key={idx} className="border-b border-slate-50 hover:bg-slate-50/40 h-8">
                        <TableCell className="p-2 font-normal text-slate-900">{user.name}</TableCell>
                        <TableCell className="p-2 text-slate-600">{user.idNumber}</TableCell>
                        <TableCell className="p-2 text-slate-600 text-left">{user.phone}</TableCell>
                        <TableCell className="p-2 text-slate-800 font-bold">{user.hasBalance}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="pt-2 flex justify-start w-full border-t border-slate-50">
                <Pagination>
                  <PaginationContent className="flex flex-row gap-1 items-center justify-start w-full">
                    <PaginationItem>
                      <PaginationPrevious href="#" className="h-6 text-[10px] px-2 rounded-md border border-slate-200 flex items-center gap-0.5">
                        السابق
                      </PaginationPrevious>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive className="w-5 h-5 text-[10px] flex items-center justify-center rounded-md bg-amber-50/60 text-amber-600 border border-amber-100">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" className="w-5 h-5 text-[10px] flex items-center justify-center rounded-md text-slate-400">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="text-slate-300 text-xs px-0.5">...</PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" className="w-5 h-5 text-[10px] flex items-center justify-center rounded-md text-slate-400">9</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" className="w-5 h-5 text-[10px] flex items-center justify-center rounded-md text-slate-400">10</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" className="h-6 text-[10px] px-2 rounded-md border border-slate-200 flex items-center gap-0.5">
                        التالي
                      </PaginationNext>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-3xs border border-slate-100 flex flex-col gap-3">
              <div>
                <h2 className="text-xs font-bold text-slate-900 border-b border-slate-100 pb-1.5 w-full">التفاصيل</h2>
                <p className="text-[10px] text-slate-600 leading-relaxed mt-2 font-normal">
                  فيلا فاخرة في حي الزهور، الرياض، تصميم عصري ومرافق متطورة. حديقة خلابة ومسبح خاص. مؤجرة بقيمة 40 ألف ريال سنوياً، وانهاء عقد الإيجار في تاريخ 14 نوفمبر 2023م. فرصة للاستثمار في فيلا فاخرة وتحقيق عائد استثماري، احجز الآن قبل انتهاء العقد.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-[10px] mt-2">
                {propertySpecs.map((spec, idx) => (
                  <div key={idx} className="flex border border-slate-100/70 rounded-lg overflow-hidden h-7 items-center w-full">
                    <div className="w-1/3 bg-slate-50 text-slate-400 font-medium px-2 h-full flex items-center border-l border-slate-100/60">
                      {spec.label}
                    </div>
                    <div className="w-2/3 text-slate-700 font-bold px-2 overflow-hidden text-ellipsis whitespace-nowrap bg-white text-right">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* =========================================================================
          الفوتر (Footer)
          ========================================================================= */}
      <footer className="w-full bg-white border-t border-slate-100 mt-12 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-100">
            
            {/* العمود الأول (أقصى اليمين): البراند والشبكات الاجتماعية */}
            <div className="lg:col-span-4 flex flex-col items-start gap-3 lg:text-right">
              <div className="flex flex-col items-start gap-1">
                <span className="text-slate-900 font-black text-xl tracking-tight">سومتك</span>
                <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold -mt-1">SOUMTECH</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق.
              </p>
              <div className="flex items-center gap-2 mt-2">
                {/* LinkedIn */}
                <a href="#" className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition border border-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                {/* Twitter / X */}
                <a href="#" className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition border border-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-pink-600 hover:bg-pink-50 transition border border-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            {/* العمود الثاني: القائمة الرئيسية */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h3 className="text-slate-800 font-bold text-sm">القائمة الرئيسية</h3>
              <div className="flex flex-col gap-3 text-slate-500 text-xs">
                <a href="#" className="hover:text-[#e45a2b] transition">الضوابض الإعلانية الصادرة من الهيئة</a>
                <a href="#" className="hover:text-[#e45a2b] transition">الشروط والأحكام</a>
                <a href="#" className="hover:text-[#e45a2b] transition">ترخيص الهيئة العامة للعقار</a>
                <a href="#" className="hover:text-[#e45a2b] transition">تواصل معنا</a>
              </div>
            </div>

            {/* العمود الثالث: الأقسام */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h3 className="text-slate-800 font-bold text-sm">الأقسام</h3>
              <div className="flex flex-col gap-3 text-slate-500 text-xs">
                <a href="#" className="hover:text-[#e45a2b] transition">مكتبة الدعم</a>
                <a href="#" className="hover:text-[#e45a2b] transition">الأسئلة الشائعة</a>
              </div>
            </div>

            {/* العمود الرابع (أقصى اليسار): تواصل معنا */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h3 className="text-slate-800 font-bold text-sm">تواصل معنا</h3>
              <div className="flex flex-col gap-3 text-slate-500 text-xs">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-slate-400" />
                  <span>الرياض، حي الملك فيصل، السعودية</span>
                </div>
                {/* تم التعديل هنا ليكون بداخل محاذاة واحدة من اليمين لليسار متناسقة */}
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-slate-400" />
                  <span className="tabular-nums" dir="ltr">+966 570 212 216</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-slate-400" />
                  <span>info@soum.tech</span>
                </div>
              </div>
            </div>

          </div>

          {/* أسفل الفوتر: الحقوق */}
          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-400 gap-2">
            <span>© جميع الحقوق محفوظة - لـ سومتك 2026</span>
          </div>
        </div>
      </footer>

    </div>
  );
}