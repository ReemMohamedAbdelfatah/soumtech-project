import { NextResponse } from "next/server";
import { getAuctions, getAuction, searchAuctions } from "@/lib/mocks/auctions";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const q = url.searchParams.get("q");
  const limitParam = url.searchParams.get("limit");

  if (id) {
    const item = await getAuction(id);
    if (!item)
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(item);
  }

  let data = q ? await searchAuctions(q) : await getAuctions();

  if (limitParam) {
    const n = Number(limitParam);
    if (!Number.isNaN(n) && n > 0) data = data.slice(0, n);
  }

  return NextResponse.json(data);
}
