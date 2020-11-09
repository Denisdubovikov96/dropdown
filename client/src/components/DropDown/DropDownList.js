import React from "react";
import classNames from "classnames";
import Flag from "react-country-flag";

export default function DropDownList() {
  const dropDown = classNames("drop-down-list");
  return (
    <div className={dropDown}>
      <div className="search-pannel">
        <div className="input">
          <span className="icon">
            <i className="fas fa-search" />
          </span>
          <input placeholder={"Search"} type="text" />
        </div>
      </div>
      <div className="drop-table">
        <div className="row head">
          <div>Countries</div>
          <div>Metric 1</div>
          <div>Metric 2</div>
          <div>Metric 3</div>
          <div>Metric 4</div>
        </div>
        <div className="body">
          <div className="row">
            <div>
              <input type="checkbox" />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
