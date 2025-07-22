"use client";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const CartPage = () => {
  const { items, getTotalItems, updateQuantity, removeItem, getTotalPrice } =
    useCart();

  const EmptyCartState = () => (
    <div className="text-center py-12">
      <ShoppingBag className="mx-auto h-24 w-24 text-gray-300 mb-4" />
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        Seu carrinho está vazio
      </h2>
      <p className="text-gray-500 mb-6">
        Adicione alguns produtos incríveis ao seu carrinho
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Continuar Comprando
      </Link>
    </div>
  );

  interface CartItemType {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
  }
  
  const CartItem = ({ item }: { item: CartItemType }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-6 h-[120px]">
        <div className="flex-shrink-0">
          <Image
            src={item.image}
            alt={item.title}
            width={80}
            height={80}
            className="object-contain rounded-md border border-gray-100"
          />
        </div>

        <div className="flex-grow">
          <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Preço unitário: <span className="font-medium">${item.price.toFixed(2)}</span>
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center rounded-md">
              <Button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
                className="p-2 disabled:cursor-not-allowed"
                aria-label="Diminuir quantidade"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                {item.quantity}
              </span>
              <Button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-2 cursor-pointer"
                aria-label="Aumentar quantidade"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold text-lg text-gray-800">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
              <Button
                onClick={() => removeItem(item.id)}
                variant="outline"
                className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                aria-label={`Remover ${item.title} do carrinho`}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar às compras
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Carrinho de Compras</h1>
          {getTotalItems() > 0 && (
            <p className="text-gray-600 mt-2">
              {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'itens'} no carrinho
            </p>
          )}
        </div>

        {getTotalItems() === 0 ? (
          <EmptyCartState />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lista de itens */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Resumo do pedido */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Resumo do Pedido
                </h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({getTotalItems()} itens)</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Frete</span>
                    <span className="text-green-600 font-medium">Grátis</span>
                  </div>
                  
                  <div className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>Total</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors mb-3">
                  Finalizar Compra
                </button>
                
                <button className="w-full border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  Salvar para depois
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;