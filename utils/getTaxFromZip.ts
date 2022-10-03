import states from "../data/states";
import taxRates from "../data/taxRates";

const getTaxFromZip = (zip: number): number => {
  let totalTax: number = 0;

  for (const [key, value] of Object.entries(states)) {
    //getting state from zip code
    if (Array.isArray(value[0])) {
      value.forEach((subarray: any) => {
        if (zip > subarray[0] && zip < subarray[1]) {
          totalTax = taxRates[key as keyof typeof taxRates];
          return totalTax;
        }
      });
    } else {
      if (zip > value[0] && zip < value[1]) {
        totalTax = taxRates[key as keyof typeof taxRates];
        return totalTax;
      }
    }
  }

  return totalTax;
};

export default getTaxFromZip;
