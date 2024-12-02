// UsefulToolsScreen.tsx
import React from "react";
import { StyleSheet } from "react-native";
import { VStack, Text, ScrollView } from "native-base";

export default function UsefulToolsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <VStack space={4}>
        <Text style={styles.title}>Ferramentas Úteis</Text>
        <Text style={styles.content}>
          Aqui estão algumas ferramentas que podem ajudar seu negócio:
          {"\n"}1. Planilhas de fluxo de caixa. {"\n"}2. Softwares de gestão de
          clientes (CRM). {"\n"}3. Ferramentas de marketing digital.
        </Text>
      </VStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 15 },
  content: { fontSize: 16, color: "#555" },
});
