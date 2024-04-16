import React from "react";
import styles from "./Section3.module.css";
import img from "../../../assets/imgs/Home/section3.webp";

export default function Section3() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={img} alt="Ilustração Familia" />
        </div>
        <div className={styles.content}>
          <h1>Criando tradições com seus filhos</h1>
          <p>
            A nossa Box é um plano de assinatura onde você paga um valor mensal
            e recebe todo mês uma caixa surpresa com produtos para mesa posta.{" "}
            <br />
            Você receberá kits completos perfeitamente coordenados para criar
            mesas incríveis que poderão ser usadas em diversas ocasiões. A
            maneira mais prática e assertiva de criar mesas lindas, sem
            preocupações e com muita comodidade
          </p>
          <div className={styles.button}>
            <button>eu quero</button>
          </div>
        </div>
      </div>
    </section>
  );
}
