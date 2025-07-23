import Link from "next/link";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="bg-transparent text-[#0B4F6C] py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para fazer suas compras?
        </h2>
        <p className="text-[#4B5563] mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de clientes satisfeitos. Frete grátis em compras
          acima de $50.
        </p>
        <Link href="/products">
          <Button
            size="lg"
            className="cursor-pointer bg-[#0B4F6C] text-white hover:bg-[#0A3E54] "
          >
            Começar Agora
          </Button>
        </Link>
      </div>
    </section>
  );
};
