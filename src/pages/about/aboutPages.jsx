import React from "react";
import { ProgressBar } from "../../../src/components/ui";
const progressData = [
  {
    label: "HTML",
    value: 25,
    color: "red",
  },
  {
    label: "JavaScript",
    value: 50,
    color: "orange",
  },
  {
    label: "CSS",
    value: 30,
    color: "blue",
  },
];

export const Participants = () => {
  return (
    <div>
      <h2>Practicipants</h2>
      <div className="progressBar">
        <ProgressBar type={"polar"} props={progressData} />
      </div>
    </div>
  );
};
