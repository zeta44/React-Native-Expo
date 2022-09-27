import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultIMC(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "My BMI today is" + props.resultImc + ".",
    });
  };

  return (
    <View style={styles.resultContainer}>
      <View style={styles.resultImc}>
        <Text style={styles.information}>{props.messageResultImc}</Text>
        <Text style={styles.numberImc}>{props.resultImc}</Text>
      </View>
      <View style={styles.boxShareButton}>
        <TouchableOpacity style={styles.shared} onPress={onShare}>
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
