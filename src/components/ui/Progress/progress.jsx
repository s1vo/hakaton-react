import React from "react";
import { ChartProgressBar, Line } from "./components";
import "./progress.css";

export function ProgressBar({ type, props }) {
  switch (type) {
    case "pie":
    case "polar":
      return <ChartProgressBar type={type} props={props} />;
    default:
      return props.map((data) => <Line title={data.label} color={data.color} value={data.value} />);
  }
}
