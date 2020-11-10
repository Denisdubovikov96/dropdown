import React from "react";
import classNames from "classnames";

import "./DropDown.scss";
import { Badge, Card, Select, Flag } from "../UI";
import DropDownList from "./DropDownList";

export default function DropDown() {
  // const [isExpanded, setIsExpanded] = useState(false);

  const info = classNames("info-block");

  return (
    <Card title="Countries DropDown">
      <div className={info}>
        <span className="label">Selected:</span>
        <div className="content">
          {list.map((item) => {
            return (
              <Badge key={item.country_code}>
                <div className="country-badge">
                  <Flag countryCode={item.country_code} />
                  <span>{item.country_name}</span>
                </div>
              </Badge>
            );
          })}
        </div>
      </div>
      <Select
        label="Select country"
        expandedElement={<DropDownList list={list} />}
      />
    </Card>
  );
}

const list = [
  {
    country_code: "AW",
    country_name: "Aruba",
    metrics: {
      metric_1: 9,
      metric_2: 2,
      metric_3: 3,
      metric_4: 682,
    },
  },
  {
    country_code: "AF",
    country_name: "Afghanistan",
    metrics: {
      metric_1: 9,
      metric_2: 19,
      metric_3: 261,
      metric_4: 575.4,
    },
  },
  {
    country_code: "AO",
    country_name: "Angola",
    metrics: {
      metric_1: 0,
      metric_2: 34,
      metric_3: 304,
      metric_4: 1095.6,
    },
  },
];
