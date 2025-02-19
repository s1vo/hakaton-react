import React from "react";
import { useParams } from "react-router-dom";
import { Wallpaper, UserInfo } from "./components";

export const ParticipantPage = () => {
  const { id } = useParams();

  return (
    <div>
      <UserInfo userId={id} />
    </div>
  );
};
