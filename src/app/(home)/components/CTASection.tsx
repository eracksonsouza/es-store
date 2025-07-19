import Link from "next/link";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para fazer suas compras?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de clientes satisfeitos. Frete grátis em compras
          acima de $50.
        </p>
        <Link href="/products">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Começar Agora
          </Button>
        </Link>
      </div>
    </section>
  );
};
