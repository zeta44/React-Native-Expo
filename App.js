import React from "react";
import { View } from "react-native";
import styles from "./style";
import Title from "./src/components/Title/index";
import Form from "./src/components/Form/index";
import { AppLoading } from "expo-app-loading";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
} from "@expo-google-fonts/roboto";

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
  });

  if (error) {
    return <AppLoading />;
  }
  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Title
          title={"BMI Calculator"}
          fontSize={24}
          paddingBottom={20}
          paddingTop={80}
        />
        <Form />
        <View style={styles.main}>

        </View>
      </View>
    );
  }
}
