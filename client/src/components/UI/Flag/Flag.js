import React from "react";
import FlagSvg from "react-country-flag";

export default function Flag({ countryCode }) {
  return (
    <FlagSvg
      countryCode={countryCode}
      svg
      style={{ width: `1.5em`, height: `1.5em` }}
    />
  );
}
