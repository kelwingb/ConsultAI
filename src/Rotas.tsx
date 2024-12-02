import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "./Cadastro";
import Login from "./Login";
import Tabs from "./Tabs";
import Chat from "./Componentes/Chat";
import Principal from "./Tabs/Principal";
import ExploreScreen from "./Tabs/ExploreScreen"; // Atualize com o caminho correto
import FeatureDetailScreen from "./Tabs/FeatureDetailScreen"; // Novo arquivo
import UsefulToolsScreen from "./Tabs/UsefulToolsScreen";
import CompetitorAnalysisScreen from "./Tabs/CompetitorAnalysisScreen";
import GrowthTipsScreen from "./Tabs/GrowthTipsScreen";

export type RootStackParamList = {
  Login: undefined;
  Cadastro: { title: string; description: string };
  Tabs: undefined;
  Principal: undefined;
  GrowthTipsScreen: undefined;
  CompetitorAnalysisScreen: undefined;
  UsefulToolsScreen: undefined; // Adicione esta linha
  CaseStudiesScreen: undefined;
  Chat: undefined;
  FeatureDetail: undefined;
  Explore: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="GrowthTipsScreen" component={GrowthTipsScreen} />
        <Stack.Screen
          name="CompetitorAnalysisScreen"
          component={CompetitorAnalysisScreen}
        />
        <Stack.Screen name="UsefulToolsScreen" component={UsefulToolsScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="FeatureDetail" component={FeatureDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
