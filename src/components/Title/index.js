import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

export default function Title(props) {
  var formStyles = styles;

  formStyles.textTitle = {
    color: "#FF0043",
    fontSize: props.fontSize,
    fontWeight: "bold",
  };
  formStyles.boxTitle = {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: props.paddingTop,
    paddingBottom: props.paddingBottom,
  };

 
  return (
    <View style={formStyles.boxTitle}>
      <Text style={formStyles.textTitle}>{props.title.toUpperCase()}</Text>
    </View>
  );
}
