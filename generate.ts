import fs from "fs";

const statuses = ["active", "upcoming", "ended"];
const cities = ["Alexandria", "Cairo", "Giza", "North Coast", "New Cairo"];

const auctions = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Property Auction #${i + 1}`,
  imageSrc: `https://picsum.photos/800/500?random=${i + 1}`,
  logoSrc: `https://picsum.photos/100/100?random=${i + 101}`,
  assetsCount: Math.floor(Math.random() * 50) + 1,
  status: statuses[i % statuses.length],
  endDate: new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000).toISOString(),
  detailsUrl: `/auctions/${i + 1}`,
  location: `${cities[i % cities.length]}, Egypt`,
  area: `${100 + i * 10} m²`,
  auctionDate: `2026-07-${String((i % 28) + 1).padStart(2, "0")}`,
  auctionTime: `${String((i % 12) + 1).padStart(2, "0")}:00 ${i % 2 ? "PM" : "AM"}`,
  priceInfo:
    i % 2 === 0
      ? {
          amount: `$${(i + 1) * 10000}`,
          subText: "Starting bid",
        }
      : undefined,
}));

fs.writeFileSync("db.json", JSON.stringify({ auctions }, null, 2));

console.log("Generated db.json with 100 auctions.");
