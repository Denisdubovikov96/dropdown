import React from "react";
import classNames from "classnames";
import "./Message.scss";

export default function Message({ type, text }) {
  const cls = classNames("message", type);
  return (
    <span className={cls}>
      {type === "warning" ? (
        <i className="fas fa-exclamation-triangle" />
      ) : null}
      {text}
    </span>
  );
}
