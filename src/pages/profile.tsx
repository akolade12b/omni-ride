import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export function Profile() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingRides = [
    {
      id: 1,
      date: '2024-03-20',
      time: '14:30',
      from: '123 Main St',
      to: '456 Market St',
      status: 'scheduled',
    },
    // Add more rides as needed
  ];

  const pastRides = [
    {
      id: 2,
      date: '2024-03-15',
      time: '09:00',
      from: '789 Oak St',
      to: '321 Pine St',
      status: 'completed',
    },
    // Add more rides as needed
  ];

  return (
    <div className="container space-y-8 py-8">
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-muted-foreground">john.doe@example.com</p>
        </div>
      </div>

      {/* Profile Content */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Profile Details */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Profile Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john.doe@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
            </div>
            <Button className="w-full">Update Profile</Button>
          </CardContent>
        </Card>

        {/* Rides History */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Your Rides</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full">
                <TabsTrigger value="upcoming" className="flex-1">
                  Upcoming Rides
                </TabsTrigger>
                <TabsTrigger value="past" className="flex-1">
                  Past Rides
                </TabsTrigger>
              </TabsList>
              <TabsContent value="upcoming" className="space-y-4">
                {upcomingRides.map((ride) => (
                  <Card key={ride.id}>
                    <CardContent className="flex items-center justify-between p-4">
                      <div>
                        <p className="font-semibold">
                          {ride.date} at {ride.time}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          From: {ride.from}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          To: {ride.to}
                        </p>
                      </div>
                      <Badge>{ride.status}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="past" className="space-y-4">
                {pastRides.map((ride) => (
                  <Card key={ride.id}>
                    <CardContent className="flex items-center justify-between p-4">
                      <div>
                        <p className="font-semibold">
                          {ride.date} at {ride.time}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          From: {ride.from}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          To: {ride.to}
                        </p>
                      </div>
                      <Badge variant="secondary">{ride.status}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}