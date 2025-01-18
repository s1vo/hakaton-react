import React from "react";
import { ProgressBar } from "../../shared/ui/";
import { progressData } from "./constants";

export const ParticipantsPages = () => {
  return (
    <div>
      <h2>Practicipants</h2>
      <div className="progressBar">
        <ProgressBar type={"polar"} props={progressData} />
      </div>
    </div>
  );
};
