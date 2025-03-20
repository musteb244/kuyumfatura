import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import CalculationResult from "./CalculationResult";
import Gold24kResult from "./Gold24kResult";
import { 
  calculateGoldValues, 
  CalculationsResultType 
} from "@/lib/calculationUtils";
import { SettingsProps } from "./SettingsDialog";
import { VisibilitySettings } from "./VisibilityDialog";

interface GoldCalculatorProps {
  settings: SettingsProps;
  visibility: VisibilitySettings;
}

const GoldCalculator: React.FC<GoldCalculatorProps> = ({ settings, visibility }) => {
  const [hasPrice, setHasPrice] = useState<number | "">("");
  const [invoiceAmount, setInvoiceAmount] = useState<number | "">("");
  const [calculations, setCalculations] = useState<CalculationsResultType | null>(null);

  // Default empty calculations to show before user input
  const defaultCalculations: CalculationsResultType = {
    gold24k: { gram: 0, price: 0, transfer: 0, cash: 0 },
    gold22k: { gram: 0, price: 0, workmanship: 0, workmanshipWithKDV: 0 },
    gold14k: { gram: 0, price: 0, workmanship: 0, workmanshipWithKDV: 0 },
    gold8k: { gram: 0, price: 0, workmanship: 0, workmanshipWithKDV: 0 }
  };

  // Load saved hasPrice from localStorage on initial load
  useEffect(() => {
    const savedHasPrice = localStorage.getItem('hasPrice');
    if (savedHasPrice) {
      setHasPrice(parseFloat(savedHasPrice));
    }
  }, []);

  useEffect(() => {
    if (
      typeof hasPrice === "number" && 
      typeof invoiceAmount === "number" && 
      hasPrice > 0 && 
      invoiceAmount > 0
    ) {
      const result = calculateGoldValues(
        { hasPrice, invoiceAmount },
        settings
      );
      setCalculations(result);

      // Save hasPrice to localStorage when it's a valid number
      if (hasPrice > 0) {
        localStorage.setItem('hasPrice', hasPrice.toString());
      }
    } else {
      // Instead of setting to null, set to default values with zeros
      setCalculations(defaultCalculations);
    }
  }, [hasPrice, invoiceAmount, settings]);

  const handleHasPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "" : parseFloat(e.target.value);
    setHasPrice(value);
  };

  const handleInvoiceAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "" : parseFloat(e.target.value);
    setInvoiceAmount(value);
  };

  return (
    <div>
      <div className="glass-panel p-4 mb-4 animate-appear shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label htmlFor="hasPrice" className="input-label">
              HAS FİYATI (₺)
            </label>
            <Input
              id="hasPrice"
              type="number"
              className="input-field"
              placeholder="HAS fiyatını girin"
              value={hasPrice === "" ? "" : hasPrice}
              onChange={handleHasPriceChange}
            />
          </div>
          <div>
            <label htmlFor="invoiceAmount" className="input-label">
              FATURA TUTARI (₺)
            </label>
            <Input
              id="invoiceAmount"
              type="number"
              className="input-field"
              placeholder="Fatura tutarını girin"
              value={invoiceAmount === "" ? "" : invoiceAmount}
              onChange={handleInvoiceAmountChange}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {visibility.show24k && (
          <Gold24kResult
            data={calculations?.gold24k || defaultCalculations.gold24k}
            animationDelay="0ms"
          />
        )}
        {visibility.show22k && (
          <CalculationResult
            title="22 AYAR"
            colorClass="bg-gradient-to-br from-finance-secondary to-finance-surface border-gold-22k/20 text-gold-22k"
            data={calculations?.gold22k || defaultCalculations.gold22k}
            animationDelay="150ms"
          />
        )}
        {visibility.show14k && (
          <CalculationResult
            title="14 AYAR"
            colorClass="bg-gradient-to-br from-finance-secondary to-finance-surface border-gold-14k/20 text-gold-14k"
            data={calculations?.gold14k || defaultCalculations.gold14k}
            animationDelay="300ms"
          />
        )}
        {visibility.show8k && (
          <CalculationResult
            title="8 AYAR"
            colorClass="bg-gradient-to-br from-finance-secondary to-finance-surface border-gold-8k/20 text-gold-8k"
            data={calculations?.gold8k || defaultCalculations.gold8k}
            animationDelay="450ms"
          />
        )}
      </div>
    </div>
  );
};

export default GoldCalculator;
