import React from "react";
import styles from "./@Index.module.css";
import Navbar from "./Containers/1Navbar";
import Section1 from "./Containers/Section1";
import Section2Box from "./Containers/Section2Box";
import Section3 from "./Containers/Section3";

export default function Index() {
  return (
    <main className={styles.main}>
      <div className={styles.div1}>
        <Navbar />
        <Section1 />
      </div>
      <Section2Box />
      <Section3 />
    </main>
  );
}
