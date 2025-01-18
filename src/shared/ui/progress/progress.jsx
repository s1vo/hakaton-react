import React, { useState } from "react";
import { ChartProgressBar } from "../chartProgressBar/chartProgressBar";
import { Line } from "../line/line";
import "./progress.scss";

const ProgressBarLayout = ({ children, setSelectType }) => (
  <div className="progressBar">
    <select
      className="progressBar__selector"
      title="Выберите тип диаграммы"
      onChange={({ target }) => {
        setSelectType(target.value);
      }}
    >
      <option className="progressBar__option" value={"line"}>
        Line
      </option>
      <option value={"pie"}>Pie</option>
      <option value={"polar"}>Polar</option>
    </select>
    {children}
  </div>
);

export function ProgressBarContainer({ props }) {
  const [selectType, setSelectType] = useState("line");
  switch (selectType) {
    case "pie":
    case "polar":
      return (
        <ProgressBarLayout setSelectType={setSelectType}>
          <ChartProgressBar type={selectType} props={props} />
        </ProgressBarLayout>
      );
    default:
      return (
        <ProgressBarLayout setSelectType={setSelectType}>
          {props.map((data) => (
            <Line title={data.label} color={data.color} value={data.value} />
          ))}
        </ProgressBarLayout>
      );
  }
}
