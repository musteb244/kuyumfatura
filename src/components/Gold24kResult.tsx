import React from "react";
import { Gold24kCalculationType } from "@/lib/calculationUtils";

interface Gold24kResultProps {
  data: Gold24kCalculationType;
  animationDelay: string;
}

const Gold24kResult: React.FC<Gold24kResultProps> = ({ data, animationDelay }) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('tr-TR', { 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    }).format(num);
  };

  return (
    <div 
      className="gold-card bg-gradient-to-br from-[#1E2230] to-[#151A23] border-gold-24k/20 animate-appear shadow-lg" 
      style={{ animationDelay }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold" style={{ color: '#37e8da' }}>24 AYAR</h3>
        <div className="h-3 w-3 rounded-full bg-gradient-to-br from-gold-24k to-blue-400 animate-pulse-subtle"></div>
      </div>
      
      <div className="space-y-1">
        <div className="calculation-row">
          <span className="calculation-label w-32 text-left">24K GRAMI</span>
          <span className="calculation-value">{formatNumber(data.gram)}</span>
        </div>
        
        <div className="calculation-row">
          <span className="calculation-label w-32 text-left">24K FİYATI</span>
          <span className="calculation-value">{formatNumber(data.price)}</span>
        </div>
        
        <div className="calculation-row">
          <span className="calculation-label w-32 text-left">HAVALE</span>
          <span className="calculation-value">{formatNumber(data.transfer)}</span>
        </div>
        
        <div className="calculation-row">
          <span className="calculation-label w-32 text-left">NAKİT</span>
          <span className="calculation-value">{formatNumber(data.cash)}</span>
        </div>
      </div>
    </div>
  );
};

export default Gold24kResult;
