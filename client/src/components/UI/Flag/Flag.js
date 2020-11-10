import React from "react";
import FlagSvg from "react-country-flag";

export default function Flag({ countryCode, size = 1.3 }) {
  return (
    <FlagSvg
      countryCode={countryCode}
      svg
      style={{ width: `${20}px`, height: `${12}px` }}
    />
  );
}
