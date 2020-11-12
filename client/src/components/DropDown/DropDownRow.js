import React from "react";

export default function DropDownRow({ onSelect, item, controllers, uniqKey }) {
  const { selected } = item;
  return (
    <div className="row body" onClick={(e) => onSelect(item[uniqKey], e)}>
      <input className="item" checked={!!selected} readOnly type="checkbox" />
      {controllers.map(({ Component, key }) => {
        return (
          <div className="section" key={item[key]}>
            {Component ? <Component uniqKey={uniqKey} {...item} /> : item[key]}
          </div>
        );
      })}
    </div>
  );
}
