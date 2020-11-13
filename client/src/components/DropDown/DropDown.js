import React, { useEffect, useReducer } from "react";
import "./DropDown.scss";
import { Badge, Card, Select, Message } from "../UI";
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
        error: false,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: true,
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

export default function DropDown({
  controllers,
  uniqKey,
  SelectedComponent,
  emtptyPlaceholder,
  errorMessage,
  selectLabel,
  dropDownTitle,
  infoLabel,
  getClearData,
  searchKey,
  ...rest
}) {
  const [state, dispatch] = useReducer(listReducer, {
    list: {},
    loading: false,
    error: null,
  });

  useEffect(() => {
    fetchList();
  }, []);
  const fetchList = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await getClearData();
      const dataToState = Object.fromEntries(
        data.map((item) => {
          return [item[uniqKey], { ...item, select: false }];
        })
      );
      setTimeout(() => {
        dispatch({ type: "SUCCESS", payload: dataToState });
      }, 3000);
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
    }
  };

  const togleSelect = (key, e) => {
    dispatch({ type: "TOGLE_SELECT", payload: key });
  };

  return (
    <DropDownContext.Provider
      value={{
        ...state,
        // fetchList,
        togleSelect,
        controllers,
        uniqKey,
        errorMessage,
        searchKey,
      }}
    >
      <Card title={dropDownTitle ? dropDownTitle : "Drop-down Title"}>
        <div className="info-block">
          <span className="label">{infoLabel ? infoLabel : "Selected:"}</span>
          <div className="content">
            {Object.keys(state.list).filter((key) => state.list[key].selected)
              .length !== 0 ? (
              Object.keys(state.list)
                .filter((key) => state.list[key].selected)
                .map((key) => {
                  return (
                    <Badge
                      key={state.list[key][uniqKey]}
                      onClick={() => togleSelect(state.list[key][uniqKey])}
                    >
                      <SelectedComponent {...state.list[key]} />
                    </Badge>
                  );
                })
            ) : (
              <Message
                type={"placeholder"}
                text={
                  emtptyPlaceholder ? emtptyPlaceholder : "Nothing selected"
                }
              />
            )}
          </div>
        </div>
        <Select
          label={selectLabel ? selectLabel : "Select"}
          expandedElement={<DropDownList />}
        />
      </Card>
    </DropDownContext.Provider>
  );
}
