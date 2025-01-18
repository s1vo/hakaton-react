import React from "react";
import { ProgressBar } from "../../../src/components/ui";

export const Participants = () => {
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
  return (
    <div>
      <h2>Practicipants</h2>
      <div className="progressBar">
        {" "}
        <ProgressBar type={"polar"} props={progressData} />
      </div>
    </div>
  );
};
