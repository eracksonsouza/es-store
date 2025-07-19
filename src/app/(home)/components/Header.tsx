import {
  HomeIcon,
  ListOrderedIcon,
  MenuIcon,
  PercentCircleIcon,
  ShoppingCartIcon,
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


const Header = () => {
  return (
    <Card className="flex items-center flex-col md:flex-row justify-between p-4 shadow-md">
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
              <Button variant="outline" className="w-full justify-start gap-2">
                <HomeIcon size={16} />
                Home
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" className="w-full justify-start gap-2">
                <PercentCircleIcon size={16} />
                Products
              </Button>
            </Link>
            <Link href="/categories">
              <Button variant="outline" className="w-full justify-start gap-2">
                <ListOrderedIcon size={16} />
                Categories
              </Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Link href="/" className="flex items-center gap-2 mb-4 md:mb-0">
    
      <h1 className="text-lg font-semibold">
        <span className="text-purple-900">ES Store</span>
      </h1>
      </Link>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
