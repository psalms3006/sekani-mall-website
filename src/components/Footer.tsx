const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-lg font-bold">
        Earlz<span className="text-primary">.</span>
      </p>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Earlz Kitchen. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
