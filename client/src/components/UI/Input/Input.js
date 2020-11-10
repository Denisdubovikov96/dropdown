import React from "react";
import "./Input.scss";

export default function Input() {
  return (
    <div className="input">
      <span className="icon">
        <i className="fas fa-search" />
      </span>
      <input placeholder={"Search"} type="text" />
    </div>
  );
}
