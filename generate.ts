import fs from "fs";
import crypto from "crypto";

const statuses = ["active", "upcoming", "ended"];
const cities = [
  "Riyadh",
  "Jeddah",
  "Mecca",
  "Medina",
  "Dammam",
  "Khobar",
  "Dhahran",
  "Tabuk",
  "Abha",
  "Taif",
  "Yanbu",
  "Jazan",
  "Hail",
  "Al Qassim",
  "Najran",
];

const auctions = Array.from({ length: 100 }, (_, auctionIndex) => {
  const status = statuses[auctionIndex % statuses.length];
  const now = new Date();

  let auctionStartDate;
  let auctionFinishDate;

  if (status === "active") {
    // Started in the past, ends in the future
    auctionStartDate = new Date(
      now.getTime() -
        (Math.floor(Math.random() * 30) + 1) * 24 * 60 * 60 * 1000,
    );

    auctionFinishDate = new Date(
      now.getTime() +
        (Math.floor(Math.random() * 30) + 1) * 24 * 60 * 60 * 1000,
    );
  } else if (status === "upcoming") {
    // Starts in the future
    auctionStartDate = new Date(
      now.getTime() +
        (Math.floor(Math.random() * 60) + 1) * 24 * 60 * 60 * 1000,
    );

    auctionFinishDate = new Date(
      auctionStartDate.getTime() +
        (Math.floor(Math.random() * 30) + 1) * 24 * 60 * 60 * 1000,
    );
  } else {
    // Ended
    auctionFinishDate = new Date(
      now.getTime() -
        (Math.floor(Math.random() * 30) + 1) * 24 * 60 * 60 * 1000,
    );

    auctionStartDate = new Date(
      auctionFinishDate.getTime() -
        (Math.floor(Math.random() * 30) + 1) * 24 * 60 * 60 * 1000,
    );
  }

  const premises = Array.from({ length: 50 }, (_, premiseIndex) => ({
    uuid: crypto.randomUUID(),
    id: premiseIndex + 1,
    title: `Property Auction #${premiseIndex + 1}`,
    imageSrc: `https://picsum.photos/800/500?random=${
      auctionIndex * 100 + premiseIndex + 1
    }`,
    logoSrc: `https://picsum.photos/100/100?random=${
      auctionIndex * 100 + premiseIndex + 101
    }`,
    assetsCount: Math.floor(Math.random() * 50) + 1,
    status,
    endDate: auctionFinishDate.toISOString(),
    detailsUrl: `/auctions/${auctionIndex + 1}`,
    location: `${cities[Math.floor(Math.random() * cities.length)]}, Saudi Arabia`,
    area: `${Math.floor(Math.random() * 400) + 50} m²`,
    auctionDate: auctionStartDate.toISOString().split("T")[0],
    auctionTime: auctionStartDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
    priceInfo: {
      amount: `$${(Math.floor(Math.random() * 90) + 10) * 10000}`,
      subText: "Starting bid",
    },
  }));

  return {
    uuid: crypto.randomUUID(),
    id: auctionIndex + 1,
    auctionName: `Auction ${auctionIndex + 1}`,
    auctionImage: `https://picsum.photos/1200/600?random=${auctionIndex + 1}`,
    auctionLogo: `https://picsum.photos/100/100?random=${auctionIndex + 1001}`,
    status,
    auctionStartDate: auctionStartDate.toISOString(),
    auctionFinishDate: auctionFinishDate.toISOString(),
    premisesAmount: premises.length,
    premises,
  };
});

fs.writeFileSync("db.json", JSON.stringify({ auctions }, null, 2));

console.log("Generated db.json with 100 auctions.");
