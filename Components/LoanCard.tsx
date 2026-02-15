import React from "react";

interface LoanCardProps {
  label?: string;
  value?: string | number | null;
  subtext?: string;
  badge?: string;
  className?: string;
}

const LoanCard = ({
  label = "Home Loan",
  value = "5.24%",
  subtext = "p.a. Fixed",
  badge = "Low Rate",
  className = "",
}: LoanCardProps) => {
  return (
    <div
      className={`glass-card p-5 rounded-3xl shadow-lg border-white w-44 transition-all duration-300 hover:scale-105 hover:bg-white/40 ${className}`}
    >
      <div className="flex justify-between items-start mb-4">
        <p className="text-[10px] font-black text-primary uppercase tracking-widest truncate pr-2">
          {label}
        </p>
        {badge && (
          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[8px] font-bold uppercase border border-primary/20 whitespace-nowrap">
            {badge}
          </span>
        )}
      </div>

      <div className="mb-2">
        <p className="text-3xl font-black text-brown truncate">
          {typeof value === "number" ? `${value}%` : value}
        </p>
        <p className="text-[10px] font-bold text-brown/40 truncate">{subtext}</p>
      </div>
    </div>
  );
};

export default LoanCard;
