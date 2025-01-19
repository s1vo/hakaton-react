import React from "react";

export const Button = ({ color, func, title, type }) => {
  const styles = {
    color: "white",
    backgroundColor: color,
    border: "0px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    borderRadius: type === "circle" ? "50px" : "6px",
    padding: "12px 24px",
  };

  return (
    <button style={styles} onClick={func}>
      {title}
    </button>
  );
};
