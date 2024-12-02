import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { VStack, Text } from "native-base";
import { CardEventos } from "../Componentes/CardEventos";
import { Titulo } from "../Componentes/Titulo";

export default function Eventos() {
  const events = [
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/138511008?v=4",
      title: "|Siará Tech Summit|",
      description:
        " O Siará Tech Summit é o maior evento gratuito de inovação do Ceará, focado em conectar startups, empresas e investidores. O evento promove a troca de experiências, fortalece a inovação e impulsiona soluções criativas para micro e pequenas empresas",
      date: "23/10/2024 - 25/10/2024 - FORTALEZA",
      botao: "Mais Informações",
    },
    {
      avatarUrl:
        "https://avatars.githubusercontent.com/u/138511008?v=4https://avatars.githubusercontent.com/u/138511008?v=4",
      title: "|Brasil Global Summit|",
      description:
        "Um evento que reúne líderes das maiores empresas do Brasil e do mundo, focado em crescimento, inovação e networking de alta qualidade.",
      date: "15/11/2024 - 17/11/2024 - BRASÍLIA",
      botao: "Mais Informações",
    },
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/138511008?v=5",
      title: "|InovaTech 2024|",
      description:
        "Um evento voltado para startups e empreendedores, com foco em inovação tecnológica e oportunidades de negócios.",
      date: "5/12/2024 - 7/12/2024 - RIO DE JANEIRO",
      botao: "Mais Informações",
    },
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/138511008?v=6",
      title: "|Marketing Summit Brasil|",
      description:
        "Um encontro para profissionais de marketing, com palestras, painéis e workshops sobre as melhores práticas e tendências do setor.",
      date: "20/12/2024 - 22/12/2024 - SÃO PAULO",
      botao: "Mais Informações",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {events.map((event, index) => (
        <CardEventos
          key={index}
          avatarUrl={event.avatarUrl}
          title={event.title}
          description={event.description}
          date={event.date}
          botao={event.botao}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
