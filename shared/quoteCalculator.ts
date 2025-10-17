import type { PricingTier, PayrollPackage, AdditionalService } from "./schema";

export interface QuoteInput {
  businessTypeId: number;
  turnover: string;
  employeeCount: number;
  payrollPackageId?: number;
  additionalServiceIds: number[];
}

export interface QuoteCalculation {
  basePrice: number;
  payrollPrice: number;
  additionalServicesTotal: number;
  subtotal: number;
  vatAmount: number;
  grandTotal: number;
}

const VAT_RATE = 0.20; // 20% VAT

/**
 * Parse price string to number (handles "POA", "£XXX", "XXX" formats)
 */
export function parsePrice(priceStr: string): number {
  if (!priceStr || priceStr.toLowerCase() === 'poa') {
    return 0;
  }
  
  // Remove £ and commas, then parse
  const cleaned = priceStr.replace(/[£,]/g, '').trim();
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? 0 : parsed;
}

/**
 * Format number as price string
 */
export function formatPrice(amount: number): string {
  return amount.toFixed(2);
}

/**
 * Calculate quote totals based on selected services
 */
export function calculateQuote(
  input: QuoteInput,
  pricingTiers: PricingTier[],
  payrollPackages: PayrollPackage[],
  additionalServices: AdditionalService[]
): QuoteCalculation {
  // Find base price from pricing tier
  const tier = pricingTiers.find(
    t => t.businessTypeId === input.businessTypeId && t.turnover === input.turnover
  );
  const basePrice = tier ? parsePrice(tier.price) : 0;

  // Find payroll price
  let payrollPrice = 0;
  if (input.payrollPackageId) {
    const pkg = payrollPackages.find(p => p.id === input.payrollPackageId);
    if (pkg) {
      payrollPrice = parsePrice(pkg.price);
    }
  }

  // Calculate additional services total
  let additionalServicesTotal = 0;
  if (input.additionalServiceIds.length > 0) {
    for (const serviceId of input.additionalServiceIds) {
      const service = additionalServices.find(s => s.id === serviceId);
      if (service) {
        additionalServicesTotal += parsePrice(service.price);
      }
    }
  }

  // Calculate totals
  const subtotal = basePrice + payrollPrice + additionalServicesTotal;
  const vatAmount = subtotal * VAT_RATE;
  const grandTotal = subtotal + vatAmount;

  return {
    basePrice,
    payrollPrice,
    additionalServicesTotal,
    subtotal,
    vatAmount,
    grandTotal,
  };
}
