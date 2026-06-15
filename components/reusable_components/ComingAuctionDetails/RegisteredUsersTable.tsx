import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface RegisteredUser {
  name: string;
  identityNumber: string;
  phone: string;
  hasBalance: boolean;
}

export interface RegisteredUsersTableProps {
  users: RegisteredUser[];
  totalCount: number;
  title?: string;
}

export default async function RegisteredUsersTable({
  users,
  totalCount,
  title,
}: RegisteredUsersTableProps) {
  const t = await getTranslations("RegisteredUsersTable");

  return (
    <Card className="gap-0 overflow-hidden p-0">
      <div className="flex items-center justify-between px-5 py-4">
        <h2 className="text-lg font-bold text-foreground">
          {title ?? t("title")} <span className="text-destructive">({totalCount})</span>
        </h2>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" aria-label={t("exportPdf")}>
            <Image src="/icons/pdf.png" alt="" width={32} height={32} />
          </Button>
          <Button variant="ghost" size="icon" aria-label={t("exportExcel")}>
            <Image src="/icons/xls.png" alt="" width={32} height={32} />
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="h-11 px-5 text-start text-muted-foreground">
              {t("name")}
            </TableHead>
            <TableHead className="h-11 px-5 text-start text-muted-foreground">
              {t("identityNumber")}
            </TableHead>
            <TableHead className="h-11 px-5 text-start text-muted-foreground">
              {t("phone")}
            </TableHead>
            <TableHead className="h-11 px-5 text-start text-muted-foreground">
              {t("hasBalance")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={`${user.identityNumber}-${index}`} className="h-[72px]">
              <TableCell className="px-5 text-foreground">{user.name}</TableCell>
              <TableCell className="px-5 tabular-nums text-foreground" dir="ltr">
                {user.identityNumber}
              </TableCell>
              <TableCell className="px-5 tabular-nums text-foreground" dir="ltr">
                {user.phone}
              </TableCell>
              <TableCell className="px-5 font-medium text-foreground">
                {user.hasBalance ? t("yes") : t("no")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <nav
        aria-label={t("pagination")}
        className="flex items-center justify-between border-t border-border px-5 py-4"
      >
        <Button variant="outline" className="gap-2">
          <ArrowRight />
          {t("previous")}
        </Button>
        <div className="flex items-center gap-2" dir="ltr">
          {[1, 2].map((page) => (
            <Button
              key={page}
              variant={page === 1 ? "secondary" : "ghost"}
              size="icon"
              aria-current={page === 1 ? "page" : undefined}
              className={page === 1 ? "bg-secondary/10 text-secondary" : ""}
            >
              {page}
            </Button>
          ))}
          <span className="px-1 text-muted-foreground">...</span>
          {[9, 10].map((page) => (
            <Button key={page} variant="ghost" size="icon">
              {page}
            </Button>
          ))}
        </div>
        <Button variant="outline" className="gap-2">
          {t("next")}
          <ArrowLeft />
        </Button>
      </nav>
    </Card>
  );
}
