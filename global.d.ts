// global.d.ts

interface Window {
  Cypress: any; // Adjust the type as needed
  onPercentageChange: (percentage: number) => void;
}
