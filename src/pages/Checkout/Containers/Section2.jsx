import React, { useState } from "react";
import styles from "./Section2.module.css";
import { loadMercadoPago } from "@mercadopago/sdk-js";
import { initMercadoPago } from "@mercadopago/sdk-react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Card from "./Card";

export default function Section2() {
  initMercadoPago("TEST-c86cc155-2835-41e5-a1ae-e7aadb7aaf3f");
  const [cont, setCont] = useState(0);
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.cardMP}>
        <Card />
        </div>
        {cont === 1 && (
          <div className={styles.formData}>
            <div>
              <h1>Passo 1:</h1>
              <h1>informações do Cliente</h1>
            </div>
            <form>
              <div className={styles.inputLabel}>
                <label htmlFor="">Nome</label>
                <input type="text" />
              </div>
              <div className={styles.inputLabel}>
                <label htmlFor="">CPF</label>
                <input type="text" />
              </div>
              <div className={styles.inputLabel}>
                <label htmlFor="">EMAIL</label>
                <input type="text" />
              </div>
            </form>
            <button
              onClick={() => {
                setCont(cont + 1);
              }}
            >
              Proximo passo
            </button>
          </div>
        )}

        {cont === 2 && (
          <div className={styles.formData}>
            <div className={styles.titleForm}>
              <h1>Passo 2:</h1>
              <h1>cartão de credito</h1>
            </div>
            <Cards
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              name={state.name}
              focused={state.focus}
            />
            <form className={styles.form}>
              <div className={styles.inputLabel}>
                <label htmlFor="">Numero do Cartão</label>
                <input
                  type="number"
                  name="number"
                  placeholder="Card Number"
                  value={state.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className={styles.inputLabel}>
                <label htmlFor="">Nome do cartão</label>
                <input
                  type="name"
                  name="name"
                  placeholder="Card name"
                  value={state.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className={styles.inputLabel}>
                <label htmlFor="">Expira</label>
                <input
                  type="expiry"
                  name="expiry"
                  placeholder="Card expiry"
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className={styles.inputLabel}>
                <label htmlFor="">CVC</label>
                <input
                  type="cvc"
                  name="cvc"
                  placeholder="Card cvc"
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
            </form>
            <div className={styles.buttons}>
              <button
                onClick={() => {
                  setCont(cont - 1);
                }}
              >
                Anterior
              </button>
              <button>Proximo</button>
            </div>
          </div>
        )}

        <div className={styles.pedido}>
          <div className={styles.title}>
            <h1>Resumo da assinatura</h1>
          </div>
          <div className={styles.box}>
            <div className={styles.image}></div>
            <div className={styles.dataBox}>
              <p>Box Premium</p>
              <p>2 Lugares</p>
              <p>1x Quantidade</p>
            </div>
          </div>
          <div className={styles.price}>
            <div className={styles.dataPrice}>
              <p>Subtotal:</p>
              <p>299,99</p>
            </div>
            <div className={styles.dataPrice}>
              <p>Entrega:</p>
              <p>299,99</p>
            </div>
            <div className={styles.dataPrice}>
              <p>Descontos:</p>
              <p>299,99</p>
            </div>
            <div className={styles.dataPrice}>
              <p>
                <strong>Total:</strong>
              </p>
              <p>
                <strong>299,99</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
