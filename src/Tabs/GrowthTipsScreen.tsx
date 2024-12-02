import React from "react";
import { StyleSheet } from "react-native";
import { VStack, Text } from "native-base";

export default function GrowthTipsScreen() {
  return (
    <VStack style={styles.container}>
      <Text style={styles.title}>Dicas de Crescimento</Text>
      <Text style={styles.content}>
        Aqui estão algumas dicas para ajudar o seu negócio a crescer...
      </Text>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  content: {
    fontSize: 16,
    color: "#555",
  },
});