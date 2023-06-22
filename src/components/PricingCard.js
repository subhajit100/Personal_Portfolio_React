import { Link } from "react-router-dom";

import React from "react";

const PricingCard = (props) => {
  const { plan, amountCharged, days, pages } = props;
  return (
    <div className="card">
      <h3>- {plan} -</h3>
      <span className="bar"></span>
      <p className="btc">$ {amountCharged}</p>
      <p>- {days} Days -</p>
      <p>- {pages} Pages -</p>
      <p>- Featured -</p>
      <p>- Responsive Design -</p>
      <Link to="/contact" className="btn">
        PURCHASE NOW
      </Link>
    </div>
  );
};

export default PricingCard;
