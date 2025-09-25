import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Target, Heart, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-muted to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              About ADT Logistix
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Born from humble beginnings in Brampton, ON, we've built our reputation on 
              providing professional, low-cost transportation with a personal touch.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  ADT Logistix was born from humble beginnings in Brampton, ON. We started with a 
                  simple but powerful idea: offer professional, low-cost transportation where the 
                  customer doesn't have to lift a finger.
                </p>
                <p>
                  From quote to delivery, we handle every detail — so you can focus on your business. 
                  Our founders recognized that in an industry dominated by large, impersonal carriers, 
                  there was a real need for a service that combined professional expertise with 
                  personal attention.
                </p>
                <p>
                  Today, we continue to serve businesses across Ontario with the same commitment to 
                  excellence and personal service that started it all. Every shipment is important 
                  to us, and every customer becomes part of the ADT Logistix family.
                </p>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <Card className="p-8 bg-accent/5 border-accent/20">
                <div className="text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                    <Truck className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Professional Service, Personal Touch
                  </h3>
                  <p className="text-muted-foreground">
                    We believe that logistics should be simple for our customers. That's why we 
                    handle everything from start to finish, giving you peace of mind and more 
                    time to focus on what matters most.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="p-8 text-center bg-card border-border">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Customer First
              </h3>
              <p className="text-muted-foreground">
                Every decision we make is with our customers in mind. Your success is our success, 
                and we're committed to being your trusted logistics partner.
              </p>
            </Card>

            <Card className="p-8 text-center bg-card border-border">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Reliability
              </h3>
              <p className="text-muted-foreground">
                We understand that your business depends on timely, secure delivery. Our commitment 
                to reliability means you can count on us, every time.
              </p>
            </Card>

            <Card className="p-8 text-center bg-card border-border">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Personal Touch
              </h3>
              <p className="text-muted-foreground">
                We're not just another logistics company. We build relationships, provide direct 
                communication, and treat your business like our own.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Experience You Can Trust
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team brings years of logistics experience and a commitment to excellence 
              in everything we do.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-semibold text-primary-foreground mb-6">
              Ready to Experience the ADT Logistix Difference?
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Let us show you what personalized freight service looks like. Get your 
              competitive quote today.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;