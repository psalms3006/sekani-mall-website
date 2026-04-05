import { Star } from "lucide-react";

const reviews = [
  {
    name: "Mmesoma Aribe-madu",
    rating: 5,
    text: "One of the cozy food places located in Ihiagwa FUTO. At Earlz, you'll get to order and enjoy varieties of food ranging from smoky Jollof rice, Fried rice, jambalaya rice, etc. Also with great customer service.",
    time: "3 years ago",
  },
  {
    name: "Ekeoma Ndulaka",
    rating: 3,
    text: "Delivery takes toooooo long. Repeatedly said the rider was on his way for an hour when I live 5 minutes away.",
    time: "4 months ago",
  },
  {
    name: "Chiedo Chigoziem",
    rating: 4,
    text: "I have heard much about them. Great food and they've definitely improved their customer care response times.",
    time: "2 years ago",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Reviews
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What People <span className="text-gradient">Say</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="font-display text-5xl font-bold text-primary">4.4</span>
            <div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
                <Star className="w-5 h-5 fill-primary/40 text-primary/40" />
              </div>
              <p className="text-muted-foreground text-sm mt-1">19 reviews</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-card rounded-2xl p-6 border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <p className="font-body font-semibold text-sm">{review.name}</p>
                <p className="text-muted-foreground text-xs">{review.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
