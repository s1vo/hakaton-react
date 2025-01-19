import React from "react";
import { ProgressBarContainer } from "../../shared/ui/";
import { progressData } from "./constants";

export const ParticipantsPages = () => {
  return (
    <div>
      <h2>Practicipants</h2>
      <ProgressBarContainer props={progressData} />
    </div>
  );
};
