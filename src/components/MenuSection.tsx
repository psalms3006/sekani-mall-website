import jollofImg from "@/assets/menu-jollof.jpg";
import gizdodoImg from "@/assets/menu-gizdodo.jpg";
import friedriceImg from "@/assets/menu-friedrice.jpg";

const menuItems = [
  {
    name: "Smoky Jollof Rice",
    description: "Our signature smoky jollof with grilled chicken and fried plantains",
    price: "₦2,500",
    image: jollofImg,
  },
  {
    name: "Gizdodo",
    description: "Tender gizzard and sweet plantain in rich pepper sauce",
    price: "₦2,000",
    image: gizdodoImg,
  },
  {
    name: "Fried Rice Combo",
    description: "Seasoned fried rice with vegetables, chicken, and coleslaw",
    price: "₦3,000",
    image: friedriceImg,
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24">
      <div className="container mx-auto px-6">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
          Our Menu
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Taste the <span className="text-gradient">Difference</span>
        </h2>
        <p className="text-muted-foreground max-w-md mb-16">
          From smoky jollof to creamy salads — every dish is crafted with fresh, local ingredients.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-semibold">{item.name}</h3>
                  <span className="text-primary font-body font-semibold">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
