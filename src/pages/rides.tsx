import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, MapPin, Car as CarIcon } from 'lucide-react';

interface Driver {
  id: number;
  name: string;
  age: number;
  experience: string;
  rating: number;
  trips: number;
  avatar: string;
  car: {
    model: string;
    year: number;
    type: string;
    color: string;
    plate: string;
  };
  location: string;
  price: string;
  available: boolean;
}

const drivers: Driver[] = [
  {
    id: 1,
    name: "John Smith",
    age: 32,
    experience: "5 years",
    rating: 4.8,
    trips: 3240,
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60",
    car: {
      model: "Toyota Camry",
      year: 2021,
      type: "Sedan",
      color: "Silver",
      plate: "ABC 123"
    },
    location: "Downtown",
    price: "$15-20",
    available: true
  },
  {
    id: 2,
    name: "Sarah Johnson",
    age: 28,
    experience: "3 years",
    rating: 4.9,
    trips: 2150,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    car: {
      model: "Honda Accord",
      year: 2022,
      type: "Sedan",
      color: "Black",
      plate: "XYZ 789"
    },
    location: "Uptown",
    price: "$18-25",
    available: true
  },
  {
    id: 3,
    name: "Michael Chen",
    age: 35,
    experience: "7 years",
    rating: 4.7,
    trips: 5430,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
    car: {
      model: "Tesla Model 3",
      year: 2023,
      type: "Electric",
      color: "White",
      plate: "EV 456"
    },
    location: "Midtown",
    price: "$25-30",
    available: true
  },
  {
    id: 4,
    name: "Emily Davis",
    age: 30,
    experience: "4 years",
    rating: 4.9,
    trips: 2890,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60",
    car: {
      model: "BMW 5 Series",
      year: 2022,
      type: "Luxury",
      color: "Blue",
      plate: "LUX 777"
    },
    location: "West End",
    price: "$30-40",
    available: false
  }
];

export function Rides() {
  return (
    <div className="container py-8">
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl font-bold">Available Rides</h1>
        <p className="text-lg text-muted-foreground">Choose from our selection of professional drivers</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {drivers.map((driver) => (
          <Card key={driver.id} className="group overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="border-b bg-muted/50 p-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 ring-2 ring-primary ring-offset-2">
                  <AvatarImage src={driver.avatar} alt={driver.name} />
                  <AvatarFallback>{driver.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <CardTitle className="flex items-center gap-2">
                    {driver.name}
                    {!driver.available && (
                      <Badge variant="secondary">Busy</Badge>
                    )}
                  </CardTitle>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">{driver.rating}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{driver.trips} trips</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="grid gap-4 p-6">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{driver.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CarIcon className="h-4 w-4 text-muted-foreground" />
                  <span>{driver.car.model} ({driver.car.year})</span>
                </div>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <div className="mb-2 font-semibold">Driver Details</div>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Age</span>
                    <span>{driver.age} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span>{driver.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Vehicle Type</span>
                    <span>{driver.car.type}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">{driver.price}</div>
                  <div className="text-sm text-muted-foreground">Estimated fare</div>
                </div>
                <Button
                  className="transition-transform group-hover:scale-105"
                  disabled={!driver.available}
                >
                  {driver.available ? 'Book Now' : 'Unavailable'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}