import React from "react";
import { StyleSheet } from "react-native";
import { VStack, Text, Box, Button } from "native-base";

interface FeatureDetailScreenProps {
  route: {
    params: {
      title: string;
      description: string;
    };
  };
  navigation: any; // Você pode definir um tipo mais específico para a navegação
}

export default function FeatureDetailScreen({
  route,
  navigation,
}: FeatureDetailScreenProps) {
  const { title, description } = route.params; // Receber parâmetros da navegação

  return (
    <VStack
      style={styles.container}
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Box p={5} borderRadius={10} backgroundColor="#fff" shadow={2}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Button
          mt={5}
          onPress={() => navigation.goBack()}
          backgroundColor="blue.800"
          _text={{ color: "white" }}
        >
          Voltar
        </Button>
      </Box>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 15,
  },
});
