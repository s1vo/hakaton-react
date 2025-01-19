import React from "react";
import styles from "./user-image-container.module.scss";

export const UserImage = ({ userId, teamMembers }) => {
  return (
    <div className={styles.userImgContainer}>
      <img className={styles.userImg} src={teamMembers[userId].photo} />
      <div className={styles.personalData}>
        <ul>
          <li>
            <h3>{teamMembers[userId].name}</h3>
          </li>
          <li>
            <h3>Возраст: {teamMembers[userId].age}</h3>
          </li>
        </ul>
        <ul className={styles.socialMediaContainer}>
          <li>
            <a href="https://vk.com" target="_blank">
              ВК
            </a>
          </li>
          <li>
            <a href="https://web.telegram.org/" target="_blank">
              Телеграм
            </a>
          </li>
          <li>
            <a href="https://rkn.gov.ru/" target="_blank">
              Запрещенка
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
