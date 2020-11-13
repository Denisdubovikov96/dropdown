import React, { useContext, useState } from "react";
import classNames from "classnames";
import DropDownRow from "./DropDownRow";
import Input from "../UI/Input/Input";
import { sortByKey } from "../../helperFunctions";
import { DropDownContext } from "./DropDownContext";
import { Loader, Message } from "../UI";

export default function DropDownList() {
  const [sortConfig, setSortConfig] = useState(null);
  const [query, setQuery] = useState("");

  const {
    list,
    error,
    loading,
    togleSelect,
    controllers,
    uniqKey,
    errorMessage,
  } = useContext(DropDownContext);

  const keysArray = Object.keys(list);

  const controllsTitle = controllers.map((item) => {
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
    keysArray.sort((a, b) =>
      sortByKey(a, b, sortConfig.key, sortConfig.type, list)
    );
  }
  return (
    <>
      <div className="search-pannel">
        <Input
          placeholder={"Search"}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div className="drop-table">
        <div className="row head">
          <div />
          {controllsTitle}
        </div>
        {loading ? (
          <div className="centred-item">
            <Loader />
          </div>
        ) : !loading && error ? (
          <div className="centred-item">
            <Message
              type={"warning"}
              text={errorMessage ? errorMessage : "Could not load content"}
            />
          </div>
        ) : (
          keysArray
            // .filter((key) => {
            //   return (
            //     list[key][uniqKey].toLowerCase().indexOf(query.toLowerCase()) >
            //     -1
            //   );
            // })
            .map((key) => {
              return (
                <DropDownRow
                  uniqKey={uniqKey}
                  controllers={controllers}
                  key={list[key][uniqKey]}
                  onSelect={togleSelect}
                  item={list[key]}
                />
              );
            })
        )}
      </div>
    </>
  );
}
