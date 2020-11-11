import React, { useReducer, useState } from "react";
// import classNames from "classnames";

import "./DropDown.scss";
import { Badge, Card, Select, Flag } from "../UI";
import DropDownList from "./DropDownList";
import { DropDownContext } from "./DropDownContext";
import axios from "axios";

const listReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default function DropDown() {
  // const [list, setList] = useState(null);
  const [state, dispatch] = useReducer(listReducer, {
    list: [],
    loading: false,
    error: null,
  });
  const { list } = state;
  const [checkedList, setCheckedList] = useState([]);

  const fetchList = async () => {
    dispatch({ type: "LOADING" });
    try {
      const responce = await fetch("http://localhost:5000/", {
        referrerPolicy: "strict-origin-when-cross-origin",
        method: "GET",
        mode: "no-cors",
        headers: {
          "Cotent-Type": "application/json",
        },
        credentials: "omit",
      });
      // const data = await responce.json();
      console.log(responce);
      dispatch({ type: "SUCCESS", payload: [] });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
    }
  };

  return (
    <DropDownContext.Provider value={{ ...state, fetchList }}>
      <Card title="Countries DropDown">
        <div className="info-block">
          <span className="label">Selected:</span>
          <div className="content">
            {checkedList.length !== 0 ? (
              checkedList.map((item) => {
                return (
                  <Badge key={item.country_code}>
                    <div className="country-badge">
                      <Flag countryCode={item.country_code} />
                      <span>{item.country_name}</span>
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
        <Select label="Select country" expandedElement={<DropDownList />} />
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
