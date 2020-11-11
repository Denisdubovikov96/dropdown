import React, { useContext, useEffect, useState } from "react";
import DropDownRow from "./DropDownRow";
import Input from "../UI/Input/Input";
import { keyToTitle } from "../../helperFunctions";
import { sortByKey } from "../../helperFunctions";
import classNames from "classnames";
import { DropDownContext } from "./DropDownContext";

export default function DropDownList({ headControllers }) {
  const [sortConfig, setSortConfig] = useState(null);
  const { fetchList, list, error, loading, togleSelect } = useContext(
    DropDownContext
  );

  useEffect(() => {
    fetchList();
  }, []);

  const controllsTitle = headControllers.map((item) => {
    const { sortable, key, title } = item;
    const upBtn = classNames("icon", "fas fa-caret-up", {
      active: sortConfig && "up" === sortConfig.type && key === sortConfig.key,
    });
    const downBtn = classNames("icon", "fas fa-caret-down", {
      active:
        sortConfig && "down" === sortConfig.type && key === sortConfig.key,
    });
    return (
      <div className="section" key={key}>
        {sortable ? (
          <div className="section-controls">
            <span
              className={upBtn}
              onClick={() => setSortConfig({ key: key, type: "up" })}
            />
            <span
              className={downBtn}
              onClick={() => setSortConfig({ key: key, type: "down" })}
            />
          </div>
        ) : null}
        {title}
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
        <div className="row head">{controllsTitle}</div>
        <div className="scroll">
          {loading && !error ? (
            <div>...Загрузка</div>
          ) : !loading && error ? (
            <div>...Errror</div>
          ) : (
            Object.keys(list).map((key) => {
              return (
                <DropDownRow
                  key={list[key].country_code}
                  onSelect={togleSelect}
                  item={list[key]}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
