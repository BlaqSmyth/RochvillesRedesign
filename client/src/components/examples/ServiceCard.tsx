import ServiceCard from "../ServiceCard";
import { Calculator } from "lucide-react";

export default function ServiceCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <ServiceCard
        icon={Calculator}
        title="Tax Planning"
        description="Strategic tax planning to minimize your tax liability and maximize your returns. Our expert advisors ensure full compliance while optimizing your tax position."
        href="/services"
      />
    </div>
  );
}
