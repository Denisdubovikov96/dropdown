import React, { useState } from "react";
import { Flag } from "../UI";

export default function DropDownItem({ item }) {
  const [check, setCheck] = useState(false);
  const {
    country_code,
    country_name,
    metrics: { metric_1, metric_2, metric_3, metric_4 },
  } = item;
  console.log(check);
  return (
    <div className="row body">
      <input
        className="item"
        checked={check}
        onChange={() => setCheck(!check)}
        type="checkbox"
      />
      <div className="section">
        <span className="item">
          <Flag countryCode={country_code} svg />
        </span>
        <span className="item">{country_name}</span>
      </div>
      <div className="section">{metric_1}</div>
      <div className="section">{metric_2}</div>
      <div className="section">{metric_3}</div>
      <div className="section">{metric_4}</div>
    </div>
  );
}
