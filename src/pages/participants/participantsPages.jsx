import React from "react";
import { ProgressBar } from "../../shared/ui/";
import { useParams } from "react-router-dom";

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

export const ParticipantPage = () => {
  const id = useParams();

  return (
    <div>
      <h2>Practicipants {id}</h2>
      <div className="progressBar">
        <ProgressBar type={"polar"} props={progressData} />
      </div>
    </div>
  );
};
