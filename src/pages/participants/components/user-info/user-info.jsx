import React from "react";
import styles from "./user-info.module.scss";
import {ProgressBar} from "../../../../components/ui";


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

export const UserInfo = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.aboutMeContainer}>
        <div>
          <h1>О себе</h1>
          <div>Нормальный тип</div>
        </div>
        <div>
          <h1>Задачи на проекте</h1>
          <div>Всякая хуйня</div>
        </div>
      </div>
      <div className={styles.progressBarContainer}>
        <h1>Уровень навыков</h1>
        <div className="progressBar">
          <ProgressBar type={"polar"} props={progressData} />
        </div>
      </div>
    </div>
  );
};
