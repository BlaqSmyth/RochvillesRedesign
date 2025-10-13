import StatsSection from "../StatsSection";

export default function StatsSectionExample() {
  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "£5M+", label: "Tax Savings" },
    { value: "100%", label: "Compliance Rate" }
  ];
  
  return <StatsSection stats={stats} />;
}
