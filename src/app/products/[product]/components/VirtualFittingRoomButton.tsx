"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Scan } from "lucide-react";
import VirtualFittingRoom from "@/components/products/VirtualFittingRoom";

interface VirtualFittingRoomButtonProps {
  productTitle: string;
  category: string;
}

export default function VirtualFittingRoomButton({
  productTitle,
  category,
}: VirtualFittingRoomButtonProps) {
  const [open, setOpen] = useState(false);

  // Verifica se o produto é uma peça de roupa
  const isClothing = ["men's clothing", "women's clothing"].includes(
    category.toLowerCase()
  );

  if (!isClothing) {
    return null; // Não mostra o botão se não for roupa
  }

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className="gap-2 border-purple-600 text-purple-600 hover:bg-purple-50"
      >
        <Scan size={20} />
        Provador Virtual
      </Button>
      <VirtualFittingRoom
        open={open}
        onOpenChange={setOpen}
        productTitle={productTitle}
      />
    </>
  );
}
