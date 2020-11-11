import React, { useRef, useState } from "react";
import { Flag } from "../UI";

export default function DropDownItem({ onSelect, item }) {
  const {
    country_code,
    country_name,
    metrics: { metric_1, metric_2, metric_3, metric_4 },
    selected,
  } = item;

  return (
    <div className="row body" onClick={(e) => onSelect(country_code, e)}>
      <div className="section">
        <input
          className="item"
          checked={!!selected}
          onChange={(e) => onSelect(country_code, e)}
          type="checkbox"
        />
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
