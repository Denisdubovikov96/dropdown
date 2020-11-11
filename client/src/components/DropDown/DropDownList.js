import React, { useContext, useEffect, useState } from "react";
import DropDownRow from "./DropDownRow";
import Input from "../UI/Input/Input";
import { keyToTitle } from "../../helperFunctions";
import { sortByKey } from "../../helperFunctions";
import classNames from "classnames";
import { DropDownContext } from "./DropDownContext";

export default function DropDownList() {
  const [sortConfig, setSortConfig] = useState(null);
  const { fetchList, list, error, loading } = useContext(DropDownContext);
  console.log("list", list);
  console.log("error", error);
  console.log("loading", loading);

  useEffect(() => {
    fetchList();
  }, []);

  if (loading) {
    return <div>...Loading</div>;
  }
  if (error || list.length === 0) {
    return <div>...ERORR...</div>;
  } else {
    const controllsTitle = Object.keys(list[0].metrics).map((key) => {
      const upBtn = classNames("icon", {
        active:
          sortConfig && "up" === sortConfig.type && key === sortConfig.key,
      });
      const downBtn = classNames("icon", {
        active:
          sortConfig && "down" === sortConfig.type && key === sortConfig.key,
      });
      return (
        <div className="section" key={key}>
          <span className="section-controls">
            <span
              className={upBtn}
              onClick={() => setSortConfig({ key: key, type: "up" })}
            >
              <i className="fas fa-caret-up" />
            </span>
            <span
              className={downBtn}
              onClick={() => setSortConfig({ key: key, type: "down" })}
            >
              <i className="fas fa-caret-down" />
            </span>
          </span>
          {keyToTitle(key)}
        </div>
      );
    });
    if (sortConfig) {
      list.sort((a, b) => sortByKey(a, b, sortConfig.key, sortConfig.type));
    }
    return (
      <>
        <div className="search-pannel">
          <Input />
        </div>
        <div className="drop-table">
          <div className="row head">
            <div className="section">Countries</div>
            {controllsTitle}
          </div>
          <div className="scroll">
            {list.map((item) => {
              return <DropDownRow key={item.country_code} item={item} />;
            })}
          </div>
        </div>
      </>
    );
  }
}
