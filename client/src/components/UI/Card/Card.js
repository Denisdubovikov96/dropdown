import React from "react";
import "./Card.scss";

export default function Card({ children, title }) {
  return (
    <div className="card">
      <div className="card-head">{title}</div>
      <div className="card-body">{children}</div>
    </div>
  );
}
