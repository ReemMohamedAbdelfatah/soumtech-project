import fs from "fs";
import crypto from "crypto";

const statuses = ["active", "upcoming", "ended"];

const cities = [
  { en: "Riyadh", ar: "الرياض" },
  { en: "Jeddah", ar: "جدة" },
  { en: "Mecca", ar: "مكة المكرمة" },
  { en: "Medina", ar: "المدينة المنورة" },
  { en: "Dammam", ar: "الدمام" },
  { en: "Khobar", ar: "الخبر" },
  { en: "Dhahran", ar: "الظهران" },
  { en: "Tabuk", ar: "تبوك" },
  { en: "Abha", ar: "أبها" },
  { en: "Taif", ar: "الطائف" },
  { en: "Yanbu", ar: "ينبع" },
  { en: "Jazan", ar: "جازان" },
  { en: "Hail", ar: "حائل" },
  { en: "Al Qassim", ar: "القصيم" },
  { en: "Najran", ar: "نجران" },
];

const auctionNames = [
  { en: "Al Andalus Residential Building", ar: "عمارة سكنية الأندلس" },
  { en: "Al Narjis Residential Building", ar: "عمارة سكنية النرجس" },
  { en: "Al Yasmin Residential Building", ar: "عمارة سكنية الياسمين" },
  { en: "Olaya Commercial Complex", ar: "مجمع تجاري العليا" },
  { en: "Al Rimal Residential Land", ar: "أرض سكنية الرمال" },
  { en: "Luxury Villa in Al Malqa", ar: "فيلا فاخرة الملقا" },
  { en: "Gulf Business Tower", ar: "برج الأعمال الخليج" },
  { en: "Industrial City Warehouses", ar: "مستودعات المدينة الصناعية" },
  { en: "Al Rawdah Investment Building", ar: "عمارة استثمارية الروضة" },
  { en: "Qurtubah Commercial Land", ar: "أرض تجارية قرطبة" },
  { en: "Hittin Villa Compound", ar: "مجمع فلل حطين" },
  { en: "Al Yarmouk Shopping Center", ar: "مركز تجاري اليرموك" },
  { en: "Al Aqiq Residential Building", ar: "عمارة سكنية العقيق" },
  { en: "Al Sahafah Development Land", ar: "أرض تطويرية الصحافة" },
  { en: "Al Muruj Residential Tower", ar: "برج سكني المروج" },
  { en: "Al Taawun Office Complex", ar: "مجمع مكاتب التعاون" },
  { en: "Beachfront Residential Villa", ar: "فيلا سكنية الشاطئ" },
  { en: "Al Rabwah Residential Building", ar: "عمارة سكنية الربوة" },
  { en: "Al Waha Investment Land", ar: "أرض استثمارية الواحة" },
  { en: "Al Nakheel Commercial Complex", ar: "مجمع تجاري النخيل" },
];

function randomDateBetween(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}

const auctions = Array.from({ length: 100 }, (_, auctionIndex) => {
  const status = statuses[auctionIndex % statuses.length];
  const now = new Date();

  let auctionStartDate;
  let auctionFinishDate;

  if (status === "active") {
    auctionStartDate = new Date(
      now.getTime() -
        (Math.floor(Math.random() * 30) + 1) * 24 * 60 * 60 * 1000,
    );

    auctionFinishDate = new Date(
      now.getTime() +
        (Math.floor(Math.random() * 30) + 1) * 24 * 60 * 60 * 1000,
    );
  } else if (status === "upcoming") {
    auctionStartDate = new Date(
      now.getTime() +
        (Math.floor(Math.random() * 60) + 1) * 24 * 60 * 60 * 1000,
    );

    auctionFinishDate = new Date(
      auctionStartDate.getTime() +
        (Math.floor(Math.random() * 30) + 1) * 24 * 60 * 60 * 1000,
    );
  } else {
    auctionFinishDate = new Date(
      now.getTime() -
        (Math.floor(Math.random() * 30) + 1) * 24 * 60 * 60 * 1000,
    );

    auctionStartDate = new Date(
      auctionFinishDate.getTime() -
        (Math.floor(Math.random() * 30) + 1) * 24 * 60 * 60 * 1000,
    );
  }
  const auctionCity = cities[Math.floor(Math.random() * cities.length)];
  const premises = Array.from({ length: 50 }, (_, premiseIndex) => {
    const city = auctionCity;

    const premiseStartDate = randomDateBetween(
      auctionStartDate,
      auctionFinishDate,
    );

    const premiseFinishDate = randomDateBetween(
      premiseStartDate,
      auctionFinishDate,
    );

    return {
      uuid: crypto.randomUUID(),
      id: premiseIndex + 1,

      title: {
        en: `Property Auction #${premiseIndex + 1}`,
        ar: `مزاد عقاري رقم ${premiseIndex + 1}`,
      },

      imageSrc: `https://picsum.photos/800/500?random=${
        auctionIndex * 100 + premiseIndex + 1
      }`,

      logoSrc: `https://picsum.photos/100/100?random=${
        auctionIndex * 100 + premiseIndex + 101
      }`,

      assetsCount: Math.floor(Math.random() * 50) + 1,

      status,
      location: {
        en: `${auctionCity.en}, Saudi Arabia`,
        ar: `${auctionCity.ar}، المملكة العربية السعودية`,
      },
      premiseStartDate: premiseStartDate.toISOString(),
      premiseFinishDate: premiseFinishDate.toISOString(),

      detailsUrl: `/auctions/${auctionIndex + 1}`,

      area: `${Math.floor(Math.random() * 400) + 50} m²`,

      priceInfo: {
        amount: `$${(Math.floor(Math.random() * 90) + 10) * 10000}`,
        subText: {
          en: "Starting bid",
          ar: "سعر البداية",
        },
      },
    };
  });

  const auctionName = auctionNames[auctionIndex % auctionNames.length];

  return {
    uuid: crypto.randomUUID(),
    id: auctionIndex + 1,

    auctionName: {
      en: `${auctionName.en} ${auctionIndex + 1}`,
      ar: `${auctionName.ar} ${auctionIndex + 1}`,
    },

    auctionImage: `https://picsum.photos/1200/600?random=${auctionIndex + 1}`,
    auctionLogo: `https://picsum.photos/100/100?random=${auctionIndex + 1001}`,

    status,

    location: {
      en: `${auctionCity.en}, Saudi Arabia`,
      ar: `${auctionCity.ar}، المملكة العربية السعودية`,
    },

    area: `${Math.floor(Math.random() * 400) + 50} m²`,

    auctionStartDate: auctionStartDate.toISOString(),
    auctionFinishDate: auctionFinishDate.toISOString(),

    premisesAmount: premises.length,
    premises,
  };
});

fs.writeFileSync("db.json", JSON.stringify({ auctions }, null, 2));

console.log("Generated bilingual db.json with 100 auctions.");
