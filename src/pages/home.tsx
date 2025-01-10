import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Car, Shield, Clock, Award } from 'lucide-react';
import { Suggestions } from '@/components/suggestions';

export function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1800&auto=format&fit=crop&q=80"
            alt="Hero background"
            className="h-full w-full object-cover brightness-50"
          />
        </div>
        <div className="container relative flex h-full flex-col items-center justify-center text-white">
          <h1 className="mb-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
            Your Ride, Your Way
          </h1>
          <p className="mb-8 text-center text-lg md:text-xl">
            Book a ride in minutes, travel in comfort
          </p>
          <Button size="lg" className="text-lg">
            Book a Ride Now
          </Button>
        </div>
      </section>

      {/* Suggestions Section */}
      <Suggestions />

      {/* Features Section */}
      <section className="w-full bg-muted/50 py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Why Choose Us</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: 'Safety First',
                description: 'Verified drivers and secure payments',
              },
              {
                icon: Clock,
                title: 'On-Time',
                description: 'Punctual pickups and efficient routes',
              },
              {
                icon: Car,
                title: 'Quality Vehicles',
                description: 'Well-maintained and comfortable cars',
              },
              {
                icon: Award,
                title: 'Top Rated',
                description: 'Highly rated service and drivers',
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}