"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import BidSummary from "./BidSummary";

export interface BidConfirmationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bidAmount: number;
  meterPrice: number;
  brokerageFees: number;
  brokerageTax: number;
  totalPrice: number;
  onConfirm?: (bidAmount: number) => void;
}

export default function BidConfirmationModal({
  open,
  onOpenChange,
  bidAmount,
  meterPrice,
  brokerageFees,
  brokerageTax,
  totalPrice,
  onConfirm,
}: BidConfirmationModalProps) {
  const t = useTranslations("BidConfirmationModal");
  const formattedBid = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(bidAmount);

  const handleConfirm = () => {
    onConfirm?.(bidAmount);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        overlayClassName="bg-black/50 backdrop-blur-none"
        className="w-[calc(100%-2rem)] max-w-[470px] overflow-visible rounded-2xl p-8 sm:p-10"
      >
        <DialogHeader className="items-center gap-6 text-center">
          <DialogTitle className="text-base font-bold text-foreground">
            {t("title")}
          </DialogTitle>
          <DialogDescription className="text-xl font-bold leading-relaxed text-primary sm:text-2xl">
            {t.rich("question", {
              amount: () => (
                <span className="whitespace-nowrap" dir="ltr">
                  {formattedBid} {t("currency")}
                </span>
              ),
            })}
          </DialogDescription>
        </DialogHeader>

        <BidSummary
          title={t("detailsTitle")}
          currency={t("currency")}
          rows={[
            { label: t("meterPrice"), value: meterPrice },
            { label: t("brokerage"), value: brokerageFees },
            { label: t("brokerageTax"), value: brokerageTax },
            { label: t("total"), value: totalPrice },
          ]}
        />

        <ul className="list-disc space-y-2 ps-5 text-xs leading-relaxed text-primary/80 marker:text-primary">
          <li>{t("termsNote")}</li>
          <li>{t("totalNote")}</li>
        </ul>

        <DialogFooter className="mx-0 mb-0 grid grid-cols-[1fr_1.8fr] gap-4 border-0 bg-transparent p-0 sm:grid sm:grid-cols-[1fr_1.8fr]">
          <DialogClose asChild>
            <Button variant="outline" className="h-11 text-muted-foreground">
              {t("cancel")}
            </Button>
          </DialogClose>
          <Button
            type="button"
            onClick={handleConfirm}
            className="h-11 bg-secondary text-white hover:bg-secondary/90"
          >
            {t("confirm")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
