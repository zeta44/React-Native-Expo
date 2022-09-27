import { React, useState } from "react";
import {
  TextInput,
  Text,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  View,
  FlatList,
} from "react-native";
import ResultIMC from "./ResultIMC";
import Title from "../Title";
import styles from "./style";
import list from "../mock/list.json";

const ligarLista = true;

export default function Form(props) {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState(
    "Fill in the weight and height."
  );
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState(ligarLista ? list : []);

  function dateFormated() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    let hh = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    if (hh < 10) hh = "0" + hh;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    const formattedToday =
      dd + "/" + mm + "/" + yyyy + " - " + hh + ":" + min + ":" + sec;

    return formattedToday;
  }

  function verificationImc(params) {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage("Required field*");
    }
  }

  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    let weightFormat = weight.replace(",", ".");

    let totalImc = (weightFormat / (heightFormat * heightFormat)).toFixed(2);
    setImcList((arr) => [
      ...arr,
      {
        id: new Date().getTime(),
        date: dateFormated(),
        imc: totalImc,
      },
    ]);
    setImc(totalImc);
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Your BMI is :");
      setTextButton("Recalculate");
      setErrorMessage(null);
    } else {
      verificationImc();
      setImc(null);
      setTextButton("Calculate");
      setMessageImc("Fill in weight and height");
      // setErrorMessage(null)
    }
  }

  return (
    <View style={styles.formContainer}>
      {imc == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Height</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.75m"
            keyboardType="number-pad"
          />
          <Text style={styles.formLabel}>Weight</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex. 75.36g"
            keyboardType="number-pad"
          />
          <View>
            <TouchableOpacity
              style={styles.buttonCalculator}
              onPress={() => {
                validationImc();
                Keyboard.dismiss();
              }}
            >
              <Text style={styles.textButtonCalcutator}>{textButton}</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      ) : (
        <View style={styles.imcListContainer}>
          
            <ResultIMC messageResultImc={messageImc} resultImc={imc} />
            <TouchableOpacity
              style={styles.buttonCalculator}
              onPress={() => {
                validationImc();
                
              }}
            >
              <Text style={styles.textButtonCalcutator}>{textButton}</Text>
            </TouchableOpacity>
          
          <View>
            <Title
              title={"BMI History"}
              fontSize={16}
              paddingBottom={20}
              paddingTop={20}
            />
            <View style={styles.listContainer}>
              <FlatList
                data={imcList.reverse()}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <Text style={styles.textResultItemList}>
                      {item.date + " - "}
                      <Text style={styles.resultImcItem}>{item.imc}</Text>
                    </Text>
                  );
                }}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
