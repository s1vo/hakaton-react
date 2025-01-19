import React from "react";
import styles from "./user-info.module.scss";
import { UserImage } from "../user-image-container/user-imgae-container";
import { teamMembers } from "../../../../DB/members";
import { ProgressBarContainer } from "../../../../shared/ui/progress/progress";
import { progressData } from "../../constants/progress";

export const UserInfo = ({ userId }) => {
  return (
    <div className={styles.infoContainer}>
      <UserImage userId={userId} teamMembers={teamMembers} />
      <div className={styles.aboutMeContainer}>
        <div>
          <h1>Задачи на проекте</h1>
          <div>{teamMembers[userId].role}</div>
        </div>
        <div>
          <h1>О себе</h1>
          <div>{teamMembers[userId].description}</div>
        </div>
      </div>
      <div className={styles.progressBarContainer}>
        <h1>Уровень навыков</h1>
        <div className="progressBar">
          <ProgressBarContainer type={"polar"} props={progressData} />
        </div>
      </div>
    </div>
  );
};
