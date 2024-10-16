import React from "react";
import Advantage from "./Advantage";
import trophy from "../assets/icon/trophy.svg";
import guarantee from "../assets/icon/guarantee.svg";
import shipping from "../assets/icon/shipping.svg";
import customerSupport from "../assets/icon/customer-support.svg";
import './styles.css'; 

const AdvantagesSection: React.FC = () => {
  return (
    <div className="advantages-section">
      <Advantage
        icone={trophy}
        title="High Quality"
        subtitle="crafted from top materials"
      />
      <Advantage
        icone={guarantee}
        title="Warranty Protection"
        subtitle="Over 2 years"
      />
      <Advantage
        icone={shipping}
        title="Free Shipping"
        subtitle="Order over 150 $"
      />
      <Advantage
        icone={customerSupport}
        title="24 / 7 Support"
        subtitle="Dedicated support"
      />
    </div>
  );
};

export default AdvantagesSection;
