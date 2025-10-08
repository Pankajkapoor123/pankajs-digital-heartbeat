import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Built with{" "}
            <Heart className="h-4 w-4 text-accent fill-accent animate-pulse" />{" "}
            and lots of{" "}
            <span className="text-primary font-semibold">coffee</span> ☕
          </p>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} Pankaj Kumar. All rights reserved.
          </p>

          <p className="text-xs text-muted-foreground">
            Designed & Developed with passion | Powered by{" "}
            <span className="text-gradient font-semibold">.NET Core & Angular</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
