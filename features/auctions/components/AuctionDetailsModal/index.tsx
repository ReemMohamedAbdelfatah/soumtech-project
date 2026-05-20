import React from "react";

type Props = { open?: boolean; onClose?: () => void };

export default function AuctionDetailsModal({ open = false, onClose }: Props) {
  if (!open) return null;
  return (
    
      <div>Details</div>
    
  );
}
