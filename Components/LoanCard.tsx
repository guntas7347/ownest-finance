import React from "react";

const LoanCard = () => {
  return (
    <div
      className="glass-card p-5 rounded-3xl shadow-lg border-white w-44
      "
    >
      <div className="flex justify-between items-start mb-4">
        <p className="text-[10px] font-black text-primary uppercase tracking-widest">
          Home Loan
        </p>
        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[8px] font-bold uppercase border border-primary/20">
          Low Rate
        </span>
      </div>

      <div className="mb-2">
        <p className="text-3xl font-black text-brown">5.24%</p>
        <p className="text-[10px] font-bold text-brown/40">p.a. Fixed</p>
      </div>
    </div>
  );
};

export default LoanCard;
