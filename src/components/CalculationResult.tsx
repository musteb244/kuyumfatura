import React from "react";
import { GoldCalculationType } from "@/lib/calculationUtils";

interface CalculationResultProps {
  title: string;
  colorClass: string;
  data: GoldCalculationType;
  animationDelay: string;
}

const CalculationResult: React.FC<CalculationResultProps> = ({
  title,
  colorClass,
  data,
  animationDelay,
}) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('tr-TR', { 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    }).format(num);
  };

  // Extract the karat value (e.g. "22" from "22 AYAR")
  const karat = title.split(" ")[0];

  return (
    <div 
      className={`gold-card ${colorClass} animate-appear shadow-lg`} 
      style={{ animationDelay }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <div 
          className={`h-3 w-3 rounded-full bg-gradient-to-br from-${colorClass} to-amber-400 animate-pulse-subtle`}>
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="calculation-row">
          <span className="calculation-label w-32 text-left">{karat}K GRAMI</span>
          <span className="calculation-value">{formatNumber(data.gram)}</span>
        </div>
        
        <div className="calculation-row">
          <span className="calculation-label w-32 text-left">{karat}K FİYATI</span>
          <span className="calculation-value">{formatNumber(data.price)}</span>
        </div>
        
        <div className="calculation-row">
          <span className="calculation-label w-32 text-left">{karat}K İŞÇİLİK</span>
          <span className="calculation-value">{formatNumber(data.workmanship)}</span>
        </div>
        
        <div className="calculation-row">
          <span className="calculation-label w-32 text-left">İŞÇİLİK+KDV</span>
          <span className="calculation-value">{formatNumber(data.workmanshipWithKDV)}</span>
        </div>
      </div>
    </div>
  );
};

export default CalculationResult;
