import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Button, VStack, Box, FlatList, Text, HStack } from "native-base";
import axios from "axios";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Olá! Como posso ajudar você hoje?", isBot: true },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { id: Date.now(), text: input, isBot: false };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      const response = await axios.post(
        "http://localhost:8000/generate", // Altere para o endereço do seu servidor FastAPI
        {
          prompt: input, // Envie a mensagem do usuário como prompt
        },
        { headers: { "Content-Type": "application/json" } }
      );

      const botMessage = {
        id: Date.now() + 1,
        text: response.data.generated_text, // Acesse o texto gerado corretamente
        isBot: true,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Erro ao se comunicar com a API:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now() + 1, text: "Erro ao obter resposta", isBot: true },
      ]);
    }
  };

  return (
    <VStack style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <HStack
            justifyContent={item.isBot ? "flex-start" : "flex-end"}
            style={styles.messageContainer}
          >
            <Box
              p={3}
              backgroundColor={item.isBot ? "#f0f0f0" : "#0066cc"}
              borderRadius={15}
              maxWidth="80%"
            >
              <Text style={{ color: item.isBot ? "#000" : "#fff" }}>
                {item.text}
              </Text>
            </Box>
          </HStack>
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.chatArea}
      />

      <HStack space={2} alignItems="center" p={4} style={styles.inputArea}>
        <TextInput
          placeholder="Digite sua mensagem..."
          style={styles.input}
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <Button onPress={sendMessage} style={styles.sendButton}>
          Enviar
        </Button>
      </HStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  chatArea: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  messageContainer: {
    marginVertical: 5,
  },
  inputArea: {
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 10,
  },
  sendButton: {
    backgroundColor: "#120a8f",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
});
