import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import CustomersScreen from "./screens/CustomersScreen";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const REACT_APP_STEPZEN_API_KEY =
  "goyamara::stepzen.net+1000::61b51f8ab0cd25eae2c0fa09da3fa9cdc6502ad826632c2b1ebf738fab9fb93e";

const client = new ApolloClient({
  headers: {
    Authorization: `Apikey ${REACT_APP_STEPZEN_API_KEY}`,
  },

  uri: "https://goyamara.stepzen.net/api/impressive-porcupine/__graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    //@ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
