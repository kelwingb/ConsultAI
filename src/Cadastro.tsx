import React, { useState } from "react";
import { ScrollView, Image, Box, Checkbox, Text, Row } from "native-base";
import consulta from "./assets/consulta.png";
import { Botao } from "./Componentes/Botao";
import { EntradaTexto } from "./Componentes/EntradaTexto";
import { Titulo } from "./Componentes/Titulo";
import { secoes } from "./utils/CadastroEntradaTexto";

interface planosProps {
  title: string;
  description: string;
}

export default function Cadastro({ title, description }: planosProps) {
  const [numSecao, setNumSecao] = useState(0);

  function avancarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    }
  }

  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={consulta} alt="consulta" alignSelf="center" />
      {secoes[numSecao] && (
        <>
          <Titulo>{secoes[numSecao].titulo}</Titulo>
          <Box>
            {secoes[numSecao].entradaTexto?.map((entrada) => (
              <EntradaTexto
                label={entrada.label}
                placeholder={entrada.placeholder}
                key={entrada.id}
              />
            ))}
          </Box>
          {numSecao === 2 && (
            <Box>
              <Text
                color="blue.800"
                fontWeight="bold"
                fontSize="xl"
                mt="2"
                mb={2}
              >
                Selecione o plano:
              </Text>
              {secoes[numSecao]?.checkbox?.map((checkbox) => {
                return (
                  <Box key={checkbox.id} mb={2}>
                    <Checkbox value={checkbox.value}>
                      <Text fontSize="md" fontWeight="bold">
                        {checkbox.value}
                      </Text>
                    </Checkbox>
                    <Text ml={6} color="gray.500">
                      {checkbox.description}
                    </Text>
                    <Text mt={2} fontSize="md" fontWeight="bold" ml={6}>
                      {checkbox.custo}
                    </Text>
                    <Text mt={2} fontSize="md" fontWeight="bold" ml={6}>
                      {checkbox.title}
                    </Text>
                    <Text ml={6} color="gray.500">
                      {checkbox.funcionalidades}
                    </Text>
                  </Box>
                );
              })}
            </Box>
          )}
        </>
      )}
      {numSecao > 0 && (
        <Botao onPress={() => voltarSecao()} bgColor="gray.400">
          Voltar
        </Botao>
      )}
      <Botao onPress={() => avancarSecao()} mt={4} mb={20}>
        Avançar
      </Botao>
    </ScrollView>
  );
}
