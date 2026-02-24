import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const handleClick = () => {
    const next = document.getElementById("about");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 opacity-40 hover:opacity-80 transition-opacity duration-300"
      style={{ animation: "slowBounce 2s ease-in-out infinite" }}
      aria-label="Scroll to next section"
    >
      <ChevronDown className="w-5 h-5 text-foreground" strokeWidth={1.5} />
    </button>
  );
};

export default ScrollIndicator;
