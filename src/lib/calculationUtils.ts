type SettingsType = {
  workRate22k: number;
  workRate14k: number;
  workRate8k: number;
  kdvRate: number;
};

type InputValuesType = {
  hasPrice: number;
  invoiceAmount: number;
};

export interface GoldCalculationType {
  gram: number;
  price: number;
  workmanship: number;
  workmanshipWithKDV: number;
}

export interface Gold24kCalculationType {
  gram: number;
  price: number;
  transfer: number;
  cash: number;
}

export interface CalculationsResultType {
  gold24k: Gold24kCalculationType;
  gold22k: GoldCalculationType;
  gold14k: GoldCalculationType;
  gold8k: GoldCalculationType;
}

// Ceiling to nearest 0.5 multiple
export const ceilToHalf = (num: number): number => {
  return Math.ceil(num * 2) / 2;
};

export const calculateGoldValues = (
  inputs: InputValuesType,
  settings: SettingsType
): CalculationsResultType => {
  const { hasPrice, invoiceAmount } = inputs;
  const { workRate22k, workRate14k, workRate8k, kdvRate } = settings;
  
  const kdvMultiplier = 1 + kdvRate / 100;
  
  // 24K calculations
  const rate24k = 0.995;
  const price24k = parseFloat((hasPrice * rate24k).toFixed(2));
  let gram24k = parseFloat((invoiceAmount / (hasPrice * rate24k)).toFixed(2));
  // Ceiling to nearest 0.5
  gram24k = ceilToHalf(gram24k);
  const transfer24k = invoiceAmount;
  const cash24k = parseFloat(((gram24k * price24k) - invoiceAmount).toFixed(2));
  
  // 22K calculations
  const rate22k = 0.916;
  const price22k = parseFloat((hasPrice * rate22k).toFixed(2));
  const gram22k = parseFloat((
    (invoiceAmount - (invoiceAmount * (workRate22k / 100) * kdvMultiplier)) / 
    (hasPrice * rate22k)
  ).toFixed(2));
  const workmanship22k = parseFloat((
    (invoiceAmount - (price22k * gram22k)) / kdvMultiplier
  ).toFixed(2));
  const workmanshipWithKDV22k = parseFloat((invoiceAmount - (price22k * gram22k)).toFixed(2));
  
  // 14K calculations
  const rate14k = 0.585;
  const price14k = parseFloat((hasPrice * rate14k).toFixed(2));
  const gram14k = parseFloat((
    (invoiceAmount - (invoiceAmount * (workRate14k / 100) * kdvMultiplier)) / 
    (hasPrice * rate14k)
  ).toFixed(2));
  const workmanship14k = parseFloat((
    (invoiceAmount - (price14k * gram14k)) / kdvMultiplier
  ).toFixed(2));
  const workmanshipWithKDV14k = parseFloat((invoiceAmount - (price14k * gram14k)).toFixed(2));
  
  // 8K calculations
  const rate8k = 0.333;
  const price8k = parseFloat((hasPrice * rate8k).toFixed(2));
  const gram8k = parseFloat((
    (invoiceAmount - (invoiceAmount * (workRate8k / 100) * kdvMultiplier)) / 
    (hasPrice * rate8k)
  ).toFixed(2));
  const workmanship8k = parseFloat((
    (invoiceAmount - (price8k * gram8k)) / kdvMultiplier
  ).toFixed(2));
  const workmanshipWithKDV8k = parseFloat((invoiceAmount - (price8k * gram8k)).toFixed(2));
  
  return {
    gold24k: {
      gram: gram24k,
      price: price24k,
      transfer: transfer24k,
      cash: cash24k
    },
    gold22k: {
      gram: gram22k,
      price: price22k,
      workmanship: workmanship22k,
      workmanshipWithKDV: workmanshipWithKDV22k
    },
    gold14k: {
      gram: gram14k,
      price: price14k,
      workmanship: workmanship14k,
      workmanshipWithKDV: workmanshipWithKDV14k
    },
    gold8k: {
      gram: gram8k,
      price: price8k,
      workmanship: workmanship8k,
      workmanshipWithKDV: workmanshipWithKDV8k
    }
  };
};
