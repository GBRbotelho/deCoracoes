import React, { useEffect, useState } from "react";
import styles from "./Section7Perguntas.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Plus from "../../../components/Home/Plus";

import img1 from "../../../assets/imgs/Home/funcionamento1.webp";
import Ok from "../../../components/Home/Ok";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

export default function Section7Perguntas() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  initMercadoPago("TEST-c86cc155-2835-41e5-a1ae-e7aadb7aaf3f");

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Planos</h1>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.perguntas}>
            <h1>Perguntas frequentes</h1>
            <ul>
              <li>
                <p>Comece a aprender ainda hoje</p>
                <Plus />
              </li>
              <li>
                <p>Comece a aprender ainda hoje</p>
                <Plus />
              </li>
              <li>
                <p>Comece a aprender ainda hoje</p>
                <Plus />
              </li>
              <li>
                <p>Comece a aprender ainda hoje</p>
                <Plus />
              </li>
              <li>
                <p>Comece a aprender ainda hoje</p>
                <Plus />
              </li>
              <li>
                <p>Comece a aprender ainda hoje</p>
                <Plus />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.ebook}>
          <div className={styles.cards}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween="10%"
              slidesPerView={
                (windowWidth > 1000 && 1) ||
                (windowWidth > 0 && windowWidth <= 1000 && 1)
              }
              pagination={{ clickable: true }}
              loop={true}
            >
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.dataCard}>
                    <div className={styles.iconBook}>
                      <div className={styles.titleCard}>
                        <h1>Box inicial</h1>
                      </div>
                      <img src={img1} alt="Imagem" />
                    </div>
                    <ul>
                      <li>
                        <Ok />2 Lugares
                      </li>
                      <li>
                        <Ok />
                        porta-guardanapos
                      </li>
                      <li>
                        <Ok />
                        lugar americano
                      </li>
                      <li>
                        <Ok />
                        guardanapos 100% algodão
                      </li>
                    </ul>
                    <div className={styles.preco}>
                      <p>
                        De <del>699,99</del>
                      </p>
                      <p>
                        Por <span>299,99</span>
                      </p>
                    </div>
                  </div>
                  <a href="https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380848eed4776018eee635e2600e1">
                    <button>Escolha essa box</button>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
