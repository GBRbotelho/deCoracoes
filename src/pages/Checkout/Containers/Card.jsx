import React from "react";
import "./Card.css";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { CardPayment } from "@mercadopago/sdk-react";

export default function Card({ state }) {
  initMercadoPago("APP_USR-24094649-aec9-46b7-9e5b-6f6758fc1ede");
  const initialization = {
    amount: 5,
  };

  const customization = {
    visual: {
      texts: {
        formTitle: "Assinatura com Cartão de Crédito",
      },
    },
    paymentMethods: {
      minInstallments: 1,
      maxInstallments: 1,
      types: {
        excluded: ["debit_card"],
      },
    },
  };

  const onSubmit = async (formData) => {
    const dataSend = { ...formData, dataUser: state };
    try {
      // Defina a URL para a rota de criação de assinatura em seu servidor back-end
      const url = "http://localhost:3000/create-subscription";

      // Envie uma solicitação POST com os dados do formulário do cartão de crédito
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataSend), // Envie os dados do formulário como JSON
      });

      // Verifique se a resposta é bem-sucedida
      if (response.ok) {
        const data = await response.json();
        console.log("Assinatura criada com sucesso:", data);
        return { success: true, data: data };
      } else {
        console.error("Erro ao criar assinatura:", response.statusText);
        // Lide com o erro, por exemplo, exibindo uma mensagem de erro ao usuário
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      // Lide com o erro, por exemplo, exibindo uma mensagem de erro ao usuário
    }
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
