import React from "react";
import "./spinner.scss"

export default function Spinner() {
  return (
    <div className="center">
      <div className="lds-hourglass"></div>
    </div>
  );
}
