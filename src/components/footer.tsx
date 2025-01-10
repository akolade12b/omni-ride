import { Link } from '@/components/ui/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Car, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Book a Ride', href: '/book' },
    { label: 'Available Rides', href: '/rides' },
    { label: 'Become a Driver', href: '/drivers' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Car className="h-6 w-6" />
              <span className="text-xl font-bold">RideBook</span>
            </div>
            <p className="text-muted-foreground">
              Your trusted ride-sharing platform. Safe, reliable, and always available.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              {['Help Center', 'Safety', 'Terms of Service', 'Privacy Policy', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input className="pl-10" placeholder="Enter your email" type="email" />
              </div>
              <Button size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12">
          <Separator className="mb-8" />
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} RideBook. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="#">Terms</Link>
              <Link href="#">Privacy</Link>
              <Link href="#">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}