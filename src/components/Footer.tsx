import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
      
          
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
