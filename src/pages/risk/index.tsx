import RiskProvider from "../../context/risk/risk-context";
import RiskDashboard from "./components/dashboard";

const RiskPage = () => {
  // This is the main risk page that renders the RiskDashboard component
  return (
    <RiskProvider>
      <RiskDashboard />
    </RiskProvider>
  );
};

export default RiskPage;
