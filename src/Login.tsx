import { VStack, Image, Text, Box, Link } from "native-base";
import { TouchableOpacity } from "react-native";
import ConsultAí from "./assets/ConsultAí.png";
import { Botao } from "./Componentes/Botao";
import { EntradaTexto } from "./Componentes/EntradaTexto";
import { Titulo } from "./Componentes/Titulo";

export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={ConsultAí} alt="ConsultAí Voll" />

      <Titulo>Faça login em sua conta</Titulo>
      <Box>
        <EntradaTexto
          label="Email"
          placeholder="Insira seu endereço de e-mail"
        />
        <EntradaTexto
          label="Senha"
          placeholder="Insira sua senha"
          secureTextEntry={true} // Adicione esta linha para esconder a senha
        />
      </Box>
      <Botao onPress={() => navigation.navigate("Tabs")}>Entrar</Botao>

      <Link href="https://consultai-seven.vercel.app/login" mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text color="blue.500">Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
