"use client";
import { useCart } from "@/app/context/CartContext";
const CartPage = () => {
  const { items, getTotalItems, updateQuantity, removeItem, getTotalPrice } =
    useCart();
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Carrinho de Compras</h1>
      {getTotalItems() === 0 ? (
        <p className="text-gray-600">Seu carrinho está vazio.</p>
      ) : (
        <div>
          <p className="text-gray-600">Itens no carrinho: {getTotalItems()}</p>
          <ul className="mt-4">
            {items.map((item) => (
              <li key={item.id} className="mb-2">
                {item.title} - Qtd: {item.quantity} - Preço: $
                {item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h2>Total ${getTotalPrice().toFixed(2)}</h2>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;
