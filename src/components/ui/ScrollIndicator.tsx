import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      aria-label="Scroll down"
      role="img"
    >
      <ChevronDown className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer" />
    </div>
  );
};

export default ScrollIndicator;
