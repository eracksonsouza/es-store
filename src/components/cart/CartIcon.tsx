"use client";

import { useCart } from "@/app/context/CartContext";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const CartIcon = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Link href="/cart">
      <Button size="icon" variant="outline" className="relative cursor-pointer">
        <ShoppingCartIcon className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
            {totalItems}
          </span>
        )}
      </Button>
    </Link>
  );
};

export default CartIcon;
