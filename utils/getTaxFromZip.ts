import StateTaxRates from "../data/StateTaxRates";
import StateZipCodes from "../data/StateZipCodes";

const getTaxFromZip = (zip: number): number => {
  let totalTax: number = 0;

  for (const [key, value] of Object.entries(StateZipCodes)) {
    //getting state from zip code
    if (Array.isArray(value[0])) {
      value.forEach((subarray: any) => {
        if (zip > subarray[0] && zip < subarray[1]) {
          totalTax = StateTaxRates[key as keyof typeof StateTaxRates];
          return totalTax;
        }
      });
    } else {
      if (zip > value[0] && zip < value[1]) {
        totalTax = StateTaxRates[key as keyof typeof StateTaxRates];
        return totalTax;
      }
    }
  }

  return totalTax;
};

export default getTaxFromZip;
