// Helper function to calculate years of experience dynamically
export const calculateYearsExperience = (startYear: number): number => {
  const currentYear = new Date().getFullYear();
  const years = currentYear - startYear;
  return Math.max(1, years); // Round up to 1 year minimum
};

// Helper function to format years text (1 year vs 2 years)
export const formatYearsText = (years: number): string => {
  return years === 1 ? '1 year' : `${years} years`;
};
