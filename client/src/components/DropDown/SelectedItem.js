import React from "react";
import Flag from "react-country-flag";
import classNames from "classnames";

export default function SelectedItem({ counrty }) {
  const selectedItem = classNames("selected-item");
  return (
    <div className={selectedItem}>
      <Flag className="flag" countryCode={counrty} svg />
      <span>UK</span>
      <span className="btn">
        <i className="fas fa-times" />
      </span>
    </div>
  );
}
