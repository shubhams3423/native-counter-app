import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const testNumber = /^\d+(\.\d+)?$/;
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <TouchableOpacity onPress={() => setIsCursorVisible(true)}>
          <TextInput
            style={styles.inputBox}
            value={String(counter)}
            editable={isCursorVisible}
            onChangeText={(newText) =>
              testNumber.test(newText) && setCounter(Number(newText))
            }
          />
        </TouchableOpacity>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              counter > 0 && setCounter(counter - 1);
              setIsCursorVisible(false);
            }}
          >
            <Text style={styles.btnLable}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setCounter(0);
              setIsCursorVisible(false);
            }}
          >
            <Text style={styles.btnLable}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setCounter(counter + 1);
              setIsCursorVisible(false);
            }}
          >
            <Text style={styles.btnLable}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CounterApp;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
    alignItems: "center",
    overflow: "hidden",
  },
  childContainer: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnLable: {
    color: "black",
    fontSize: 25,
  },
  button: {
    backgroundColor: "white",
    border: "2px solid white",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputBox: {
    color: "white",
    borderWidth: 0,
    fontSize: 100,
    fontWeight: "700",
    outlineStyle: "none",
    textAlign: "center",
    paddingBottom: 20,
    cursor: "auto",
  },
  buttons: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 25,
    alignItems: "center",
  },
});
