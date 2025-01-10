import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, DollarSign, Clock, Shield } from 'lucide-react';

export function Drivers() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle driver registration
  };

  return (
    <div className="container space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Drive with Us</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Join our platform and earn money on your own schedule. Be your own boss
          and choose when and where you want to drive.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="grid gap-8 md:grid-cols-4">
        {[
          {
            icon: DollarSign,
            title: 'Earn More',
            description: 'Competitive rates and keep more of your earnings',
          },
          {
            icon: Clock,
            title: 'Flexible Hours',
            description: 'Work whenever you want, no minimum hours required',
          },
          {
            icon: Shield,
            title: 'Safe & Secure',
            description: 'We prioritize your safety with verified riders',
          },
          {
            icon: Car,
            title: 'Your Car, Your Rules',
            description: 'Use your own vehicle and maintain independence',
          },
        ].map((benefit, index) => (
          <Card key={index} className="relative overflow-hidden">
            <div className="absolute right-2 top-2">
              <benefit.icon className="h-12 w-12 text-muted-foreground/20" />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Requirements Section */}
      <section className="rounded-lg bg-muted p-8">
        <h2 className="mb-6 text-2xl font-bold">Requirements</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm">
              Valid driver's license
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Clean driving record
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Vehicle insurance
            </Badge>
          </div>
          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm">
              21 years or older
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Smartphone with data plan
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Background check clearance
            </Badge>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Start Driving Today</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="carDetails">Car Details</Label>
                <Input id="carDetails" placeholder="Year, Make, Model" required />
              </div>

              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}