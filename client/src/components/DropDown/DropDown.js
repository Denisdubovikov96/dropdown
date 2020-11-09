import React, { useState } from "react";
import classNames from "classnames";

import "./DropDown.scss";
import SelectedItem from "./SelectedItem";
import DropDownList from "./DropDownList";

export default function DropDown() {
  const [isExpanded, setIsExpanded] = useState(false);
  const dropDownContainer = classNames("drop-down-container");
  const blockHead = classNames("drop-down-head");
  const blockBody = classNames("drop-down-body");
  const info = classNames("info-block");
  const selected = classNames("selected-block");
  const controller = classNames("controller", { expanded: isExpanded });
  const expandedIcon = classNames("icon");

  return (
    <div className={dropDownContainer}>
      <div className={blockHead}>
        <span>Countries Drop-down</span>
      </div>
      <div className={blockBody}>
        <div className={info}>
          <h4 className="label">Selected:</h4>
          <div className="content">
            <SelectedItem counrty={"US"} />
          </div>
        </div>
        <div className={selected}>
          <div
            className={controller}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span className="label">Select The Countries</span>
            <span className={expandedIcon}>
              <i className="fas fa-caret-down"></i>
            </span>
          </div>
          {isExpanded ? <DropDownList /> : null}
        </div>
      </div>
    </div>
  );
}

const list = [
  {
    id: 1,
    country: "Ukraine",
    flag: "ua",
    value1: 61100,
    value2: 12,
    value3: 142,
    value4: "4.0x",
  },
  {
    id: 2,
    country: "Russia",
    flag: "ru",
    value1: 61200,
    value2: 14,
    value3: 141,
    value4: "4.0x",
  },
  {
    id: 3,
    country: "UK",
    flag: "uk",
    value1: 61100,
    value2: 12,
    value3: 142,
    value4: "4.0x",
  },
  {
    id: 4,
    country: "USA",
    flag: "usa",
    value1: 61200,
    value2: 12,
    value3: 144,
    value4: "4.0x",
  },
];
