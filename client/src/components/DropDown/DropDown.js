import React, { useReducer, useState } from "react";
// import classNames from "classnames";

import "./DropDown.scss";
import { Badge, Card, Select, Flag } from "../UI";
import DropDownList from "./DropDownList";
import { DropDownContext } from "./DropDownContext";

const listReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        list: payload,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case "TOGLE_SELECT":
      return {
        ...state,
        list: {
          ...state.list,
          [payload]: {
            ...state.list[payload],
            selected: !state.list[payload].selected,
          },
        },
      };

    default:
      return state;
  }
};

export default function DropDown() {
  const [state, dispatch] = useReducer(listReducer, {
    list: {},
    loading: false,
    error: null,
  });
  const headControllers = [
    { title: "Countries", key: "country_name", sortable: false },
    { title: "Metric 1", key: "metric_1", sortable: true },
    { title: "Metric 2", key: "metric_2", sortable: true },
    { title: "Metric 3", key: "metric_3", sortable: true },
    { title: "Metric 4", key: "metric_4", sortable: true },
  ];

  const fetchList = async () => {
    dispatch({ type: "LOADING" });
    try {
      const responce = await fetch("http://localhost:5000/");
      const data = await responce.json();
      const dataToState = Object.fromEntries(
        data.map((item) => {
          return [item.country_code, { ...item, select: false }];
        })
      );
      dispatch({ type: "SUCCESS", payload: dataToState });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
    }
  };

  const togleSelect = (key) => {
    dispatch({ type: "TOGLE_SELECT", payload: key });
  };

  return (
    <DropDownContext.Provider value={{ ...state, fetchList, togleSelect }}>
      <Card title="Countries DropDown">
        <div className="info-block">
          <span className="label">Selected:</span>
          <div className="content">
            {Object.keys(state.list).filter((key) => state.list[key].selected)
              .length !== 0 ? (
              Object.keys(state.list)
                .filter((key) => state.list[key].selected)
                .map((key) => {
                  return (
                    <Badge
                      key={state.list[key].country_code}
                      onClick={() => togleSelect(state.list[key].country_code)}
                    >
                      <div className="country-badge">
                        <Flag countryCode={state.list[key].country_code} />
                        <span>{state.list[key].country_name}</span>
                      </div>
                    </Badge>
                  );
                })
            ) : (
              <span className="placeholder">
                Select the Countries from the list below
              </span>
            )}
          </div>
        </div>
        <Select
          label="Select country"
          expandedElement={<DropDownList headControllers={headControllers} />}
        />
      </Card>
    </DropDownContext.Provider>
  );
}

// const fetchList = [
//   {
//     country_code: "AW",
//     country_name: "Aruba",
//     metrics: {
//       metric_1: 9,
//       metric_2: 2,
//       metric_3: 3,
//       metric_4: 682,
//     },
//   },
//   {
//     country_code: "AF",
//     country_name: "Afghanistan",
//     metrics: {
//       metric_1: 9,
//       metric_2: 19,
//       metric_3: 261,
//       metric_4: 575.4,
//     },
//   },
//   {
//     country_code: "AO",
//     country_name: "Angola",
//     metrics: {
//       metric_1: 0,
//       metric_2: 34,
//       metric_3: 304,
//       metric_4: 1095.6,
//     },
//   },
// ];
