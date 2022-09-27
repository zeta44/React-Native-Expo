import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  listContainer: {
    flex: 1, 
    height: "50%",
    marginBottom: 1050  
  },
  formContainer: {
    width: "100%",
    justifyContent: "space-around",
    backgroundColor: "#fafafafa",
    alignItems: "center",
    padding: "8%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  form: {
    width: "100%",
    
  },
  formLabel: {
    color: "#000000",
    fontSize: 18,
  },
  input: {
    width: "100%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
  },
  buttonCalculator: {
    width: "100%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: 30,
  },
  textButtonCalcutator: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
  },
  exibitionResultImc: {
    width: "100%",
  },
  imcListContainer: {
    paddingTop: 80,
    alignItems: "center",
    height: "auto",
    width: "100%",
  },
  listImcs: {
    // marginTop: 20,
  },
  resultImcItem: {
    fontSize: 24,
    color: "red",
    height: 50,
    width: "100%",
    fontWeight: "bold",
  },
  textResultItemList: {
    alignContent: "space-between",
    color: "red",
    fontSize: 16,
    textAlign: "justify",
  },
});

export default styles;
