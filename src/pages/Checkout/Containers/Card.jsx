import React from "react";
import "./Card.css";
import { initMercadoPago } from "@mercadopago/sdk-react";
initMercadoPago("TEST-c86cc155-2835-41e5-a1ae-e7aadb7aaf3f");
import { CardPayment } from "@mercadopago/sdk-react";

const customization = {
  visual: {
    texts: {
      formTitle: "Pagamento com Cartão de Crédito",
    },
  },
};

export default function Card() {
  const initialization = {
    amount: 100,
    paymentMethods: {
      types: ["credit_card"], // Permitir apenas cartões de crédito
    },
    installments: [2],
  };

  const onSubmit = async (formData) => {
    console.log(formData);
  };

  const onError = async (error) => {
    // callback chamado para todos os casos de erro do Brick
    console.log(error);
  };

  const onReady = async () => {
    /*
            Callback chamado quando o Brick estiver pronto.
            Aqui você pode ocultar loadings do seu site, por exemplo.
          */
  };

  return (
    <CardPayment
      customization={customization}
      initialization={initialization}
      onSubmit={onSubmit}
      onReady={onReady}
      onError={onError}
    />
  );
}
