import React from "react";
import styles from "./@Index.module.css";
import Navbar from "./Containers/1Navbar";

export default function Index() {
  return (
    <main className={styles.main}>
      <div className={styles.div1}>
        <Navbar />
      </div>
    </main>
  );
}
