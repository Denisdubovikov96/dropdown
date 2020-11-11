import React from "react";
import "./Badge.scss";
export default function Badge({ children, onClick }) {
  return (
    <div className="badge">
      <div className="badge-content">{children}</div>
      <span onClick={onClick} className="btn">
        <i className="fas fa-times" />
      </span>
    </div>
  );
}
