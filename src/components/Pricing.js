import "../css/PricingStyles.css";

import React from "react";
import PricingCard from "./PricingCard";
import pricingCardData from "../jsonData/PricingCardData";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        {pricingCardData.map((element, index) => {
          return (
            <PricingCard
              key={index}
              plan={element.plan}
              amountCharged={element.amountCharged}
              days={element.days}
              pages={element.pages}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
