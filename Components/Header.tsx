import React from "react";

const Header = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-6 py-3 rounded-full shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <img src="/ownest-t.png" alt="" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-brown">
            Ownest Finance
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a
            className="text-brown hover:text-primary transition-colors"
            href="#"
          >
            Asset Loan
          </a>
          <a
            className="text-brown hover:text-primary transition-colors"
            href="#"
          >
            Other Loans
          </a>
          <a
            className="text-brown hover:text-primary transition-colors"
            href="#"
          >
            About
          </a>
          <a
            className="text-brown hover:text-primary transition-colors"
            href="#"
          >
            Resources
          </a>
        </div>
        <button className="bg-primary hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-full transition-all shadow-lg shadow-orange-500/20 active:scale-95">
          Get Free Consultation
        </button>
      </div>
    </nav>
  );
};

export default Header;
