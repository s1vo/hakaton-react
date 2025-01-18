import React from "react";
import styles from "./body.module.scss";

export const Body = ({ children }) => {
  return <div className={styles.bodyContainer}>{children}</div>;
};
