import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const handleClick = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 animate-bounce text-muted-foreground hover:text-foreground transition-colors duration-200"
      aria-label="Scroll down"
    >
      <ChevronDown className="w-6 h-6" />
    </button>
  );
};

export default ScrollIndicator;
