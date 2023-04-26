import React from "react";
import styles from "./AppBar.module.css";
import Navigation from "../navigation/Navigation";
import { Outlet } from "react-router-dom";

const AppBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppBar;
