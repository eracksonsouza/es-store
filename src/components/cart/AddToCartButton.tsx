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
      className="cursor-pointer"
    >
      Adicionar ao Carrinho
    </Button>
  );
};

export default AddToCartButton;
