import React from "react";
import { useParams } from "react-router-dom";
import { Wallpaper, UserImage, UserInfo } from "./components";

export const ParticipantPage = () => {
  // const { id } = useParams();

  return (
    <div>
      <Wallpaper />
      <UserImage />
      <UserInfo />
    </div>
  );
};
