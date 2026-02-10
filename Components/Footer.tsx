import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white/90 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <img src="/ownest-t.png" alt="" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Ownest Finance
              </span>
            </div>
            <p className="max-w-md text-white/60 leading-relaxed">
              Redefining the architecture of modern wealth. We provide the
              capital and the clarity needed to navigate complex financial
              landscapes.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
              >
                <img
                  className="w-5 h-5 invert"
                  data-alt="Social media twitter icon"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh5yLzDEt1qEvtgtdyvkMRW2hQ1jyhFO9N08VBNLTJaDx78gPYrlKSlawrvLYingKaC64SZHU5GvkP1YrOXrKDBRFp_8HJu_fKiy2B4szGYoabITTtweA7fCoFeWqoo2Rzy2AuAL93eQ-R1bM52zpnqJ8eIEGwk8zNubgLqFCNY3tREV4MWlbgPrKOWgtlBRIf25wcK-XnMkzOOHqhV7khCulO2KELMu5kt1hDdMSDSP3DUoWdGmW0tW6apU6fU8sJnCfEo0w4-YCf"
                />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
              >
                <img
                  className="w-5 h-5 invert"
                  data-alt="Social media linkedin icon"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAtyceKYzFFWwRe_Y_0fgd7pX9YzU7ajhIRPyGwmoTXmAiPCGAu2OjQTFXZFo9sERrDlQF8co1EUTkIsDtMClhWZq7d80gFWVXUx4EDKgTXu3ctAltZGLkB_YRUMFO5BjUSWRr9JlFLpzVmmL7uZb71-YW4hMCB6cG6VQYOSGEopNhbQgLdAe30QrtJkP7sZDDvOG-LzSE1WNv7AZ3g8XIHvCuVuWJ-QRmOSzfSoV3OONQVYbutZPNn87QU78loK-D5m0riwbOPYaq"
                />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                href="#"
              >
                <img
                  className="w-5 h-5 invert"
                  data-alt="Social media instagram icon"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhYjcTNN-YaNYR1uznMCg2L5NOzWm3DYab1_ss_W5Lwr9k2VVi32TKvTmaQ6N95YGydrrWdmYDbw9Kb-CbMpiPlmNbjIgYRT3lWUijUoD9Z1asuVVaoHL9ogNqDQaJu8NXr9sBXa_z_UQUOqgK56p2u0XP7TcH2cafqIef2OIQJziK9XHmwCbG1ZxxWBHoWFpSnLbHUi2a5JL8YURcJOAIl-WLNkLOZCPpdRrAqpoSt-Nv2KO1icmbuzX3tmzP7dpFqBhreGHgsuR5"
                />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">
              Solutions
            </h4>
            <ul className="space-y-4 text-white/50 font-medium">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Asset Loans
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Home Financing
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Bridge Loans
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Wealth Management
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">
              Company
            </h4>
            <ul className="space-y-4 text-white/50 font-medium">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Our Story
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Expert Team
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>© 2026 Ownest Finance. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Credit License: #493021</span>
            <span>ABN: 12 345 678 910</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
