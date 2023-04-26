import React from "react";
import styles from "./NotFound.module.css";

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Error 404. Page does not exist!</h2>
    </div>
  );
};

export default NotFound;
