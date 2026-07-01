import { useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeBook from "@/components/misc/RecipeBook";
import { SITE_NAME } from "@/lib/utils";

const Miscellany = () => {
  useEffect(() => {
    document.title = `Miscellany — ${SITE_NAME}`;
    return () => {
      document.title = SITE_NAME;
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Link
        to="/"
        aria-label="Back to site"
        style={{
          position: "fixed",
          top: 14,
          left: 14,
          zIndex: 100,
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.04em",
          color: "#6B5D4E",
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(4px)",
          border: "1px solid #E8E0D4",
          borderRadius: 999,
          padding: "6px 14px",
          textDecoration: "none",
        }}
      >
        ← {SITE_NAME}
      </Link>
      <RecipeBook />
    </div>
  );
};

export default Miscellany;
