import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container py-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h1 className="mb-4 text-3xl font-bold">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We're here to help. Send us a message and we'll
              respond as soon as possible.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Phone,
                title: 'Phone',
                content: '+1 (555) 123-4567',
                description: 'Mon-Fri from 8am to 6pm',
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'support@ridebook.com',
                description: '24/7 support for urgent matters',
              },
              {
                icon: MapPin,
                title: 'Office',
                content: '123 Ride Street, San Francisco, CA 94105',
                description: 'Visit us for in-person support',
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="flex items-start space-x-4 p-6">
                  <item.icon className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-primary">{item.content}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
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
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}