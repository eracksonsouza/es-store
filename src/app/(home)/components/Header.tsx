import {
  HomeIcon,
  ListOrderedIcon,
  MenuIcon,
  PercentCircleIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import CartIcon from "@/components/cart/CartIcon";
import Image from "next/image";

const Header = () => {
  return (
    <Card className="flex items-center flex-col md:flex-row justify-between p-4 shadow-md">
      <div className="flex w-full justify-between items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Navegue pelas páginas do site</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-2 mt-2">
              <Link href="/">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <HomeIcon size={16} />
                  Home
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <PercentCircleIcon size={16} />
                  Products
                </Button>
              </Link>
              <Link href="/categories">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <ListOrderedIcon size={16} />
                  Categories
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2 mb-4 md:mb-0">
          <Image
            src="/es-store.png"
            alt="ES Store Logo"
            width={100}
            height={100}
            className="object-contain"
          />
          <h1 className="text-lg font-semibold"></h1>
        </Link>
        <CartIcon />
      </div>
    </Card>
  );
};

export default Header;
