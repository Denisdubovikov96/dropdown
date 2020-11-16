import React, { useEffect, useRef, useState } from "react";

import classNames from "classnames";
import "./Select.scss";
export default function Select({ label, expandedElement }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef();
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setIsExpanded(false);
    });
    return () => {
      document.removeEventListener("click");
    };
  }, []);
  const controller = classNames("controller", { expanded: isExpanded });
  const dropdownContentClass = classNames("drop-down", {
    expanded: isExpanded,
  });

  return (
    <div ref={ref} className="select">
      <div className={controller} onClick={() => setIsExpanded(!isExpanded)}>
        {label}
        <span className="icon">
          <i className="fas fa-caret-down" />
        </span>
      </div>
      <div className={dropdownContentClass}>
        {expandedElement ? expandedElement : null}
      </div>
    </div>
  );
}
