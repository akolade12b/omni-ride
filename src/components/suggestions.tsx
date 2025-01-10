import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, Package, Calendar } from 'lucide-react';

export function Suggestions() {
  const suggestions = [
    {
      title: 'Ride',
      description: 'Go anywhere with RideBook. Request a ride, hop in, and go.',
      icon: Car,
      image: 'https://images.unsplash.com/photo-1511994477422-b69e44bd4ea9?q=80&w=1379&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Courier',
      description: 'Same-day delivery made easier than ever.',
      icon: Package,
      image: 'https://plus.unsplash.com/premium_photo-1661907153090-93759d68acb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291cmllcnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Reserve',
      description: 'Reserve your ride in advance so you can relax on the day of your trip.',
      icon: Calendar,
      image: 'https://cn-geo1.uber.com/static/mobile-content/uber_reserve/reserve_clock.png',
    },
  ];

  return (
    <section className="w-full py-12">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold">Suggestions</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {suggestions.map((suggestion, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video w-full">
                <img
                  src={suggestion.image}
                  alt={suggestion.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <suggestion.icon className="h-5 w-5" />
                  {suggestion.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{suggestion.description}</p>
                <Button variant="outline" className="w-full">
                  Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}