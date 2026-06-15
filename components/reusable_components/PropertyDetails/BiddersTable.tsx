import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface Bidder {
  name: string;
  bidPrice: string;
  time: string;
}

export interface BiddersTableProps {
  bidders: Bidder[];
}

export default async function BiddersTable({ bidders }: BiddersTableProps) {
  const t = await getTranslations("BiddersTable");

  return (
    <Card className="gap-3 px-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground">
          {t("title")} <span className="text-destructive">({bidders.length})</span>
        </h3>
        <div className="flex items-center gap-2">
          <img
            src="/icons/pdf.png"
            alt="PDF"
            className="h-8 w-8 object-contain"
          />
          <img
            src="/icons/xls.png"
            alt="Excel"
            className="h-8 w-8 object-contain"
          />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-start font-normal text-muted-foreground">
              {t("name")}
            </TableHead>
            <TableHead className="text-start font-normal text-muted-foreground">
              {t("bidPrice")}
            </TableHead>
            <TableHead className="text-start font-normal text-muted-foreground">
              {t("time")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bidders.map((b, i) => (
            <TableRow key={i}>
              <TableCell className="text-foreground">{b.name}</TableCell>
              <TableCell className="tabular-nums text-foreground">
                {b.bidPrice}
              </TableCell>
              <TableCell className="text-muted-foreground">{b.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
