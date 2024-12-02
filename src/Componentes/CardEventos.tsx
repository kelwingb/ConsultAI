import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, VStack } from "native-base";

interface CardEventosProps {
  avatarUrl: string;
  title: string;
  description: string;
  date: string;
  botao: string;
  foiAgendado?: boolean;
  foiAtendido?: boolean;
}

export function CardEventos({
  avatarUrl,
  title,
  description,
  date,
  botao,
  foiAgendado,
  foiAtendido,
}: CardEventosProps) {
  return (
    <VStack bg={foiAtendido ? "blue.100" : "white"} style={styles.card}>
      <Avatar size="lg" source={{ uri: avatarUrl }} />
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
      <Text style={styles.date}>{date}</Text>
      <Button style={styles.botao} onPress={() => {}}>
        {botao}
        
      </Button>
    </VStack>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 20,
    borderRadius: 8,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "#000",
    shadowOffset: { height: 2, width: 0 },
    marginVertical: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  date: {
    fontWeight: "bold",
    marginTop: 11,
  },
  botao: {
    marginTop: 8,
    backgroundColor: "#120a8f",
  },
});