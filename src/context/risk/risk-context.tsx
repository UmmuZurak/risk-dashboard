import { createContext, useContext, useEffect, useState } from "react";
import { TABLE_DATA } from "../../pages/risk/lib/mock-data/mock-data";
import type { Finding } from "../../pages/risk/lib/types/types";

// Create a context for managing risk data and search functionality
const RiskContext = createContext<{
  filteredData: Finding[];
  handleSearch: (searchTerm: string) => void;
}>({
  filteredData: [],
  handleSearch: () => {},
});

// This hook provides access to the RiskContext
export const useRiskContext = () => useContext(RiskContext);

const RiskProvider = ({ children }: { children: React.ReactNode }) => {
  // State to hold the search term and filtered data
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(TABLE_DATA);

  // Function to handle search input changes
  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm);
  };

  // Listen for search changes and filter data accordingly
  useEffect(() => {
    // Return all data if search is empty
    if (search.trim() === "") {
      setFilteredData(TABLE_DATA);
      return;
    }

    // Filter data by owner, asset, source
    const filtered = TABLE_DATA.filter(
      (item) =>
        item.asset.toLowerCase().includes(search.toLowerCase()) ||
        item.owner.toLowerCase().includes(search.toLowerCase()) ||
        item.source.toLowerCase().includes(search.toLowerCase())
    );
    // Update the filtered data state
    setFilteredData(filtered);
  }, [search]);

  return (
    <RiskContext.Provider value={{ filteredData, handleSearch }}>{children}</RiskContext.Provider>
  );
};

export default RiskProvider;
