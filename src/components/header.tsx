import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { NavigationMenu } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Car, Menu } from 'lucide-react';
import { Link } from '@/components/ui/link';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/book', label: 'Book a Ride' },
    { href: '/rides', label: 'Available Rides' },
    { href: '/drivers', label: 'Become a Driver' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Car className="h-6 w-6" />
          <span className="text-xl font-bold">RideBook</span>
        </div>

        <NavigationMenu className="hidden md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 pt-10">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className="text-lg transition-colors hover:text-primary"
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </Link>
                ))}
                <hr className="my-4" />
                <Button 
                  variant="outline" 
                  asChild 
                  className="w-full"
                  onClick={handleNavClick}
                >
                  <Link href="/signin">Sign In</Link>
                </Button>
                <Button 
                  asChild 
                  className="w-full"
                  onClick={handleNavClick}
                >
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          <ThemeToggle />
          <div className="hidden md:flex md:gap-4">
            <Button variant="outline" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}