"use client";

import { useCart } from "@/app/context/CartContext";
import { Button } from "@/components/ui/button";
import { Product } from "@/app/types/product";

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <Button
      onClick={handleAddToCart}
      variant="default"
      className="cursor-pointer bg-[#0B4F6C] text-white hover:bg-[#0A3E54] "
    >
      Adicionar ao Carrinho
    </Button>
  );
};

export default AddToCartButton;
