// components/reusable_components/PropertyDetailsCard.tsx
"use client";

import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
        import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Gavel,
} from "lucide-react";

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
  
      <div className="w-full max-w-7xl mx-auto p-4 lg:p-6 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* =========================================================================
              الجانب الأيمن: كارت العقار والصورة والتفاصيل المالية (6 أعمدة)
              ========================================================================= */}

<div className="lg:col-span-6 order-1">
  <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">

    {/* Header */}
    <div className="p-4 border-b">
      <div className="flex flex-row-reverse justify-between items-center">
        <div className="text-right">
             <span className="bg-green-500 text-white text-xs px-4 py-2 rounded-full">
          أنت أعلى مزايد
        </span>
         
        </div>
  <div className="flex items-baseline gap-1">
       <h1 className="text-xl font-bold text-slate-900">فيلا حي الروضة</h1>
                  <span className="text-xs text-slate-400 font-medium">( الرياض )</span>
                  </div>
      </div>

      <div className="flex justify-between items-center mt-4 border-b border-slate-100 pb-2">
                <span className="text-xs text-slate-800 font-bold border-b-2 border-[#e45a2b] pb-2 cursor-pointer">
                  معرض الصور
                </span>

        <span className="font-semibold text-sm">
          رقم التواصل : +966501759844
        </span>
      </div>
    </div>

    {/* Image */}
    <div className="p-3">
      <div className="relative rounded-lg overflow-hidden">
        <Image
          src="/soum9.jpeg"
          alt="villa"
          width={1200}
          height={800}
          className="w-full h-[320px] object-cover"
        />

        <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow">
          <ChevronRight size={18} />
        </button>

        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow">
          <ChevronLeft size={18} />
        </button>

        <div className="absolute top-3 left-3 bg-white rounded-md px-2 py-1 shadow">
          <span className="text-xs font-semibold">
            <img 
  src="/soum5.jpeg" 
  alt="صورة العقار" 
  className="w-full h-full object-cover" // يمكنك تعديل الكلاسات حسب التصميم المطلوب
/></span>
        </div>

        <button className="absolute top-3 right-3 bg-[#242E7D] text-white text-xs px-4 py-2 rounded">
          + سجل في المزاد
        </button>
      </div>
    </div>

    {/* Timer */}
    <div className="px-4">
      <div className="grid grid-cols-4 border rounded-lg py-4 text-center">
        <div>
          <div className="text-4xl font-bold text-[#1d2569]">06</div>
          <div className="text-xs text-gray-500">يوم</div>
        </div>

        <div>
          <div className="text-4xl font-bold text-[#1d2569]">14</div>
          <div className="text-xs text-gray-500">ساعة</div>
        </div>

        <div>
          <div className="text-4xl font-bold text-[#1d2569]">12</div>
          <div className="text-xs text-gray-500">دقيقة</div>
        </div>

        <div>
          <div className="text-4xl font-bold text-[#1d2569]">40</div>
          <div className="text-xs text-gray-500">ثانية</div>
        </div>
      </div>
    </div>

    {/* Price Section */}
    <div className="p-5">
      <div className="flex flex-row justify-between items-start">

        <div className="text-right">
            <div className="space-y-3 text-sm text-gray-600 text-right min-w-[180px]">
 <div className="text-xl font-bold mb-2">
            سعر السوم الحالي
          </div>

          <div className="text-[#d6a11d] text-3xl font-extrabold">
            4,623,240.00 ر.س
          </div>
          

        </div>
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
    </div>

    {/* Stats */}
    <div className="px-4">
      <div className="grid grid-cols-3 border rounded-lg text-center py-5">
        <div>
          <div className="text-gray-500 text-sm">
            عربون الدخول
          </div>
          <div className="font-bold text-xl mt-2">
            450 ر.س
          </div>
        </div>

        <div>
          <div className="text-gray-500 text-sm">
            شرط السوم
          </div>
          <div className="font-bold text-xl mt-2">
            30 ر.س
          </div>
        </div>

        <div>
          <div className="text-gray-500 text-sm">
            عدد السومات
          </div>
          <div className="font-bold text-xl mt-2">
            22
          </div>
        </div>
      </div>
    </div>

    {/* Bid Controls */}
    <div className="p-4 flex flex-row-reverse gap-3">

      <button className="flex-1 bg-[#1c2468] text-white rounded-md py-4 flex items-center justify-center gap-2 font-semibold">
        <Gavel size={18} />
        أضف سومتك
      </button>

      <div className="flex items-center border rounded-md overflow-hidden">
        <button className="w-12 h-14 flex items-center justify-center">
          <Minus />
        </button>

        <div className="w-40 text-center font-bold text-[#d6a11d]">
          4,623,250
        </div>

        <button className="w-12 h-14 flex items-center justify-center">
          <Plus />
        </button>
      </div>

    </div>

    {/* Notice */}
    <div className="px-5 text-xs text-gray-500 leading-6">
      <p>• بالضغط على أضف سومتك فإنك توافق على الشروط وأحكام المزاد.</p>
      <p>• السعر الإجمالي لا يشمل ضريبة التصرفات العقارية ويتحملها المشتري.</p>
    </div>

    {/* Bottom Buttons */}
    <div className="p-4 flex flex-row-reverse gap-3">
      <button className="flex-1 bg-[#e0ab22] text-white font-bold py-3 rounded">
        الملف التعريفي
      </button>

      <button className="flex-1 bg-[#e0ab22] text-white font-bold py-3 rounded">
        الموقع
      </button>
    </div>

  </div>
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
      

    </div>
  );
}