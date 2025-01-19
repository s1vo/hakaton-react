import React from "react";
import styles from "./wallpaper.module.scss";
import mishaWallImg from "../../../../assets/img/team/misha/photo-1542396601-dca920ea2807.avif";
import ruslanWallImg from "../../../../assets/img/team/ruslan/photo-1542396601-dca920ea2807.avif";
import nikitaImg from "../../../../assets/img/team/nikita/photo-1542372712-fc07597133cd.avif";

export const Wallpaper = () => {
  return (
    <div className={styles.imgContainer}>
      <img className={styles.wallImg} src={mishaWallImg} alt="wallpaper" />
    </div>
  );
};
