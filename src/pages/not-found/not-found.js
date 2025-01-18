import React from "react";
import img404 from "../../assets/img/404.jpg";
import styles from "./not-found.module.scss";

export const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <img src={img404} alt="нет такой страницы чушпан" />
    </div>
  );
};
