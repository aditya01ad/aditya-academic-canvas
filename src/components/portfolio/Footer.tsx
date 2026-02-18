const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aditya · Built with purpose
        </p>
      </div>
    </footer>
  );
};

export default Footer;
