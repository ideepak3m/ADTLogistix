import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Truck, Clock, Shield, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/logistics-hero.jpg";
import ltlIcon from "@/assets/ltl-icon.jpg";
import fullLoadIcon from "@/assets/full-load-icon.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
              Reliable Freight Solutions Across Ontario
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/90 max-w-2xl">
              LTL & Full Load Services with a Personal Touch. Professional, low-cost transportation 
              where you don't have to lift a finger.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Phone className="h-4 w-4 mr-2" />
                647-559-4533
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From small shipments to full truckloads, we provide reliable freight solutions 
              tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="p-8 bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <img 
                  src={ltlIcon} 
                  alt="LTL Service" 
                  className="w-16 h-16 rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-card-foreground">
                    LTL (Less Than Truckload)
                  </h3>
                  <p className="text-muted-foreground">Cost-effective shipping</p>
                </div>
              </div>
              <p className="text-card-foreground/80 mb-6">
                Perfect for smaller shipments that don't require a full truck. Share space with other 
                shipments and save money while still receiving professional service and reliable delivery.
              </p>
              <ul className="space-y-2 text-card-foreground/80">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Cost-effective for smaller loads
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Flexible pickup and delivery
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Professional handling
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <img 
                  src={fullLoadIcon} 
                  alt="Full Load Service" 
                  className="w-16 h-16 rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-card-foreground">
                    Full Load
                  </h3>
                  <p className="text-muted-foreground">Dedicated transport</p>
                </div>
              </div>
              <p className="text-card-foreground/80 mb-6">
                Dedicated truck and driver for your large shipments. Direct transport from pickup 
                to delivery with no stops in between, ensuring fast and secure transportation.
              </p>
              <ul className="space-y-2 text-card-foreground/80">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Dedicated truck for your shipment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Faster transit times
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Maximum security
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose ADT Logistix?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing exceptional service that sets us apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">On-Time Delivery</h3>
              <p className="text-muted-foreground">
                We understand that timing is critical. Our reliable network ensures your shipments 
                arrive when promised.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Secure Handling</h3>
              <p className="text-muted-foreground">
                Your cargo is treated with the utmost care. We maintain the highest standards 
                of security and handling.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Truck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Personal Service</h3>
              <p className="text-muted-foreground">
                Unlike large carriers, we provide personalized attention and direct communication 
                throughout the shipping process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl mb-6">
            Ready to Ship with ADT Logistix?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Get a competitive quote today and experience the difference of personalized freight service.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Your Quote Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;