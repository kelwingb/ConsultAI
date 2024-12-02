import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../Componentes/Titulo";

export default function Perfil() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Titulo color="blue.800">Meu Perfil</Titulo>

        <Avatar size="xl"
          source={{
            uri: "https://avatars.githubusercontent.com/u/133005627?v=4",
          }}
          mt={5}
        />
        <Titulo color="blue.800">Informações Pessoais</Titulo>
        <Titulo fontSize="lg" mb={1}>
          Kelwin Gabriel
        </Titulo>
        <Text>05/11/2007</Text>
        <Text>Acopiara</Text>

        <Divider mt={5} />

        <Titulo color="blue.800" mb={1}>Histórico</Titulo>
        <Text>Lorem</Text>
        <Text>Lorem</Text>
      </VStack>
    </ScrollView>
  );
}
