import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Clock, Award } from 'lucide-react';

export function About() {
  return (
    <div className="container space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="mb-4 text-4xl font-bold">About RideBook</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          We're revolutionizing urban transportation with a mission to provide
          safe, reliable, and affordable rides for everyone.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              To transform transportation by connecting riders with reliable
              drivers, making every journey safe, comfortable, and affordable.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
            <p className="text-muted-foreground">
              To be the most trusted transportation platform globally, setting new
              standards for safety, reliability, and innovation.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Key Features */}
      <section>
        <h2 className="mb-8 text-center text-3xl font-bold">Why Choose Us</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              icon: Shield,
              title: 'Safety First',
              description:
                'Verified drivers, secure payments, and 24/7 customer support',
            },
            {
              icon: Users,
              title: 'Community Driven',
              description:
                'Building connections between riders and drivers in your city',
            },
            {
              icon: Clock,
              title: 'Always Available',
              description:
                'Round-the-clock service to get you where you need to go',
            },
            {
              icon: Award,
              title: 'Quality Service',
              description:
                'Committed to providing the best riding experience possible',
            },
          ].map((feature, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <feature.icon className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="rounded-lg bg-primary p-8 text-primary-foreground">
        <div className="grid gap-8 text-center md:grid-cols-4">
          {[
            { label: 'Active Users', value: '1M+' },
            { label: 'Cities', value: '100+' },
            { label: 'Drivers', value: '50K+' },
            { label: 'Rides Completed', value: '10M+' },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold">{stat.value}</div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="mb-8 text-center text-3xl font-bold">Our Journey</h2>
        <div className="space-y-4">
          {[
            {
              year: '2020',
              title: 'Company Founded',
              description: 'Started operations in San Francisco',
            },
            {
              year: '2021',
              title: 'Rapid Expansion',
              description: 'Expanded to 50 cities across the country',
            },
            {
              year: '2022',
              title: 'Innovation Award',
              description: 'Recognized for transportation innovation',
            },
            {
              year: '2023',
              title: 'Global Launch',
              description: 'Launched operations in international markets',
            },
          ].map((milestone, index) => (
            <Card key={index}>
              <CardContent className="flex items-center gap-4 p-4">
                <Badge variant="secondary" className="h-fit">
                  {milestone.year}
                </Badge>
                <div>
                  <h3 className="font-semibold">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}