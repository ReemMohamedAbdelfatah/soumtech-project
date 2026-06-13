import * as React from "react"
import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"
import Link from "next/link"

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex items-center gap-0.5", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<typeof Link>

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <Button
      asChild
      variant={isActive ? "outline" : "ghost"}
      size={size}
      className={cn(className)}
    >
      <Link
        aria-current={isActive ? "page" : undefined}
        data-slot="pagination-link"
        data-active={isActive}
        {...props}
      />
    </Button>
  )
}

function PaginationPrevious({
  className,
  text,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
  const t = useTranslations("Pagination")
  return (
    <PaginationLink
      aria-label={t("Previous")}
      size="default"
      className={cn("pl-1.5!", className)}
      {...props}
    >
      <ChevronLeftIcon className="rtl:rotate-180" data-icon="inline-start" />
      <span className="hidden sm:block">{text ?? t("Previous")}</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  text,
  ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
  const t = useTranslations("Pagination")
  return (
    <PaginationLink
      aria-label={t("Next")}
      size="default"
      className={cn("pr-1.5!", className)}
      {...props}
    >
      <span className="hidden sm:block">{text ?? t("Next")}</span>
      <ChevronRightIcon className="rtl:rotate-180" data-icon="inline-end" />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex size-8 items-center justify-center [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon
      />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}

export default function AuctionPagination({totalPages, currentPage}: {totalPages: number, currentPage: string}) {
  const current = Number(currentPage);
  
  const getVisiblePages = (current: number, total: number): (number | '...')[] => {
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages: (number | '...')[] = [];

    // Always include first page
    pages.push(1);

    // Left ellipsis: only if current window starts past page 3
    if (current > 4) {
      pages.push('...');
    }

    // Window of ±2 around current, clamped within [2, total-1]
    const windowStart = Math.max(2, current - 2);
    const windowEnd   = Math.min(total - 1, current + 2);

    for (let p = windowStart; p <= windowEnd; p++) {
      pages.push(p);
    }

    // Right ellipsis: only if current window ends before total - 2
    if (current < total - 3) {
      pages.push('...');
    }

    // Always include last page
    pages.push(total);

    return pages;
  };

  const visiblePages = getVisiblePages(current, totalPages);

  return (
    <Pagination className="w-full">
      <PaginationContent className="w-full h-[84px] flex justify-between items-center border-b border-border rounded-[12px] px-[24px]">
        <PaginationItem>
          <PaginationPrevious 
            href={current > 1 ? `?page=${current - 1}` : "#"} 
            className={cn(
              "border border-[#D0D5DD] rounded-[8px] shadow-[0px_1px_2px_0px_#1018280D] flex justify-center items-center gap-[7px] text-[16px] leading-[20px] h-[41px] font-normal text-black",
              current <= 1 ? "pointer-events-none opacity-50" : ""
            )}
          />
        </PaginationItem>
        
        <div className="h-[40px] w-[40px] flex justify-center items-center rounded-[8px]">
          {visiblePages.map((page, i) => (
            <PaginationItem key={i}>
              {page === '...' ? (
                <span className="px-2 text-[#667085]">...</span>
              ) : (
                <PaginationLink 
                  href={`?page=${page}`} 
                  isActive={current === page}
                  className={cn(
                    " flex items-center justify-center border-none text-[16px] leading-[20px] font-normal",
                    current === page 
                      ? "bg-[#EEA82014] !text-[#EEA820]" 
                      : "!text-[#667085] hover:!text-[#EEA820] hover:bg-[#EEA8200D]"
                  )}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
        </div>

        <PaginationItem>
          <PaginationNext 
            href={current < totalPages ? `?page=${current + 1}` : "#"} 
            className={cn(
              "border border-[#D0D5DD] rounded-[8px] shadow-[0px_1px_2px_0px_#1018280D] flex justify-center items-center gap-[7px] text-[16px] leading-[20px] h-[41px] font-normal text-black",
              current >= totalPages ? "pointer-events-none opacity-50" : ""
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
