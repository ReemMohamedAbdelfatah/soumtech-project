"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Gavel, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import BidConfirmationModal from "./BidConfirmation/BidConfirmationModal";

export interface BidInputProps {
  startingAmount: number;
  step: number;
  meterPrice: number;
  brokerageFees: number;
  brokerageTax: number;
  totalPrice: number;
}

function format(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

export default function BidInput({
  startingAmount,
  step,
  meterPrice,
  brokerageFees,
  brokerageTax,
  totalPrice,
}: BidInputProps) {
  const t = useTranslations("BidInput");
  const [amount, setAmount] = useState(startingAmount);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  // Figma: light panel (#F9F9F9, r=12) holding the CTA + amount stepper, then notes.
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-muted/40 p-5">
      <div className="flex items-stretch gap-5">
        {/* Navy CTA — 20px / 500 white text with gavel icon */}
        <Button
          type="button"
          aria-haspopup="dialog"
          onClick={() => setIsConfirmationOpen(true)}
          className="h-auto flex-1 gap-2 py-4 text-xl font-medium [&_svg:not([class*='size-'])]:size-6"
        >
          <Gavel />
          {t("addBid")}
        </Button>

        {/* White amount stepper (r=8) — value 26px / 700 gold */}
        <div className="flex flex-1 items-center justify-between gap-2 rounded-lg bg-card px-4 ring-1 ring-foreground/10">
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("decrease")}
            onClick={() => setAmount((a) => Math.max(0, a - step))}
          >
            <Minus />
          </Button>
          <span className="text-[26px] font-bold tabular-nums text-secondary">
            {format(amount)}
          </span>
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("increase")}
            onClick={() => setAmount((a) => a + step)}
          >
            <Plus />
          </Button>
        </div>
      </div>

      <div className="h-px bg-border" />

      {/* Notes — 14px / 400 (#212529) */}
      <ul className="space-y-2 text-sm text-foreground/90">
        <li>{t("termsNote")}</li>
        <li>{t("totalNote")}</li>
      </ul>

      <BidConfirmationModal
        open={isConfirmationOpen}
        onOpenChange={setIsConfirmationOpen}
        bidAmount={amount}
        meterPrice={meterPrice}
        brokerageFees={brokerageFees}
        brokerageTax={brokerageTax}
        totalPrice={totalPrice}
      />
    </div>
  );
}
