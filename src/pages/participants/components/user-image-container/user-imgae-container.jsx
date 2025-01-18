import React from "react";
import userImg from "../../../../assets/img/user/8b167af653c2399dd93b952a48740620.jpg";
import styles from "./user-image-container.module.scss";

export const UserImage = () => {
  return (
    <div className={styles.userImgContainer}>
      <img className={styles.userImg} src={userImg} />
      <div className={styles.personalData}>
        <ul>
          <li>
            <h3>Уровень Уровень Уровень</h3>
          </li>
          <li>
            <h3>100 лет</h3>
          </li>
        </ul>
        <ul className={styles.socialMediaContainer}>
          <li>VK</li>
          <li>Telega</li>
          <li>Запрещенка</li>
        </ul>
      </div>
    </div>
  );
};
