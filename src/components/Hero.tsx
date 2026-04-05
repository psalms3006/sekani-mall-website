import heroImage from "@/assets/hero-food.jpg";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Earlz Kitchen Nigerian food spread"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      </div>

      <div className="relative container mx-auto px-6 pb-20 pt-40">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-up">
          Restaurant · Owerri
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Earlz <span className="text-gradient">Kitchen</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Authentic Nigerian flavors — smoky jollof, gizdodo, and more. Made with love near FUTO.
        </p>

        <div className="flex flex-wrap gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Close to FUTO Back Gate, Owerri</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span>Opens 9 AM daily</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Phone className="w-4 h-4 text-primary" />
            <span>0704 746 1178</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" className="rounded-full px-8" asChild>
            <a href="https://wa.me/2347047461178" target="_blank" rel="noopener noreferrer">
              Order on WhatsApp
            </a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
            <a href="#menu">View Menu</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
