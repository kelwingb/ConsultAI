// CompetitorAnalysisScreen.tsx
import React from "react";
import { StyleSheet } from "react-native";
import { VStack, Text, ScrollView } from "native-base";

export default function CompetitorAnalysisScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <VStack space={4}>
        <Text style={styles.title}>Análise de Concorrência</Text>
        <Text style={styles.content}>
          Saiba como analisar seus concorrentes:
          {"\n"}1. Identifique quem são seus concorrentes. {"\n"}2. Observe suas
          estratégias de marketing. {"\n"}3. Aprenda com os pontos fortes e
          fracos deles.
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