import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    value: "Close to FUTO Back Gate, Shop 3 Stellamaris Hostel, By Overcomers Street, Owerri",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0704 746 1178",
    href: "tel:+2347047461178",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Opens 9 AM daily",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@earlzkitchen",
    href: "https://instagram.com",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
              Find Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Visit <span className="text-gradient">Earlz</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md">
              We offer dine-in, drive-through, and delivery. Place your order on WhatsApp for fast service.
            </p>
            <Button size="lg" className="rounded-full px-8" asChild>
              <a href="https://wa.me/2347047461178" target="_blank" rel="noopener noreferrer">
                Order Now on WhatsApp
              </a>
            </Button>
          </div>

          <div className="space-y-6">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-foreground text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
