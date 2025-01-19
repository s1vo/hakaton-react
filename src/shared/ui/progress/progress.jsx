import React, { useState } from "react";
import PropTypes from "prop-types";
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
        <option className="progressBar__option" value={"pie"}>
          Pie
        </option>
        <option className="progressBar__option" value={"polar"}>
          Polar
        </option>
      </select>
      {children}
    </div>
);

// Валидация пропсов для ProgressBarLayout
ProgressBarLayout.propTypes = {
  children: PropTypes.node.isRequired,
  setSelectType: PropTypes.func.isRequired,
};

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
                <Line key={data.label} title={data.label} color={data.color} value={data.value} />
            ))}
          </ProgressBarLayout>
      );
  }
}

// Валидация пропсов для ProgressBarContainer
ProgressBarContainer.propTypes = {
  props: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      })
  ).isRequired,
};
