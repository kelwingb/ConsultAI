import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import {
  VStack,
  HStack,
  Image,
  Box,
  Button,
  Text,
  Divider,
  FlatList,
  ScrollView,
  Icon,
} from "native-base";
import ConsultAí from "../assets/ConsultAí.png";
import { MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const exploreFeatures = [
  {
    id: 1,
    title: "Dicas de Crescimento",
    description: "Aprenda como expandir seus negócios",
    icon: "trending-up",
  },
  {
    id: 2,
    title: "Análise de Concorrência",
    description: "Veja o que seus concorrentes estão fazendo",
    icon: "bar-chart",
  },
  {
    id: 3,
    title: "Ferramentas Úteis",
    description: "Acesse ferramentas que facilitam sua jornada",
    icon: "build",
  },
  {
    id: 4,
    title: "Estudos de Caso",
    description: "Inspire-se com histórias de sucesso",
    icon: "check-circle",
  },
];

export default function ExploreScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        p={5}
        backgroundColor="#f5f5f5"
        borderBottomLeftRadius={20}
        borderBottomRightRadius={20}
        shadow={6}
      >
        <Image source={ConsultAí} alt="ConsultAí" style={styles.logo} />
        <Button
          variant="outline"
          onPress={() => navigation.navigate("Login")}
          style={styles.exitButton}
          backgroundColor="blue.800"
        >
          <Text style={styles.sair}>Sair</Text>
        </Button>
      </HStack>

      <VStack flex={1} p={5} space={3}>
        <Box alignItems="center" my={2}>
          <Text style={styles.title}>Explore Recursos</Text>
          <Text style={styles.description}>
            Descubra ferramentas e dicas que podem ajudar seu negócio a crescer.
          </Text>
        </Box>

        <Divider my={4} />

        <Box>
          <Text style={styles.sectionTitle}>Destaques da Exploração</Text>
          <FlatList
            data={exploreFeatures}
            renderItem={({ item }) => (
              <Box style={styles.featureBox} key={item.id}>
                <HStack alignItems="center">
                  <Icon
                    as={MaterialIcons}
                    name={item.icon}
                    size={8}
                    color="blue.800"
                    mr={3}
                  />
                  <VStack flex={1}>
                    <Text style={styles.featureTitle}>{item.title}</Text>
                    <Text style={styles.featureDescription}>
                      {item.description}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            )}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
        </Box>

        <Divider my={4} />

        <Box>
          <Button
            onPress={() => navigation.navigate("Chat")}
            style={styles.chatButton}
            _text={{ color: "white" }}
          >
            Iniciar Conversa
          </Button>
        </Box>
      </VStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  logo: {
    width: 80,
    height: 40,
  },
  title: {
    fontSize: 22.5,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  featureBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 5,
    width: width * 0.8,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  featureDescription: {
    fontSize: 14,
    color: "#777",
  },
  chatButton: {
    backgroundColor: "#120a8f",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 2,
  },
  exitButton: {
    borderColor: "#fff",
    color: "#fff",
  },
  sair: {
    color: "#fff",
    fontWeight: "bold",
  },
  flatListContainer: {
    paddingBottom: 20,
  },
});