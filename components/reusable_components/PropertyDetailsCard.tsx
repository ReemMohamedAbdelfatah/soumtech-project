import React from 'react';

export interface PropertyCardProps {
  title?: string;
  location?: string;
  imageUrl?: string;
  logoUrl?: string;
  statusText?: string;
  currentPrice?: number;
  pricePerMeter?: number;
  totalPriceCalculated?: number;
  taxFee?: number;
  saeeFee?: number;
  entryFee?: number;
  bidDifference?: number;
  totalBidsCount?: number;
}

export default function PropertyDetailsCard({
  title = "فيلا حي الروضة",
  location = "الرياض",
  imageUrl = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  logoUrl,
  statusText = "مزاد منتهي",
  currentPrice = 4623240.00,
  pricePerMeter = 200,
  totalPriceCalculated = 2049,
  taxFee = 75.5,
  saeeFee = 2.5,
  entryFee = 450,
  bidDifference = 30,
  totalBidsCount = 22
}: PropertyCardProps) {
  
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);
  };

  return (
    <div dir="rtl" className="max-w-md mx-auto bg-white border border-slate-100 rounded-3xl overflow-hidden font-sans text-right select-none shadow-sm my-6">
      
      {/* 1. Header Title & Location Section */}
      <div className="px-5 pt-5 pb-2 flex justify-between items-center">
        <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          {title}
          <span className="text-sm font-normal text-slate-400 border-r pr-2 border-slate-300">
            {location}
          </span>
        </h1>
        <span className="text-sm text-slate-500 border-b border-red-500 pb-0.5 cursor-pointer font-medium">
          معرض الصور
        </span>
      </div>

      {/* 2. Image Carousel Card Container */}
      <div className="relative px-4">
        <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-sm">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
          
          {logoUrl && (
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-xl shadow-sm">
              <img src={logoUrl} alt="Logo" className="h-8 w-auto object-contain" />
            </div>
          )}

          <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-8 h-8 rounded-full flex items-center justify-center shadow text-slate-700 transition">
            <span className="text-xs font-bold">‹</span>
          </button>
          <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-8 h-8 rounded-full flex items-center justify-center shadow text-slate-700 transition">
            <span className="text-xs font-bold">›</span>
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 justify-center">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-white/60"></span>
            <span className="w-2 h-2 rounded-full bg-white/60"></span>
            <span className="w-2 h-2 rounded-full bg-white/60"></span>
            <span className="w-2 h-2 rounded-full bg-white/60"></span>
          </div>
        </div>
      </div>

      {/* 3. Solid Status Banner Badge */}
      <div className="px-4 mt-3">
        <div className="w-full py-2.5 bg-[#e15b2b] text-white text-center rounded-full font-bold text-base shadow-sm">
          {statusText}
        </div>
      </div>

      {/* 4. Financial Data Grid Area */}
      <div className="px-5 py-4 grid grid-cols-2 gap-4 items-center">
        <div className="flex flex-col">
          <span className="text-slate-800 font-bold text-base">سعر السوم الحالي</span>
          <span className="text-[#cca043] font-black text-2xl tracking-tight mt-1">
            {formatNumber(currentPrice)} <span className="text-sm font-bold">ر.س</span>
          </span>
        </div>

        <div className="flex flex-col gap-1.5 text-xs text-slate-600 border-r border-slate-100 pr-4">
          <div className="flex justify-between w-full">
            <span className="text-slate-400">سعر المتر</span>
            <span className="font-semibold text-slate-800">{pricePerMeter} ريال</span>
          </div>
          <div className="flex justify-between w-full">
            <span className="text-slate-400">الاجمالي</span>
            <span className="font-semibold text-slate-800">{totalPriceCalculated} ريال</span>
          </div>
          <div className="flex justify-between w-full">
            <span className="text-slate-400">ضريبة السعي</span>
            <span className="font-semibold text-slate-800">{taxFee} ريال</span>
          </div>
          <div className="flex justify-between w-full">
            <span className="text-slate-400">السعي</span>
            <span className="font-semibold text-slate-800">{saeeFee} ريال</span>
          </div>
        </div>
      </div>

      {/* 5. Metrics Cards Triple-Column Row */}
      <div className="px-4 mb-4">
        <div className="grid grid-cols-3 bg-slate-50/80 rounded-xl border border-slate-100 py-3 text-center">
          <div className="flex flex-col justify-center border-l border-slate-200/60 px-1">
            <span className="text-xs text-slate-400 font-medium">رسوم الدخول</span>
            <span className="text-slate-800 font-bold text-sm mt-1">{entryFee} ر.س</span>
          </div>
          <div className="flex flex-col justify-center border-l border-slate-200/60 px-1">
            <span className="text-xs text-slate-400 font-medium">فرق السوم</span>
            <span className="text-slate-800 font-bold text-sm mt-1">{bidDifference} ر.س</span>
          </div>
          <div className="flex flex-col justify-center px-1">
            <span className="text-xs text-slate-400 font-medium">عدد السومات</span>
            <span className="text-slate-800 font-black text-lg mt-0.5">{totalBidsCount}</span>
          </div>
        </div>
      </div>

      {/* 6. Dual Action Primary Buttons Footer */}
      <div className="px-4 pb-5 grid grid-cols-2 gap-3">
        <button className="w-full py-2.5 bg-[#f5b324] hover:bg-[#e0a11c] text-white font-bold rounded-xl shadow-sm transition text-sm">
          الموقع
        </button>
        <button className="w-full py-2.5 bg-[#f5b324] hover:bg-[#e0a11c] text-white font-bold rounded-xl shadow-sm transition text-sm">
          الملف التعريفي
        </button>
      </div>

    </div>
  );
}