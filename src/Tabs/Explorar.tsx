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
import { MaterialIcons, FontAwesome, Entypo } from "@expo/vector-icons";
import ConsultAí from '../assets/ConsultAí.png'

const { width } = Dimensions.get("window");

const features = [
  {
    id: 1,
    title: "Consultas Agendadas",
    description: "Visualize e gerencie suas consultas",
    icon: "calendar-today",
  },
  {
    id: 2,
    title: "Insights de Marketing",
    description: "Receba dicas personalizadas de marketing",
    icon: "insights",
  },
  {
    id: 3,
    title: "Rede de Contatos",
    description: "Conecte-se com outros profissionais",
    icon: "people",
  },
  {
    id: 4,
    title: "Feedbacks Recebidos",
    description: "Veja feedbacks de seus clientes",
    icon: "feedback",
  },
];

const newsItems = [
  {
    id: 1,
    title: "Notícia 1",
    description: "Descrição da notícia 1",
    icon: "newspaper-o",
  },
  {
    id: 2,
    title: "Notícia 2",
    description: "Descrição da notícia 2",
    icon: "newspaper-o",
  },
  {
    id: 3,
    title: "Notícia 3",
    description: "Descrição da notícia 3",
    icon: "newspaper-o",
  },
];

const categories = [
  { id: 1, title: "Marketing", icon: "megaphone" },
  { id: 2, title: "Tecnologia", icon: "laptop" },
  { id: 3, title: "Negócios", icon: "briefcase" },
  { id: 4, title: "Finanças", icon: "dollar" },
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
      <VStack flex={1} p={5}>
        <Box alignItems="center" mb={5}>
          <Text style={styles.title}>Bem-vindo ao ConsultAí</Text>
          <Text style={styles.description}>
            Ajudamos sua empresa a crescer com insights de marketing e
            assistência personalizada.
          </Text>
        </Box>
        <Divider my={4} />
        <Box>
          <Text style={styles.sectionTitle}>Destaques</Text>
          <FlatList
            data={features}
            renderItem={({ item }) => (
              <Box style={styles.featureBox} key={item.id}>
                <HStack alignItems="center">
                  <Icon
                    as={MaterialIcons}
                    name={item.icon}
                    size={7}
                    color="blue.800"
                    mr={3}
                  />
                  <VStack>
                    <Text style={styles.featureTitle}>{item.title}</Text>
                    <Text style={styles.featureDescription}>
                      {item.description}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </Box>
        <Divider my={4} />
        <Box>
          <Text style={styles.sectionTitle}>Últimas Notícias</Text>
          <FlatList
            data={newsItems}
            renderItem={({ item }) => (
              <Box style={styles.newsBox} key={item.id}>
                <HStack alignItems="center">
                  <Icon
                    as={FontAwesome}
                    name={item.icon}
                    size={7}
                    color="blue.800"
                    mr={3}
                  />
                  <VStack>
                    <Text style={styles.newsTitle}>{item.title}</Text>
                    <Text style={styles.newsDescription}>
                      {item.description}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </Box>
        <Divider my={4} />
        <Box>
          <Text style={styles.sectionTitle}>Categorias</Text>
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <Box style={styles.categoryBox} key={item.id}>
                <HStack alignItems="center">
                  <Icon
                    as={Entypo}
                    name={item.icon}
                    size={7}
                    color="blue.800"
                    mr={3}
                  />
                  <VStack>
                    <Text style={styles.categoryTitle}>{item.title}</Text>
                  </VStack>
                </HStack>
              </Box>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </Box>
        <Divider my={4} />
        <Box>
          <Button
            onPress={() => navigation.navigate("Chat")}
            style={styles.chatButton}
          >
            Assistência de Marketing
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
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  featureBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    width: width * 0.8,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  featureDescription: {
    fontSize: 14,
    color: "#777",
  },
  newsBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    width: width * 0.8,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  newsDescription: {
    fontSize: 14,
    color: "#777",
  },
  categoryBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    width: width * 0.8,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  chatButton: {
    backgroundColor: "#120a8f",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "center",
  },
  exitButton: {
    borderColor: "#fff",
    color: "#fff",
  },
  sair: {
    color: "#fff",
    fontWeight: "bold",
  },
});
