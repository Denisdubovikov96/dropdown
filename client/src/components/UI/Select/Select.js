import React, { useState } from "react";

import classNames from "classnames";
import "./Select.scss";
export default function Select({ label, expandedElement }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const controller = classNames("controller", { expanded: isExpanded });
  const dropdownContentClass = classNames("drop-down", {
    expanded: isExpanded,
  });

  return (
    <div className="select">
      <div className={controller} onClick={() => setIsExpanded(!isExpanded)}>
        {label}
        <span className="icon">
          <i className="fas fa-caret-down" />
        </span>
      </div>
      <div className={dropdownContentClass}>
        {isExpanded ? expandedElement : null}
      </div>
    </div>
  );
}
