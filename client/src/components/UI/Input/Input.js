import React from "react";
import "./Input.scss";

export default function Input({ placeholder, value, onChange }) {
  return (
    <div className="input">
      <span className="icon">
        <i className="fas fa-search" />
      </span>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="text"
      />
    </div>
  );
}
